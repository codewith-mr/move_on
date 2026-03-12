import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';
import { prisma } from '@/lib/prisma';
import { BlogCardProps } from '@/components/cards/BlogCard';
import { Blog } from '@prisma/client';

const BlogClient = dynamic(() => import('@/components/pages/BlogClient'), {
  loading: () => <div className="container mx-auto px-4 py-20 text-center text-neutral-500">Loading…</div>,
});

export const revalidate = 60;

export default async function BlogPage() {
  const allPosts = await prisma.blog.findMany({ orderBy: { publishDate: 'desc' } });
  const mapped: BlogCardProps[] = allPosts.map((post: Blog) => ({
    id: String(post.id),
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    author: { name: post.authorName, avatar: post.authorAvatar || '/user-avatar.svg' },
    category: post.category,
    publishDate: post.publishDate,
    readTime: post.readTime ?? '',
    imageUrl: post.imageUrl,
  }));

  // Extract unique categories
  const categories = Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)));

  return (
    <MainLayout>
      <BlogClient posts={mapped} availableCategories={categories} />
    </MainLayout>
  )
}
