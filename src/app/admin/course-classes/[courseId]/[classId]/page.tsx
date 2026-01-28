import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'

export default async function EditClassPage({ params }: { params: Promise<{ courseId: string, classId: string }> }) {
  const { courseId: courseIdParam, classId: classIdParam } = await params;
  const courseId = Number(courseIdParam)
  const classId = Number(classIdParam)

  const course = await prisma.course.findUnique({ where: { id: courseId } })
  const courseClass = await prisma.courseClass.findUnique({ where: { id: classId } })

  if (!course || !courseClass) {
    notFound()
  }

  async function updateClass(formData: FormData) {
    'use server'
    const index = Number(formData.get('index') || 0)
    const title = String(formData.get('title') || '')
    const contentType = String(formData.get('contentType') || 'text')
    const videoUrl = String(formData.get('videoUrl') || '')
    const textContent = String(formData.get('textContent') || '')

    await prisma.courseClass.update({
      where: { id: classId },
      data: {
        index,
        title,
        contentType,
        videoUrl: videoUrl || null,
        textContent: textContent || null,
      },
    })

    revalidatePath(`/courses/${course!.slug}`)
    revalidatePath(`/admin/course-classes/${courseId}`)
    revalidatePath('/admin')
    redirect(`/admin/course-classes/${courseId}?updated=1`)
  }

  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Edit Class: {courseClass.title}</h2>
            <Link href={`/admin/course-classes/${courseId}`} className="text-primary">Back to Classes</Link>
        </div>

        <form action={updateClass} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
                name="index" 
                type="number" 
                placeholder="Index" 
                className="border rounded px-3 py-2" 
                defaultValue={courseClass.index}
                required 
            />
            <input 
                name="title" 
                placeholder="Title" 
                className="border rounded px-3 py-2" 
                defaultValue={courseClass.title}
                required 
            />
            <select 
                name="contentType" 
                className="border rounded px-3 py-2" 
                defaultValue={courseClass.contentType}
            >
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>
            <input 
                name="videoUrl" 
                placeholder="Video URL (optional)" 
                className="border rounded px-3 py-2" 
                defaultValue={courseClass.videoUrl || ''}
            />
            <div className="md:col-span-2">
                <label className="block text-sm mb-1">Text Content</label>
                <textarea 
                    name="textContent" 
                    className="w-full border rounded px-3 py-2" 
                    rows={4}
                    defaultValue={courseClass.textContent || ''}
                ></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Update Class</button>
            <Link href={`/admin/course-classes/${courseId}`} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-center">Cancel</Link>
        </form>
    </div>
  )
}
