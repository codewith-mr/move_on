const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const slugsToRemove = [
    'google-ai-essentials',
    'aws-certified-machine-learning-specialty',
    'azure-ai-engineer-associate',
    'deep-learning-specialization',
    'ibm-ai-engineering-professional',
    'nvidia-deep-learning' // Just in case it exists in DB
  ];

  console.log(`Finding courses to delete for slugs: ${slugsToRemove.join(', ')}`);

  const courses = await prisma.course.findMany({
    where: {
      slug: {
        in: slugsToRemove
      }
    },
    select: {
      id: true,
      slug: true,
      title: true
    }
  });

  if (courses.length === 0) {
    console.log('No matching courses found to delete.');
    return;
  }

  const courseIds = courses.map(c => c.id);
  console.log(`Found ${courses.length} courses to delete:`, courses.map(c => c.slug));

  // 1. Delete related CourseClass records
  console.log('Deleting related CourseClass records...');
  const deletedClasses = await prisma.courseClass.deleteMany({
    where: {
      courseId: {
        in: courseIds
      }
    }
  });
  console.log(`Deleted ${deletedClasses.count} course classes.`);

  // 2. Delete related HomeSettingsFeaturedCourse records
  console.log('Deleting related HomeSettingsFeaturedCourse records...');
  const deletedFeatured = await prisma.homeSettingsFeaturedCourse.deleteMany({
    where: {
      courseId: {
        in: courseIds
      }
    }
  });
  console.log(`Deleted ${deletedFeatured.count} featured course settings.`);

  // 3. Delete the Courses
  console.log('Deleting courses...');
  const deletedCourses = await prisma.course.deleteMany({
    where: {
      id: {
        in: courseIds
      }
    }
  });
  console.log(`Deleted ${deletedCourses.count} courses.`);
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
