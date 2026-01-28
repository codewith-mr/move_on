const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

async function main() {
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const hashed = await bcrypt.hash(adminPassword, 10);

  await prisma.adminUser.upsert({
    where: { username: adminUsername },
    update: { password: hashed },
    create: { username: adminUsername, password: hashed },
  });

  // Seed Courses (mirroring src/app/courses/coursesData.ts)
  const courses = [
    {
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
      classes: [
        { title: 'Liquidity, Inducement & KillZone', videoUrl: 'https://drive.google.com/file/d/1G94zVc6hbNpI64oQRMzez2qE9SRjfksV/preview' },
        { title: 'Discount & Premium, True Day Open', videoUrl: 'https://drive.google.com/file/d/1tWIFJ40tEfOr7uaWVeyauAxgFjq8yu79/preview' },
        { title: 'IPDA', videoUrl: 'https://drive.google.com/file/d/16pJaO-wwh6nFLr3rmbM5tC9iS-0i5hMc/preview' },
        { title: 'FVG', videoUrl: 'https://drive.google.com/file/d/1bayM_-W8rd6xWFbjxpK-EEkJBmN2EVSe/preview' },
        { title: 'ICT Order Block', videoUrl: 'https://drive.google.com/file/d/1dO-VgL9V9iNvJe30AqtJy4rykX4Eqjww/preview' },
        { title: 'ICT Breaker Block', videoUrl: 'https://drive.google.com/file/d/1CmuIBAsiWAMv--kxz-qmYg4wZGAjbaj3/preview' },
        { title: 'ICT Breaker Block (1)', videoUrl: 'https://drive.google.com/file/d/1jKHy5MjeUnw6nWxUp0o8KUnUjA8CXctT/preview' },
        { title: 'ICT Mitigation Block (1)', videoUrl: 'https://drive.google.com/file/d/1CJkuzutlD2Ajeo3gK9bhaIgfqWbSOLYx/preview' },
        { title: 'Balance Price Range', videoUrl: 'https://drive.google.com/file/d/1f_StMOvn9IYGrmGd_nDh3Iz-JF35yExs/preview' },
        { title: 'ICT Market Structure', videoUrl: 'https://drive.google.com/file/d/1rJv3SW9aqT5WynXZXknFAbbFeIB7Gb7y/preview' },
        { title: 'Power of 3', videoUrl: 'https://drive.google.com/file/d/1IMiRYv92hSd2sWzn4Q10a-y3ttk7_V6R/preview' },
        { title: 'Unicorn Setup', videoUrl: 'https://drive.google.com/file/d/1Htp4hYh_Qva1YCX-gcEbjXcv7XtIfcQg/preview' },
        { title: 'Turtle Soup Entry Model', videoUrl: 'https://drive.google.com/file/d/1GhmE5U0mrRa0-zPmSmMpRNet4WcQIJls/preview' },
        { title: 'Bullet Strategy', videoUrl: 'https://drive.google.com/file/d/1D6_GpJ9kQiOf-Mc97so1Hj8VNjX7-aG4/preview' },
        { title: 'Market Maker Buy Model', videoUrl: 'https://drive.google.com/file/d/1tntJCSukCDKS4fHOuS5lO_fEE-myck-S/preview' },
        { title: 'Funded Account Details', videoUrl: 'https://drive.google.com/file/d/1oRoRyA7llp6dUvvJn9Q-W4nxaLbCg3JG/preview' },
      ]
    },
    {
      slug: 'boost-productivity-ai-chatgpt',
      title: 'Boost Your Productivity with AI: ChatGPT Course for Professionals',
      description: 'Master ChatGPT prompt engineering, transform formula skills, create efficient documentation, and unlock GPT Plus features.',
      instructor: 'AI Expert',
      level: 'Beginner',
      duration: '10 hours',
      price: 0,
      rating: 4.9,
      reviewCount: 5,
      imageUrl: '/course-ai.svg',
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

  // Delete courses that are not in the seed list
  const courseSlugs = courses.map(c => c.slug);
  
  // 1. Delete relations first
  await prisma.homeSettingsFeaturedCourse.deleteMany({
    where: {
      course: {
        slug: { notIn: courseSlugs }
      }
    }
  });

  await prisma.courseClass.deleteMany({
    where: {
      course: {
        slug: { notIn: courseSlugs }
      }
    }
  });

  // 2. Delete the courses
  await prisma.course.deleteMany({
    where: {
      slug: { notIn: courseSlugs }
    }
  });

  for (const c of courses) {
    const { classes, ...courseData } = c;
    const course = await prisma.course.upsert({
      where: { slug: courseData.slug },
      update: courseData,
      create: courseData,
    });

    if (classes && classes.length > 0) {
      // Clear existing classes to ensure order and content matches seed
      await prisma.courseClass.deleteMany({ where: { courseId: course.id } });
      
      for (let i = 0; i < classes.length; i++) {
        const cls = classes[i];
        await prisma.courseClass.create({
          data: {
            courseId: course.id,
            index: i + 1,
            title: cls.title,
            contentType: cls.contentType || 'video',
            videoUrl: cls.videoUrl,
            textContent: cls.textContent,
          },
        });
      }
    }
  }

  // Seed Blogs (subset of src/app/blog/blogData.ts)
  const blogs = [
    {
      slug: 'freelance-success-tips',
      title: '10 Essential Tips for Freelance Success in 2023',
      excerpt: 'Discover the key strategies that successful freelancers are using to find high-paying clients and build sustainable businesses.',
      authorName: 'Jessica Miller',
      authorAvatar: '/placeholder-avatar.svg',
      category: 'Tips & Tricks',
      publishDate: 'June 15, 2023',
      readTime: '5 min read',
      imageUrl: '/placeholder-blog.jpg',
    },
    {
      slug: 'youtube-algorithm-changes',
      title: "Understanding YouTube's Latest Algorithm Changes",
      excerpt: 'A detailed breakdown of the recent YouTube algorithm updates and how content creators can adapt their strategies accordingly.',
      authorName: 'David Wong',
      authorAvatar: '/placeholder-avatar.svg',
      category: 'Content Creation',
      publishDate: 'June 10, 2023',
      readTime: '8 min read',
      imageUrl: '/placeholder-blog.jpg',
    },
    {
      slug: 'passive-income-strategies',
      title: '7 Passive Income Strategies That Actually Work',
      excerpt: 'Explore proven passive income strategies that can help you build wealth and achieve financial freedom over time.',
      authorName: 'Michael Chen',
      authorAvatar: '/placeholder-avatar.svg',
      category: 'Investing',
      publishDate: 'June 5, 2023',
      readTime: '10 min read',
      imageUrl: '/placeholder-blog.jpg',
    },
  ];

  for (const b of blogs) {
    await prisma.blog.upsert({
      where: { slug: b.slug },
      update: { ...b },
      create: { ...b },
    });
  }

  // Seed Tips (from src/app/tips-tricks/page.tsx)
  const tips = [
    {
      title: 'How to Access Premium Tools for Free',
      description: 'Learn the legitimate ways to access premium tools without paying full price, including free trials, student discounts, and open-source alternatives.',
      category: 'Tools',
      imageUrl: '/placeholder-blog.jpg',
      readTime: '5 min read',
    },
    {
      title: 'Maximize Your Productivity with These Simple Hacks',
      description: 'Discover productivity techniques that can help you get more done in less time, including time blocking, the Pomodoro technique, and effective task prioritization.',
      category: 'Productivity',
      imageUrl: '/placeholder-blog.jpg',
      readTime: '7 min read',
    },
    {
      title: 'SEO Tips That Actually Work in 2023',
      description: 'Cut through the noise and focus on SEO strategies that deliver real results, based on the latest algorithm updates and industry best practices.',
      category: 'SEO',
      imageUrl: '/placeholder-blog.jpg',
      readTime: '10 min read',
    },
  ];

  for (const t of tips) {
    const slug = slugify(t.title);
    await prisma.tip.upsert({
      where: { slug },
      update: { ...t, slug },
      create: { ...t, slug },
    });
  }

  // Site settings
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: {
      siteTitle: 'TBS',
      logoUrl: '/primary2.png',
      footerText: '© TBS. All rights reserved.',
    },
    create: {
      siteTitle: 'TBS',
      logoUrl: '/primary2.png',
      footerText: '© TBS. All rights reserved.',
    },
  });

  // Home settings and featured/latest links
  const home = await prisma.homeSettings.upsert({
    where: { id: 1 },
    update: {
      bannerTitle: 'Learn Practical Skills That Convert Directly Into Income',
      bannerSubtitle:
        'Actionable courses, tools, and resources for freelancers, content creators, and side-hustlers',
      bannerCtaText: 'Explore Courses',
      bannerCtaLink: '/courses',
      bannerSecondaryCtaText: 'Try Free Tools',
      bannerSecondaryCtaLink: '/tools',
    },
    create: {
      bannerTitle: 'Learn Practical Skills That Convert Directly Into Income',
      bannerSubtitle:
        'Actionable courses, tools, and resources for freelancers, content creators, and side-hustlers',
      bannerCtaText: 'Explore Courses',
      bannerCtaLink: '/courses',
      bannerSecondaryCtaText: 'Try Free Tools',
      bannerSecondaryCtaLink: '/tools',
    },
  });

  const featuredCourseSlugs = ['trading-360-ict-complete-course', 'boost-productivity-ai-chatgpt'];
  for (const slug of featuredCourseSlugs) {
    const course = await prisma.course.findUnique({ where: { slug } });
    if (course) {
      await prisma.homeSettingsFeaturedCourse.upsert({
        where: { id: home.id * 100000 + course.id }, // unique-ish composite via id math to avoid duplicates
        update: {},
        create: { homeSettingsId: home.id, courseId: course.id },
      }).catch(async () => {
        // fallback: check existence then create
        const exists = await prisma.homeSettingsFeaturedCourse.findFirst({ where: { homeSettingsId: home.id, courseId: course.id } });
        if (!exists) await prisma.homeSettingsFeaturedCourse.create({ data: { homeSettingsId: home.id, courseId: course.id } });
      });
    }
  }

  const latestBlogSlugs = ['freelance-success-tips', 'youtube-algorithm-changes'];
  for (const slug of latestBlogSlugs) {
    const blog = await prisma.blog.findUnique({ where: { slug } });
    if (blog) {
      const exists = await prisma.homeSettingsLatestBlog.findFirst({ where: { homeSettingsId: home.id, blogId: blog.id } });
      if (!exists) await prisma.homeSettingsLatestBlog.create({ data: { homeSettingsId: home.id, blogId: blog.id } });
    }
  }

  const latestTipSlugs = tips.map(t => slugify(t.title)).slice(0, 2);
  for (const slug of latestTipSlugs) {
    const tip = await prisma.tip.findUnique({ where: { slug } });
    if (tip) {
      const exists = await prisma.homeSettingsLatestTip.findFirst({ where: { homeSettingsId: home.id, tipId: tip.id } });
      if (!exists) await prisma.homeSettingsLatestTip.create({ data: { homeSettingsId: home.id, tipId: tip.id } });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

