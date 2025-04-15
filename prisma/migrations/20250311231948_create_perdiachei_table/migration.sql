-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perdiachei" (
    "id" SERIAL NOT NULL,
    "detalhes" JSONB NOT NULL,
    "localizacao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Perdiachei_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
