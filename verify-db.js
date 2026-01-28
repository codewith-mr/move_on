const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    include: { classes: true },
  });
  
  if (courses.length > 0) {
    console.log(`Found ${courses.length} courses:`);
    courses.forEach(course => {
      console.log(`\n-----------------------------------`);
      console.log(`Course: ${course.title} (${course.slug})`);
      console.log(`Class count: ${course.classes.length}`);
      course.classes.sort((a, b) => a.index - b.index).forEach(c => {
        console.log(`- Class ${c.index}: ${c.title}`);
      });
    });
  } else {
    console.log('No courses found');
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
