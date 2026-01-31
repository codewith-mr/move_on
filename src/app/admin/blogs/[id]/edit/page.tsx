import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import BlogForm from '@/components/admin/BlogForm'
import Link from 'next/link'

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(id) }
  })

  if (!blog) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Edit Blog</h2>
        <Link href="/admin/blogs" className="text-sm text-neutral-500 hover:text-neutral-700">
          ← Back to Blogs
        </Link>
      </div>

      <BlogForm initialData={blog} />
    </div>
  )
}
