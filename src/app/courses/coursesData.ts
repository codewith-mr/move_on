import { CourseCardProps } from '@/components/cards/CourseCard';

// Mock data for courses
export const courses: CourseCardProps[] = [
  {
    id: '11',
    slug: 'trading-360-ict-complete-course',
    title: 'Trading 360 - ICT Complete Course - Last Batch 2025 By Aden Tech PK',
    description: 'Complete ICT trading course by Aden Tech PK. Master the markets with this comprehensive guide covering strategies, entry models, and setups.',
    instructor: 'Aden Tech PK',
    level: 'Advanced',
    duration: '25 hours',
    price: 0,
    rating: 5.0,
    reviewCount: 10,
    imageUrl: '/course_img.jpg',
    category: 'Trading',
    // format: 'video',
  },
  {
    id: '12',
    slug: 'boost-productivity-ai-chatgpt',
    title: 'Boost Your Productivity with AI: ChatGPT Course for Professionals',
    description: 'Master ChatGPT prompt engineering, transform formula skills, create efficient documentation, and unlock GPT Plus features.',
    instructor: 'AI Expert',
    level: 'Beginner',
    duration: '10 hours',
    price: 0,
    rating: 4.9,
    reviewCount: 5,
    imageUrl: '/course-content-creation.svg',
    category: 'AI & Machine Learning',
    classes: [
      { title: '00-Resources', videoUrl: 'https://drive.google.com/embeddedfolderview?id=1QrDCYb9eCarNzd5eHUNz_ts8ZJ6c8M-S#list' },
      { title: '01-ChatGPT Foundations', videoUrl: 'https://drive.google.com/embeddedfolderview?id=10MbkAujh6gTF9RWRQv9V0ahV5IaLGTox#list' },
      { title: '02-Excel Mastery with ChatGPT', videoUrl: 'https://drive.google.com/embeddedfolderview?id=1M_i8W5MlWp7DiXSRcazwwow9V-T7cIDc#list' },
      { title: '03-ChatGPT for Easy Documentation Code Explainers', videoUrl: 'https://drive.google.com/embeddedfolderview?id=1C53kQHizoWE-JwP5_vAHpR9Awcvdbmr2#list' },
      { title: '04-GPT Plus Features', videoUrl: 'https://drive.google.com/embeddedfolderview?id=1hIy64lDzkflkbqBV7gHu1Z80Z3rOk08u#list' },
      { title: '05-Career Growth with ChatGPT', videoUrl: 'https://drive.google.com/embeddedfolderview?id=17mgP8N6xyt0Pu-tjyot1dhOrMVmMxuwo#list' },
      { title: '06-Conclusion', videoUrl: 'https://drive.google.com/embeddedfolderview?id=1klvuJ_I6uY8ZQeA5y7WLtYFU9ZbGsUhH#list' },
      { 
        title: '07-Text Lesson Example', 
        contentType: 'text', 
        textContent: 'This is an example of a text-based lesson content. It should load correctly without 404 errors.' 
      },
    ]
  },
];