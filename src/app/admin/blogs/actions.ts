'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import fs from 'fs/promises'
import path from 'path'

export async function addBlog(prevState: unknown, formData: FormData) {
  try {
    const title = String(formData.get('title') || '')
    const rawSlug = String(formData.get('slug') || '')
    let slug = rawSlug
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Ensure slug uniqueness
    let uniqueSlug = slug
    let counter = 1
    while (await prisma.blog.findUnique({ where: { slug: uniqueSlug } })) {
      uniqueSlug = `${slug}-${counter}`
      counter++
    }
    slug = uniqueSlug

    const excerpt = String(formData.get('excerpt') || '')
    const content = String(formData.get('content') || '')
    const tags = String(formData.get('tags') || '')
    const authorName = String(formData.get('authorName') || '')
    const publishDate = String(formData.get('publishDate') || '')
    const readTime = String(formData.get('readTime') || '')
    const category = String(formData.get('category') || '')
    let imageUrl = String(formData.get('imageUrl') || '')
    
    // Handle file upload
    const file = formData.get('image') as File | null
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const uploadDir = path.join(process.cwd(), 'public', 'uploads')
      await fs.mkdir(uploadDir, { recursive: true })
      const filename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-]/g, '')}`
      await fs.writeFile(path.join(uploadDir, filename), buffer)
      imageUrl = `/uploads/${filename}`
    }

    await prisma.blog.create({
      data: { 
        title, 
        slug, 
        excerpt, 
        content, 
        tags, 
        authorName, 
        category, 
        publishDate, 
        readTime, 
        imageUrl 
      },
    })

    revalidatePath('/blog')
    revalidatePath(`/blog/${slug}`)
    revalidatePath('/')
    revalidatePath('/admin/blogs')
    revalidatePath('/admin')
    
    return { success: true, message: 'Blog added successfully' }
  } catch (error) {
    console.error('Error adding blog:', error)
    return { success: false, message: `Failed to add blog: ${error instanceof Error ? error.message : String(error)}` }
  }
}

export async function updateBlog(prevState: unknown, formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    if (!id) return { success: false, message: 'Invalid blog ID' }

    const title = String(formData.get('title') || '')
    const rawSlug = String(formData.get('slug') || '')
    let slug = rawSlug
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Ensure slug uniqueness (excluding current blog)
    let uniqueSlug = slug
    let counter = 1
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const existing = await prisma.blog.findFirst({
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

    const excerpt = String(formData.get('excerpt') || '')
    const content = String(formData.get('content') || '')
    const tags = String(formData.get('tags') || '')
    const authorName = String(formData.get('authorName') || '')
    const publishDate = String(formData.get('publishDate') || '')
    const readTime = String(formData.get('readTime') || '')
    const category = String(formData.get('category') || '')
    let imageUrl = String(formData.get('imageUrl') || '')
    
    // Handle file upload
    const file = formData.get('image') as File | null
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const uploadDir = path.join(process.cwd(), 'public', 'uploads')
      await fs.mkdir(uploadDir, { recursive: true })
      const filename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-]/g, '')}`
      await fs.writeFile(path.join(uploadDir, filename), buffer)
      imageUrl = `/uploads/${filename}`
    }

    await prisma.blog.update({
      where: { id },
      data: { 
        title, 
        slug, 
        excerpt, 
        content, 
        tags, 
        authorName, 
        category, 
        publishDate, 
        readTime, 
        imageUrl: imageUrl || undefined 
      },
    })

    revalidatePath('/blog')
    revalidatePath(`/blog/${slug}`)
    revalidatePath('/')
    revalidatePath('/admin/blogs')
    revalidatePath('/admin')
    
    return { success: true, message: 'Blog updated successfully' }
  } catch (error) {
    console.error('Error updating blog:', error)
    return { success: false, message: `Failed to update blog: ${error instanceof Error ? error.message : String(error)}` }
  }
}

export async function deleteBlog(formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    await prisma.blog.delete({ where: { id } })
    revalidatePath('/blog')
    revalidatePath('/admin/blogs')
    revalidatePath('/admin')
    return { success: true, message: 'Blog deleted successfully' }
  } catch (error) {
    console.error('Error deleting blog:', error)
    return { success: false, message: `Failed to delete blog: ${error instanceof Error ? error.message : String(error)}` }
  }
}
