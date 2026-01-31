import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import BlogForm from '@/components/admin/BlogForm'

export default async function BlogsManager() {
  async function deleteBlog(formData: FormData) {
    'use server'
    const id = Number(formData.get('id'))
    await prisma.blog.delete({ where: { id } })
    revalidatePath('/blog')
    revalidatePath('/admin/blogs')
    revalidatePath('/admin')
  }

  const blogs = await prisma.blog.findMany({ orderBy: { updatedAt: 'desc' } })

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">Blog Manager</h2>
      
      <BlogForm />

      <div>
        <h3 className="font-semibold mb-2">Existing Blogs</h3>
        <ul className="divide-y">
          {blogs.map(b => (
            <li key={b.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{b.title}</div>
                <div className="text-sm text-neutral-500">{b.slug}</div>
              </div>
              <div className="flex items-center gap-4">
                <Link 
                  href={`/admin/blogs/${b.id}/edit`}
                  className="text-primary hover:text-primary/80"
                >
                  Edit
                </Link>
                <span className="text-gray-300">|</span>
                <form action={deleteBlog}>
                  <input type="hidden" name="id" value={String(b.id)} />
                  <button className="text-red-600">Delete</button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
