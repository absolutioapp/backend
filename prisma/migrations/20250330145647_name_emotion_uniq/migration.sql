/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Emotion` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Emotion_name_key" ON "Emotion"("name");
