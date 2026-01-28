'use client'

import { useActionState, useState } from 'react'
import { addCourse } from '@/app/admin/courses/actions'

export default function CourseForm() {
  const [state, formAction, isPending] = useActionState(addCourse, { success: false, message: '' })
  const [classes, setClasses] = useState<{
    title: string, 
    contentType: 'video' | 'text', 
    videoUrl: string, 
    textContent: string
  }[]>([])

  const addClass = () => {
    setClasses([...classes, { title: '', contentType: 'video', videoUrl: '', textContent: '' }])
  }

  const removeClass = (index: number) => {
    setClasses(classes.filter((_, i) => i !== index))
  }

  const updateClass = (index: number, field: keyof typeof classes[0], value: string) => {
    const newClasses = [...classes]
    // @ts-ignore
    newClasses[index][field] = value
    setClasses(newClasses)
  }

  return (
    <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-sm border">
      <div className="md:col-span-2 border-b pb-2 mb-2">
        <h3 className="font-semibold text-lg">Add New Course</h3>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Title</label>
        <input name="title" placeholder="Course Title" className="w-full border rounded px-3 py-2" required />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Slug</label>
        <input 
          name="slug" 
          placeholder="course-slug-url" 
          className="w-full border rounded px-3 py-2" 
          required 
          pattern="[a-z0-9-]+"
          title="Only lowercase letters, numbers, and hyphens allowed"
          onBlur={(e) => {
            const val = e.target.value;
            if (val) {
              e.target.value = val.toLowerCase()
                .trim()
                .replace(/[^a-z0-9-]/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-|-$/g, '');
            }
          }}
        />
        <p className="text-xs text-neutral-500">URL-friendly unique identifier (e.g. my-course-name)</p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Instructor</label>
        <input name="instructor" placeholder="Instructor Name" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Level</label>
        <input name="level" placeholder="Beginner, Advanced, etc." className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Duration</label>
        <input name="duration" placeholder="e.g. 10 hours" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Price</label>
        <input name="price" type="number" step="0.01" placeholder="0.00" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Discount Price (Optional)</label>
        <input name="discountPrice" type="number" step="0.01" placeholder="0.00" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Rating</label>
        <input name="rating" type="number" step="0.1" max="5" placeholder="5.0" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Review Count</label>
        <input name="reviewCount" type="number" placeholder="0" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Category</label>
        <input name="category" placeholder="Course Category" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Image URL (or upload below)</label>
        <input name="imageUrl" placeholder="/images/course.jpg" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Upload Thumbnail</label>
        <input name="thumbnail" type="file" accept="image/*" className="w-full text-sm" />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label className="block text-sm font-medium">Description</label>
        <textarea name="description" className="w-full border rounded px-3 py-2" rows={3}></textarea>
      </div>

      <div className="md:col-span-2 border-t pt-4 mt-2">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold">Classes</h4>
          <button type="button" onClick={addClass} className="px-3 py-1 bg-neutral-100 border rounded text-sm hover:bg-neutral-200">
            + Add Class
          </button>
        </div>
        
        <input type="hidden" name="classes" value={JSON.stringify(classes)} />
        
        <div className="space-y-4">
          {classes.map((cls, idx) => (
            <div key={idx} className="flex gap-2 items-start p-4 bg-neutral-50 rounded border">
              <span className="pt-2 text-sm font-mono text-neutral-500 w-6">{idx + 1}.</span>
              <div className="flex-1 space-y-3">
                <div className="flex gap-2">
                  <input 
                    placeholder="Class Title" 
                    value={cls.title} 
                    onChange={(e) => updateClass(idx, 'title', e.target.value)}
                    className="flex-1 border rounded px-2 py-1 text-sm"
                  />
                  <select 
                    value={cls.contentType} 
                    onChange={(e) => updateClass(idx, 'contentType', e.target.value as any)}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value="video">Video</option>
                    <option value="text">Text</option>
                  </select>
                </div>
                
                {cls.contentType === 'video' ? (
                  <input 
                    placeholder="Video URL / Iframe src / Drive Link" 
                    value={cls.videoUrl} 
                    onChange={(e) => updateClass(idx, 'videoUrl', e.target.value)}
                    className="w-full border rounded px-2 py-1 text-sm font-mono text-neutral-600"
                  />
                ) : (
                  <textarea
                    placeholder="Text content for this class lesson..."
                    value={cls.textContent}
                    onChange={(e) => updateClass(idx, 'textContent', e.target.value)}
                    className="w-full border rounded px-2 py-1 text-sm"
                    rows={3}
                  />
                )}
              </div>
              <button 
                type="button" 
                onClick={() => removeClass(idx)}
                className="text-red-500 hover:text-red-700 px-2"
              >
                ×
              </button>
            </div>
          ))}
          {classes.length === 0 && (
            <p className="text-sm text-neutral-500 text-center py-4 italic">No classes added yet.</p>
          )}
        </div>
      </div>

      <div className="md:col-span-2 pt-4">
        <button 
          type="submit" 
          disabled={isPending}
          className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
        >
          {isPending ? 'Adding Course...' : 'Add Course'}
        </button>
        {state.message && (
          <div className={`mt-3 p-3 rounded text-center ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {state.message}
          </div>
        )}
      </div>
    </form>
  )
}
