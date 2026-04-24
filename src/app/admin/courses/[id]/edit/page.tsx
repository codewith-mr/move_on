import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CourseForm from '@/components/admin/CourseForm'

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const courseId = Number(id);
  
  const course = await prisma.course.findUnique({ 
    where: { id: courseId },
    include: {
      classes: {
        orderBy: { index: 'asc' }
      }
    }
  });
  
  if (!course) {
    notFound();
  }

  // Serialize and map to a clean object for client components
  const serializedCourse = {
    id: course.id,
    slug: course.slug,
    title: course.title,
    description: course.description,
    instructor: course.instructor,
    level: course.level,
    duration: course.duration,
    price: course.price,
    discountPrice: course.discountPrice,
    rating: course.rating,
    reviewCount: course.reviewCount,
    imageUrl: course.imageUrl,
    category: course.category,
    tags: course.tags,
    createdAt: course.createdAt.toISOString(),
    updatedAt: course.updatedAt.toISOString(),
    classes: course.classes.map(c => ({
      id: c.id,
      courseId: c.courseId,
      index: c.index,
      title: c.title,
      contentType: c.contentType,
      videoUrl: c.videoUrl,
      textContent: c.textContent,
      section: c.section,
      createdAt: c.createdAt.toISOString(),
      updatedAt: c.updatedAt.toISOString(),
    }))
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Edit Course: {course.title}</h2>
        <Link href="/admin/courses" className="text-primary hover:underline">
          &larr; Back to Courses
        </Link>
      </div>

      <CourseForm initialData={serializedCourse} />
    </div>
  )
}
