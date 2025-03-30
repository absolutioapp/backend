-- CreateTable
CREATE TABLE "Emotion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "keyWords" TEXT[],

    CONSTRAINT "Emotion_pkey" PRIMARY KEY ("id")
);
