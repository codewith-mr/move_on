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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Edit Course: {course.title}</h2>
        <Link href="/admin/courses" className="text-primary hover:underline">
          &larr; Back to Courses
        </Link>
      </div>

      <CourseForm initialData={course} />
    </div>
  )
}
