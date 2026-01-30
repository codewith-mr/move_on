

// Levels for filtering

import MainLayout from '@/components/layout/MainLayout';
import { prisma } from '@/lib/prisma';
import CoursesClient from '@/components/pages/CoursesClient';
import { CourseCardProps } from '@/components/cards/CourseCard';

export default async function CoursesPage() {
  const allCourses = await prisma.course.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      instructor: true,
      level: true,
      duration: true,
      price: true,
      discountPrice: true,
      rating: true,
      reviewCount: true,
      imageUrl: true,
      category: true,
      tags: true,
    }
  });
  
  // Extract unique categories from courses
  const categories = Array.from(new Set(allCourses.map(c => c.category).filter(Boolean)));
  
  const mapped: CourseCardProps[] = allCourses.map((c) => ({
    id: String(c.id),
    slug: c.slug,
    title: c.title,
    description: c.description,
    instructor: c.instructor,
    level: c.level,
    duration: c.duration,
    price: c.price,
    discountPrice: c.discountPrice ?? undefined,
    rating: c.rating ?? 0,
    reviewCount: c.reviewCount ?? 0,
    imageUrl: c.imageUrl,
    category: c.category,
    tags: c.tags ? c.tags.split(',').map((t: string) => t.trim()) : [],
  }));
  return (
    <MainLayout>
      <CoursesClient courses={mapped} availableCategories={categories} />
    </MainLayout>
  )
}
