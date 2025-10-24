"use client";


import {  useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import LoadingSpinner from "@/components/ui/LoadingSpinner";


interface ImageUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
  isUploading: boolean;

}

export function ImageUploader({ file, setFile, isUploading }: ImageUploaderProps){
  const [preview, setPreview] = useState<string | null>(null);


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [], "video/*": [] },
    maxFiles: 1,
    onDrop: (files) => {
      const f = files[0];
      setPreview(URL.createObjectURL(f));
      setFile(f);
    },
  });


  return  (
    <div className="mt-5">
      <div className="max-w-2xl mx-auto space-y-6">
         <label htmlFor="title" className="block mb-2 text- font-medium">
          Upload image:
        </label>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white"
          }`}
        >
          <input {...getInputProps()} />
          {!preview ? (
            <p className="text-gray-600">
              Drag and drop or click to select file
            </p>
          ) : (
            <div className="space-y-4">
      
                <Image
                  src={preview}
                  alt="Preview"
                  width={400}
                  height={200}
                  className="max-h-64 mx-auto rounded"
                />
           
             
          
              <p className="text-sm">{file?.name}</p>
            </div>
          )}
        </div>


        {isUploading && <LoadingSpinner text="Adding asset..."/>}


      </div>
    </div>
  );

  
}