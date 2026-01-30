'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import fs from 'fs/promises'
import path from 'path'

export async function addCourse(prevState: unknown, formData: FormData) {
  try {
    const title = String(formData.get('title') || '')
    // Sanitize slug: lowercase, replace spaces/special chars with hyphens
    const rawSlug = String(formData.get('slug') || '')
    let slug = rawSlug
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and hyphens)
      .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

    // Ensure slug uniqueness
    let uniqueSlug = slug
    let counter = 1
    while (await prisma.course.findUnique({ where: { slug: uniqueSlug } })) {
      uniqueSlug = `${slug}-${counter}`
      counter++
    }
    slug = uniqueSlug

    const description = String(formData.get('description') || '')
    const instructor = String(formData.get('instructor') || '')
    const level = String(formData.get('level') || '')
    const duration = String(formData.get('duration') || '')
    const price = Number(formData.get('price') || 0)
    const discountPrice = formData.get('discountPrice') ? Number(formData.get('discountPrice')) : null
    const rating = Number(formData.get('rating') || 0)
    const reviewCount = Number(formData.get('reviewCount') || 0)
    const category = String(formData.get('category') || '')
    const tags = String(formData.get('tags') || '')
    let imageUrl = String(formData.get('imageUrl') || '')
    
    // Handle file upload
    const file = formData.get('thumbnail') as File | null
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const uploadDir = path.join(process.cwd(), 'public', 'uploads')
      await fs.mkdir(uploadDir, { recursive: true })
      const filename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-]/g, '')}`
      await fs.writeFile(path.join(uploadDir, filename), buffer)
      imageUrl = `/uploads/${filename}`
    }

    // Parse classes from JSON string
    const classesJson = String(formData.get('classes') || '[]')
    let classes = []
    try {
      classes = JSON.parse(classesJson)
    } catch (e) {
      console.error('Failed to parse classes JSON', e)
    }

    await prisma.course.create({
      data: {
        title,
        slug,
        description,
        instructor,
        level,
        duration,
        price,
        discountPrice,
        rating,
        reviewCount,
        imageUrl,
        category,
        tags: tags || null,
        classes: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          create: classes.map((cls: any, index: number) => ({
            index: index + 1,
            title: cls.title,
            section: cls.section || null,
            contentType: cls.contentType || 'video',
            videoUrl: cls.videoUrl,
            textContent: cls.textContent,
          }))
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    })

    revalidatePath('/courses')
    revalidatePath('/admin/courses')
    revalidatePath('/admin')
    
    return { success: true, message: 'Course added successfully' }
  } catch (error) {
    console.error('Error adding course:', error)
    return { success: false, message: `Failed to add course: ${error instanceof Error ? error.message : String(error)}` }
  }
}

export async function updateCourse(prevState: unknown, formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    if (!id) return { success: false, message: 'Invalid course ID' }

    const title = String(formData.get('title') || '')
    // Sanitize slug: lowercase, replace spaces/special chars with hyphens
    const rawSlug = String(formData.get('slug') || '')
    let slug = rawSlug
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Ensure slug uniqueness (excluding current course)
    let uniqueSlug = slug
    let counter = 1
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const existing = await prisma.course.findFirst({
        where: { 
          slug: uniqueSlug,
          NOT: { id }
        }
      })
      if (!existing) break
      uniqueSlug = `${slug}-${counter}`
      counter++
    }
    slug = uniqueSlug

    const description = String(formData.get('description') || '')
    const instructor = String(formData.get('instructor') || '')
    const level = String(formData.get('level') || '')
    const duration = String(formData.get('duration') || '')
    const price = Number(formData.get('price') || 0)
    const discountPrice = formData.get('discountPrice') ? Number(formData.get('discountPrice')) : null
    const rating = Number(formData.get('rating') || 0)
    const reviewCount = Number(formData.get('reviewCount') || 0)
    const category = String(formData.get('category') || '')
    const tags = String(formData.get('tags') || '')
    let imageUrl = String(formData.get('imageUrl') || '')
    
    // Handle file upload
    const file = formData.get('thumbnail') as File | null
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const uploadDir = path.join(process.cwd(), 'public', 'uploads')
      await fs.mkdir(uploadDir, { recursive: true })
      const filename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-]/g, '')}`
      await fs.writeFile(path.join(uploadDir, filename), buffer)
      imageUrl = `/uploads/${filename}`
    }

    // Parse classes from JSON string
    const classesJson = String(formData.get('classes') || '[]')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let classesData: any[] = []
    try {
      classesData = JSON.parse(classesJson)
    } catch (e) {
      console.error('Failed to parse classes JSON', e)
    }
    
    // Update course basic info
    // Trigger rebuild for updateCourse export
    await prisma.course.update({
      where: { id },
      data: {
        title,
        slug,
        description,
        instructor,
        level,
        duration,
        price,
        discountPrice,
        rating,
        reviewCount,
        imageUrl: imageUrl || undefined,
        category,
        tags: tags || null,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    })

    // Handle classes update
    // 1. Get existing class IDs for this course
    const existingClasses = await prisma.courseClass.findMany({
      where: { courseId: id },
      select: { id: true }
    })
    const existingIds = existingClasses.map(c => c.id)

    // 2. Identify incoming IDs (classes that still exist)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const incomingIds = classesData.filter((c: any) => c.id).map((c: any) => Number(c.id))

    // 3. Delete classes that are no longer in the list
    const idsToDelete = existingIds.filter(eid => !incomingIds.includes(eid))
    if (idsToDelete.length > 0) {
      await prisma.courseClass.deleteMany({
        where: { id: { in: idsToDelete } }
      })
    }

    // 4. Update existing classes and create new ones
    for (let i = 0; i < classesData.length; i++) {
      const cls = classesData[i]
      const classData = {
        title: cls.title,
        section: cls.section || null,
        contentType: cls.contentType || 'video',
        videoUrl: cls.videoUrl,
        textContent: cls.textContent,
        index: i + 1 // Re-index based on new order
      }

      if (cls.id) {
        // Update existing
        await prisma.courseClass.update({
          where: { id: Number(cls.id) },
          data: classData
        })
      } else {
        // Create new
        await prisma.courseClass.create({
          data: {
            courseId: id,
            ...classData
          }
        })
      }
    }

    revalidatePath('/courses')
    revalidatePath('/admin/courses')
    revalidatePath('/admin')
    revalidatePath(`/courses/${slug}`)
    
    return { success: true, message: 'Course updated successfully' }
  } catch (error) {
    console.error('Error updating course:', error)
    return { success: false, message: `Failed to update course: ${error instanceof Error ? error.message : String(error)}` }
  }
}

export async function deleteCourse(formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    
    // Get course image to delete file if it exists
    const course = await prisma.course.findUnique({ where: { id } })

    // Use transaction to delete related records first to avoid foreign key constraints
    await prisma.$transaction([
      prisma.courseClass.deleteMany({ where: { courseId: id } }),
      prisma.homeSettingsFeaturedCourse.deleteMany({ where: { courseId: id } }),
      prisma.course.delete({ where: { id } })
    ])

    // Try to delete image file if it's an upload
    if (course?.imageUrl && course.imageUrl.startsWith('/uploads/')) {
      try {
        const imagePath = path.join(process.cwd(), 'public', course.imageUrl)
        await fs.unlink(imagePath)
      } catch (e) {
        // Ignore error if file doesn't exist
        console.error('Failed to delete course image:', e)
      }
    }

    revalidatePath('/')
    revalidatePath('/courses')
    revalidatePath('/admin/courses')
    revalidatePath('/admin')
  } catch (error) {
    console.error('Error deleting course:', error)
    throw error
  }
}
