'use client'

import { useActionState, useRef, useState, useEffect } from 'react'
import { addBlog, updateBlog } from '@/app/admin/blogs/actions'
import { marked } from 'marked'

interface BlogFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?: any;
}

export default function BlogForm({ initialData }: BlogFormProps) {
  const isEditing = !!initialData;
  const action = isEditing ? updateBlog : addBlog;
  
  const [state, formAction, isPending] = useActionState(action, { success: false, message: '' })
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [previewContent, setPreviewContent] = useState('');
  const [content, setContent] = useState(initialData?.content || '');

  // Update content state when initialData changes or user types
  useEffect(() => {
    if (initialData?.content) setContent(initialData.content);
  }, [initialData]);

  const handlePreview = async () => {
    if (!isPreview) {
      // Switching to preview mode
      const html = await marked.parse(content, { breaks: true });
      setPreviewContent(html);
    }
    setIsPreview(!isPreview);
  };

  const insertFormat = (prefix: string, suffix: string = '') => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    
    let before = text.substring(0, start);
    let selection = text.substring(start, end);
    let after = text.substring(end);

    // 1. Check if selection is wrapped inside (Surrounding check)
    // E.g. **|selected|**
    if (before.endsWith(prefix) && after.startsWith(suffix)) {
        // Remove formatting
        before = before.substring(0, before.length - prefix.length);
        after = after.substring(suffix.length);
        
        const newText = before + selection + after;
        setContent(newText);
        textarea.value = newText;
        
        setTimeout(() => {
             textarea.focus();
             textarea.setSelectionRange(start - prefix.length, end - prefix.length);
        }, 0);
        return;
    }

    // 2. Check if selection itself includes the formatting (Selection check)
    // E.g. |**selected**|
    if (selection.startsWith(prefix) && selection.endsWith(suffix)) {
         // Remove formatting from selection
         selection = selection.substring(prefix.length, selection.length - suffix.length);
         
         const newText = before + selection + after;
         setContent(newText);
         textarea.value = newText;
         
         setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start, end - prefix.length - suffix.length);
         }, 0);
         return;
    }

    // Header logic: Ensure newline before headers if it's a header prefix (#)
    if (prefix.trim().startsWith('#')) {
        if (before.length > 0 && !before.endsWith('\n')) {
            prefix = '\n' + prefix;
        }
    }

    const newText = before + prefix + (selection || '') + suffix + after;
    setContent(newText);
    textarea.value = newText;
    
    setTimeout(() => {
        textarea.focus();
        if (selection) {
          textarea.setSelectionRange(start + prefix.length, end + prefix.length);
        } else {
          const newCursorPos = start + prefix.length;
          textarea.setSelectionRange(newCursorPos, newCursorPos);
        }
    }, 0);
  };

  const insertLink = () => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selection = text.substring(start, end);
    
    const url = window.prompt('Enter URL:', 'https://');
    
    if (url) {
        const linkText = selection || 'Link Text';
        const prefix = '[';
        const suffix = `](${url})`;
        
        const before = text.substring(0, start);
        const after = text.substring(end);
        
        const newText = before + prefix + linkText + suffix + after;
        setContent(newText);
        textarea.value = newText;
        
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + prefix.length, start + prefix.length + linkText.length);
        }, 0);
    }
  };

  const insertColor = (color: string) => {
    insertFormat(`<span style="color: ${color}">`, '</span>');
  };

  return (
    <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-sm border">
      <div className="md:col-span-2 border-b pb-2 mb-2">
        <h3 className="font-semibold text-lg">{isEditing ? 'Edit Blog' : 'Add New Blog'}</h3>
        {state.message && (
          <div className={`mt-2 text-sm p-2 rounded ${state.success ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            {state.message}
          </div>
        )}
      </div>
      
      {isEditing && <input type="hidden" name="id" value={initialData.id} />}

      <div className="space-y-2">
        <label className="block text-sm font-medium">Title</label>
        <input name="title" defaultValue={initialData?.title} placeholder="Blog Title" className="w-full border rounded px-3 py-2" required />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Slug</label>
        <input 
          name="slug" 
          defaultValue={initialData?.slug}
          placeholder="blog-post-slug" 
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
        <p className="text-xs text-neutral-500">URL-friendly unique identifier</p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Author</label>
        <input name="authorName" defaultValue={initialData?.authorName} placeholder="Author Name" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Category</label>
        <input name="category" defaultValue={initialData?.category} placeholder="Category" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Publish Date</label>
        <input name="publishDate" defaultValue={initialData?.publishDate} placeholder="e.g. October 15, 2023" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Read Time</label>
        <input name="readTime" defaultValue={initialData?.readTime} placeholder="e.g. 5 min read" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Image URL (or upload below)</label>
        <input name="imageUrl" defaultValue={initialData?.imageUrl} placeholder="/uploads/image.jpg" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Upload Image</label>
        <input name="image" type="file" accept="image/*" className="w-full text-sm" />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label className="block text-sm font-medium">Tags (Comma Separated)</label>
        <input name="tags" defaultValue={initialData?.tags} placeholder="Technology, Guide, Tips" className="w-full border rounded px-3 py-2" />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label className="block text-sm font-medium">Excerpt</label>
        <textarea name="excerpt" defaultValue={initialData?.excerpt} className="w-full border rounded px-3 py-2" rows={2} placeholder="Brief summary for cards"></textarea>
      </div>

      <div className="md:col-span-2 space-y-2">
        <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">Content (Markdown supported)</label>
            <div className="flex border rounded overflow-hidden">
                <button 
                  type="button" 
                  onClick={handlePreview} 
                  className={`px-3 py-1 text-sm ${!isPreview ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  Write
                </button>
                <button 
                  type="button" 
                  onClick={handlePreview} 
                  className={`px-3 py-1 text-sm ${isPreview ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  Preview
                </button>
            </div>
        </div>
        
        {!isPreview ? (
            <>
                <div className="flex flex-wrap gap-2 mb-2 p-2 bg-gray-50 border rounded items-center">
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('**', '**')} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 font-bold text-sm min-w-[30px]" title="Bold">B</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('*', '*')} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 italic text-serif text-sm min-w-[30px]" title="Italic">I</button>
                    <div className="h-6 w-px bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('# ')} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 font-bold text-sm" title="Heading 1">H1</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('## ')} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 font-bold text-sm" title="Heading 2">H2</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('### ')} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 font-bold text-sm" title="Heading 3">H3</button>
                    <div className="h-6 w-px bg-gray-300 mx-1"></div>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('<mark style="background-color: #c6e3b5; color: #003024; padding: 0 4px; border-radius: 2px;">', '</mark>')} className="px-2 py-1 bg-[#c6e3b5] border border-[#01513a] rounded hover:opacity-90 text-[#003024] font-medium text-sm" title="Highlight (Brand Color)">High</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('- ')} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-sm" title="List">• List</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('1. ')} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-sm" title="Numbered List">1. List</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={insertLink} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-sm text-blue-600 underline" title="Link">Link</button>
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertFormat('> ')} className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-sm font-serif" title="Quote">"" Quote</button>
                    <div className="flex items-center gap-2 border-l pl-2 ml-1">
                        <span className="text-xs text-gray-500">Text Color:</span>
                        <div className="flex gap-1">
                            <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertColor('#01513a')} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: '#01513a' }} title="Primary Green"></button>
                            <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertColor('#c6e3b5')} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: '#c6e3b5' }} title="Secondary Green"></button>
                            <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertColor('#003024')} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: '#003024' }} title="Accent Dark"></button>
                            <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insertColor('#e53e3e')} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: '#e53e3e' }} title="Red"></button>
                        </div>
                        <input 
                          type="color" 
                          onChange={(e) => insertColor(e.target.value)} 
                          className="w-6 h-6 p-0 border rounded cursor-pointer ml-1" 
                          title="Custom Color" 
                        />
                    </div>
                    <div className="text-xs text-gray-400 ml-auto hidden sm:block">Select text to apply</div>
                </div>
                <textarea 
                  ref={contentRef} 
                  name="content" 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full border rounded px-3 py-2 font-mono text-sm" 
                  rows={12} 
                  placeholder="Write your blog content here... Use the toolbar above for formatting. Toggle 'Preview' to see the result."
                ></textarea>
            </>
        ) : (
            <div className="w-full border rounded px-4 py-4 min-h-[300px] bg-white">
                <div className="prose max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: previewContent }} />
            </div>
        )}
      </div>

      <div className="md:col-span-2 border-t pt-4 mt-2 flex justify-end">
        <button 
          type="submit" 
          disabled={isPending}
          className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isPending ? 'Saving...' : (isEditing ? 'Update Blog' : 'Add Blog')}
        </button>
      </div>
    </form>
  )
}
