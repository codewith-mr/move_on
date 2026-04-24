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

  // Serialize and map to a clean object for client components
  const serializedBlog = {
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    content: blog.content,
    tags: blog.tags,
    authorName: blog.authorName,
    authorAvatar: blog.authorAvatar,
    category: blog.category,
    publishDate: blog.publishDate,
    readTime: blog.readTime,
    imageUrl: blog.imageUrl,
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Edit Blog</h2>
        <Link href="/admin/blogs" className="text-sm text-neutral-500 hover:text-neutral-700">
          ← Back to Blogs
        </Link>
      </div>

      <BlogForm initialData={serializedBlog} />
    </div>
  )
}
