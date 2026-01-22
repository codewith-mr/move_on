import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

export default async function CourseClassesManager({ params }: { params: { courseId: string } }) {
  const courseId = Number(params.courseId)
  const course = await prisma.course.findUnique({ where: { id: courseId } })
  if (!course) {
    return (
      <div>
        <h2 className="text-xl font-semibold">Course not found</h2>
        <Link href="/admin/courses" className="text-primary">Back to Courses</Link>
      </div>
    )
  }

  async function addClass(formData: FormData) {
    'use server'
    const index = Number(formData.get('index') || 0)
    const title = String(formData.get('title') || '')
    const contentType = String(formData.get('contentType') || 'text')
    const videoUrl = String(formData.get('videoUrl') || '')
    const textContent = String(formData.get('textContent') || '')
    await prisma.courseClass.create({
      data: {
        courseId,
        index,
        title,
        contentType,
        videoUrl: videoUrl || null,
        textContent: textContent || null,
      },
    })
    revalidatePath(`/courses/${course.slug}`)
    revalidatePath(`/admin/course-classes/${courseId}`)
    revalidatePath('/admin')
  }

  async function deleteClass(formData: FormData) {
    'use server'
    const id = Number(formData.get('id'))
    await prisma.courseClass.delete({ where: { id } })
    revalidatePath(`/courses/${course.slug}`)
    revalidatePath(`/admin/course-classes/${courseId}`)
    revalidatePath('/admin')
  }

  const classes = await prisma.courseClass.findMany({ where: { courseId }, orderBy: { index: 'asc' } })

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">Manage Classes: {course.title}</h2>

      <form action={addClass} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="index" placeholder="Index (order)" type="number" className="border rounded px-3 py-2" required />
        <input name="title" placeholder="Title" className="border rounded px-3 py-2" required />
        <select name="contentType" className="border rounded px-3 py-2">
          <option value="video">Video</option>
          <option value="text">Text</option>
        </select>
        <input name="videoUrl" placeholder="Video URL (optional)" className="border rounded px-3 py-2" />
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Text Content (optional)</label>
          <textarea name="textContent" className="w-full border rounded px-3 py-2" rows={4}></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded md:col-span-2">Add Class</button>
      </form>

      <div>
        <h3 className="font-semibold mb-2">Existing Classes</h3>
        <ul className="divide-y">
          {classes.map(cls => (
            <li key={cls.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">#{cls.index} {cls.title}</div>
                <div className="text-sm text-neutral-500">{cls.contentType}</div>
              </div>
              <form action={deleteClass}>
                <input type="hidden" name="id" value={String(cls.id)} />
                <button className="text-red-600">Delete</button>
              </form>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link href="/admin/courses" className="inline-block px-4 py-2 border rounded">Back to Courses</Link>
      </div>
    </div>
  )
}
