'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import fs from 'fs/promises'
import path from 'path'

export async function addTip(prevState: unknown, formData: FormData) {
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
    while (await prisma.tip.findUnique({ where: { slug: uniqueSlug } })) {
      uniqueSlug = `${slug}-${counter}`
      counter++
    }
    slug = uniqueSlug

    const description = String(formData.get('description') || '')
    const content = String(formData.get('content') || '')
    const category = String(formData.get('category') || '')
    const readTime = String(formData.get('readTime') || '')
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

    await prisma.tip.create({
      data: { 
        title, 
        slug, 
        description, 
        content, 
        category, 
        readTime, 
        imageUrl 
      },
    })

    revalidatePath('/tips-tricks')
    revalidatePath(`/tips-tricks/${slug}`)
    revalidatePath('/')
    revalidatePath('/admin/tips')
    revalidatePath('/admin')
    
    return { success: true, message: 'Tip added successfully' }
  } catch (error) {
    console.error('Error adding tip:', error)
    return { success: false, message: `Failed to add tip: ${error instanceof Error ? error.message : String(error)}` }
  }
}

export async function updateTip(prevState: unknown, formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    if (!id) return { success: false, message: 'Invalid tip ID' }

    const title = String(formData.get('title') || '')
    const rawSlug = String(formData.get('slug') || '')
    let slug = rawSlug
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Ensure slug uniqueness (excluding current tip)
    let uniqueSlug = slug
    let counter = 1
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const existing = await prisma.tip.findFirst({
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
    const content = String(formData.get('content') || '')
    const category = String(formData.get('category') || '')
    const readTime = String(formData.get('readTime') || '')
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

    await prisma.tip.update({
      where: { id },
      data: { 
        title, 
        slug, 
        description, 
        content, 
        category, 
        readTime, 
        imageUrl: imageUrl || undefined 
      },
    })

    revalidatePath('/tips-tricks')
    revalidatePath(`/tips-tricks/${slug}`)
    revalidatePath('/')
    revalidatePath('/admin/tips')
    revalidatePath('/admin')
    
    return { success: true, message: 'Tip updated successfully' }
  } catch (error) {
    console.error('Error updating tip:', error)
    return { success: false, message: `Failed to update tip: ${error instanceof Error ? error.message : String(error)}` }
  }
}

export async function deleteTip(formData: FormData) {
  try {
    const id = Number(formData.get('id'))
    await prisma.tip.delete({ where: { id } })
    revalidatePath('/tips-tricks')
    revalidatePath('/admin/tips')
    revalidatePath('/admin')
    return { success: true, message: 'Tip deleted successfully' }
  } catch (error) {
    console.error('Error deleting tip:', error)
    return { success: false, message: `Failed to delete tip: ${error instanceof Error ? error.message : String(error)}` }
  }
}

export async function deleteTips(ids: number[]) {
  try {
    await prisma.tip.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    })
    revalidatePath('/tips-tricks')
    revalidatePath('/admin/tips')
    revalidatePath('/admin')
    return { success: true, message: 'Tips deleted successfully' }
  } catch (error) {
    console.error('Error deleting tips:', error)
    return { success: false, message: `Failed to delete tips: ${error instanceof Error ? error.message : String(error)}` }
  }
}
