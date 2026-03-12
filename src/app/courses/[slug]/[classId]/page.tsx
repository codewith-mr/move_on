import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import ShareButton from '@/components/ui/ShareButton';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string; classId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, classId: classIdParam } = await params;
  const classId = Number(classIdParam);
  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course) return { title: 'Class Not Found' };
  
  const classItem = await prisma.courseClass.findUnique({ where: { id: classId } });
  if (!classItem) return { title: 'Class Not Found' };

  return {
    title: `${classItem.title} - ${course.title} | The Binary Strategy`,
    description: classItem.textContent ? classItem.textContent.substring(0, 160) : `Watch ${classItem.title} from ${course.title}`,
  };
}

export default async function ClassPage({ params }: Props) {
  const { slug, classId: classIdParam } = await params;
  const classId = parseInt(classIdParam, 10);
  
  if (isNaN(classId)) {
    notFound();
  }

  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course) {
    notFound();
  }
  const classItem = await prisma.courseClass.findUnique({ where: { id: classId } });
  
  // Verify class exists and belongs to the course
  if (!classItem || classItem.courseId !== course.id) {
    notFound();
  }

  const totalClasses = await prisma.courseClass.count({ where: { courseId: course.id } });

  const nextClass = await prisma.courseClass.findFirst({
    where: { courseId: course.id, index: { gt: classItem.index } },
    orderBy: { index: 'asc' },
  });

  const relatedCourses = !nextClass
    ? await prisma.course.findMany({
        where: { category: course.category, NOT: { id: course.id } },
        take: 2,
      })
    : [];

  const getVideoEmbed = (url: string | null | undefined) => {
    if (!url) return null;
    
    // 1. Handle YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
       let videoId = '';
       
       // Try regex matching for various YouTube formats
       const patterns = [
         /v=([^&]+)/,           // watch?v=ID
         /youtu\.be\/([^?]+)/,  // youtu.be/ID
         /embed\/([^?]+)/,      // embed/ID
         /live\/([^?]+)/,       // live/ID
         /shorts\/([^?]+)/      // shorts/ID
       ];

       for (const pattern of patterns) {
         const match = url.match(pattern);
         if (match && match[1]) {
           videoId = match[1];
           break;
         }
       }
       
       if (videoId) {
         return { type: 'youtube', src: `https://www.youtube.com/embed/${videoId}` };
       }
    }

    // 2. Handle Google Drive
    if (url.includes('drive.google.com')) {
      // Extract File ID and force preview mode
      const match = url.match(/\/file\/d\/([^/?]+)/);
      if (match && match[1]) {
        return { type: 'iframe', src: `https://drive.google.com/file/d/${match[1]}/preview` };
      }
      
      // Fallback for other Drive URL formats
      let embedUrl = url;
      if (url.includes('/view')) embedUrl = url.replace('/view', '/preview');
      else if (url.includes('/edit')) embedUrl = url.replace('/edit', '/preview');
      
      return { type: 'iframe', src: embedUrl };
    }

    // 3. Handle Direct Video Files (mp4, webm, ogg)
    if (url.match(/\.(mp4|webm|ogg)($|\?)/i)) {
      return { type: 'video', src: url };
    }

    // 4. Default: Treat as Generic Iframe (User Request)
    return { type: 'iframe', src: url };
  };

  const videoEmbed = getVideoEmbed(classItem.videoUrl);

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center text-sm mb-8 text-gray-500 bg-gray-50 py-3 px-4 rounded-md">
          <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
          <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <Link href={`/courses/${course.slug}`} className="hover:text-primary transition-colors">{course.title}</Link>
          <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-primary font-medium">{classItem.title}</span>
        </div>

        <div className="bg-white border-b border-gray-200 mb-8 rounded-lg shadow-sm">
          <div className="max-w-4xl mx-auto py-6 px-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                Class {classItem.index} of {totalClasses}
              </span>
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <h2 className="text-lg text-primary font-medium">{course.title}</h2>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{classItem.title}</h1>
            </div>
            <div className="flex items-center text-gray-600 gap-4">
              <div className="flex items-center">
                <Image src="/user-avatar.svg" alt={course.instructor} width={32} height={32} className="rounded-full mr-3" />
                <span className="font-medium">{course.instructor}</span>
              </div>
              <ShareButton url={`/courses/${course.slug}/${classItem.id}`} title={classItem.title} description={classItem.textContent || ''} />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm mb-8">
          {classItem.contentType === 'video' && classItem.videoUrl && videoEmbed ? (
            <div className="relative w-full">
              {/* Video Player */}
              <div className="relative w-full aspect-video bg-black rounded-t-lg overflow-hidden shadow-lg">
                {videoEmbed.type === 'video' ? (
                  <video 
                    controls 
                    className="w-full h-full" 
                    src={videoEmbed.src}
                    poster={course.imageUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe 
                    src={videoEmbed.src} 
                    className="w-full h-full border-0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title={classItem.title}
                  />
                )}
              </div>
              
              <div className="p-6 sm:p-8 border-x border-b border-gray-100 rounded-b-lg bg-white">
                 <h3 className="font-semibold text-gray-900 mb-2">About this Lecture</h3>
                 <p className="text-gray-700 leading-relaxed">
                   {classItem.textContent || course.description || `Watch the full lecture above.`}
                 </p>
              </div>
            </div>
          ) : (
            <div className="prose max-w-none p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed text-lg">{classItem.textContent || ''}</p>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          {/* Tags Section */}
          {course.tags && (
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.tags?.split(',').map((tag: string) => tag.trim()).filter(Boolean).map((tag: string, i: number) => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {nextClass ? 'Continue Learning' : 'Recommended Courses'}
          </h2>
          {nextClass ? (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:bg-gray-50 transition-all">
              <Link href={`/courses/${course.slug}/${nextClass.id}`} className="block">
                <div className="flex items-center">
                  <div className="bg-primary/10 text-primary rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Next: {nextClass.title}</h3>
                    <p className="text-gray-500 text-sm">
                      Class {nextClass.index} of {totalClasses}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCourses.map((rc) => (
                <div key={rc.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
                  <Link href={`/courses/${rc.slug}`} className="block">
                    <div className="relative h-40">
                      <Image
                        src={rc.imageUrl || '/placeholder-course.svg'}
                        alt={rc.title}
                        fill
                        className="object-cover"
                        unoptimized={rc.imageUrl.endsWith('.svg')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-3 w-full">
                        <span className="bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-sm">
                          {rc.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{rc.title}</h3>
                      <p className="text-gray-500 text-sm mb-3 line-clamp-2">{rc.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-medium">
                          {(rc.discountPrice !== null && rc.discountPrice !== undefined) ? (
                            <>
                              {rc.price > 0 && <span className="line-through text-gray-400 text-xs mr-1">${rc.price.toFixed(2)}</span>}
                              ${Number(rc.discountPrice).toFixed(2)}
                            </>
                          ) : (
                            <>
                              {rc.price > 0 && <span className="line-through text-gray-400 text-xs mr-1">${rc.price.toFixed(2)}</span>}
                              $0.00
                            </>
                          )}
                        </span>
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{(rc.rating || 0).toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link href={`/courses/${course.slug}`} className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Course
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
