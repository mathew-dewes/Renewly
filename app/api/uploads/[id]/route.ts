
import { getUpload } from "@/server/queries/upload";
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();


export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  try {
console.log("Deleting file for id:", params.id);
const upload = await getUpload(params.id);
const fileKey = upload?.fileKey

console.log("Found data:", fileKey);

    if(!fileKey) {
      console.log('File not found');
      
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    await utapi.deleteFiles(fileKey);

    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete file" }, { status: 500 });
  }
}