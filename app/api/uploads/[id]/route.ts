
import prisma from "@/server/db/prisma";
import { getImageFileKey } from "@/server/queries/upload";
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();


export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  try {
    const fileKey = await getImageFileKey(params.id);
    console.log(params, fileKey)


    if(!fileKey) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    await utapi.deleteFiles(fileKey);
    await prisma.upload.delete({ where: { id: params.id }})
    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete file" }, { status: 500 });
  }
}