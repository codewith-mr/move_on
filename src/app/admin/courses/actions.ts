'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import fs from 'fs/promises'
import path from 'path'

export async function addCourse(prevState: any, formData: FormData) {
  try {
    const title = String(formData.get('title') || '')
    // Sanitize slug: lowercase, replace spaces/special chars with hyphens
    const rawSlug = String(formData.get('slug') || '')
    const slug = rawSlug
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and hyphens)
      .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

    const description = String(formData.get('description') || '')
    const instructor = String(formData.get('instructor') || '')
    const level = String(formData.get('level') || '')
    const duration = String(formData.get('duration') || '')
    const price = Number(formData.get('price') || 0)
    const discountPrice = formData.get('discountPrice') ? Number(formData.get('discountPrice')) : null
    const rating = Number(formData.get('rating') || 0)
    const reviewCount = Number(formData.get('reviewCount') || 0)
    const category = String(formData.get('category') || '')
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
        classes: {
          create: classes.map((cls: any, index: number) => ({
            index: index + 1,
            title: cls.title,
            contentType: cls.contentType || 'video',
            videoUrl: cls.videoUrl,
            textContent: cls.textContent,
          }))
        }
      },
    })

    revalidatePath('/courses')
    revalidatePath('/admin/courses')
    revalidatePath('/admin')
    
    return { success: true, message: 'Course added successfully' }
  } catch (error) {
    console.error('Error adding course:', error)
    return { success: false, message: 'Failed to add course' }
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
    return { success: true }
  } catch (error) {
    console.error('Error deleting course:', error)
    return { success: false, message: 'Failed to delete course' }
  }
}
