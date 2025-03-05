/*
  Warnings:

  - You are about to drop the column `style` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `typeaccount` on the `User` table. All the data in the column will be lost.
  - Added the required column `styleId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeaccountId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "style",
DROP COLUMN "typeaccount",
ADD COLUMN     "styleId" INTEGER NOT NULL,
ADD COLUMN     "typeaccountId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_typeaccountId_fkey" FOREIGN KEY ("typeaccountId") REFERENCES "TypeAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
