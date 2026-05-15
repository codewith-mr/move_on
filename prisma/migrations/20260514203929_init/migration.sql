-- AlterTable
ALTER TABLE "Course" ADD COLUMN "tags" TEXT;

-- AlterTable
ALTER TABLE "CourseClass" ADD COLUMN "section" TEXT;

-- CreateIndex
CREATE INDEX "Blog_category_idx" ON "Blog"("category");

-- CreateIndex
CREATE INDEX "Course_category_idx" ON "Course"("category");

-- CreateIndex
CREATE INDEX "Tip_category_idx" ON "Tip"("category");
