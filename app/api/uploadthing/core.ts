
import prisma from "@/server/db/prisma";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "4MB" },
  })
  .onUploadComplete(async({ file }) => {
    await prisma.upload.create({
      data: { name: file.name, fileKey: file.key, url: file.ufsUrl, fileType: file.type, fileSize: file.size },
    });
  })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;