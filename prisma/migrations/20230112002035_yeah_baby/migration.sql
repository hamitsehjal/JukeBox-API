/*
  Warnings:

  - You are about to drop the `_AlbumToArtist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AlbumToArtist" DROP CONSTRAINT "_AlbumToArtist_A_fkey";

-- DropForeignKey
ALTER TABLE "_AlbumToArtist" DROP CONSTRAINT "_AlbumToArtist_B_fkey";

-- DropTable
DROP TABLE "_AlbumToArtist";

-- CreateTable
CREATE TABLE "AlbumByArtist" (
    "albumId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "AlbumByArtist_pkey" PRIMARY KEY ("albumId","artistId")
);

-- AddForeignKey
ALTER TABLE "AlbumByArtist" ADD CONSTRAINT "AlbumByArtist_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumByArtist" ADD CONSTRAINT "AlbumByArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
