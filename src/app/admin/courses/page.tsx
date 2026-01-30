import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import CourseForm from '@/components/admin/CourseForm'
import { deleteCourse } from './actions'

export default async function CoursesManager() {
  const courses = await prisma.course.findMany({ orderBy: { updatedAt: 'desc' } })

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">Course Manager</h2>

      <CourseForm />

      <div>
        <h3 className="font-semibold mb-2">Existing Courses</h3>
        <ul className="divide-y">
          {courses.map(c => (
            <li key={c.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{c.title}</div>
                <div className="text-sm text-neutral-500">{c.slug}</div>
              </div>
              <div className="flex items-center gap-4">
                <Link href={`/admin/courses/${c.id}/edit`} className="text-blue-600 hover:text-blue-800">Edit</Link>
                <Link href={`/admin/course-classes/${c.id}`} className="text-primary">Manage Classes</Link>
                <form action={deleteCourse}>
                  <input type="hidden" name="id" value={String(c.id)} />
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
