"use client";


import { useState } from "react";
import { useDropzone } from "react-dropzone";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ImagePreview from "@/components/ui/images/ImagePreview";


interface ImageUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
  isUploading: boolean,
  savedImage?: string | null;

}

export function ImageUploader({ file, setFile, isUploading, savedImage }: ImageUploaderProps){
  const [preview, setPreview] = useState<string | null>(savedImage ?? null);




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
              {savedImage && <p>Drag or click here to replace uploaded image</p>}
     
      <ImagePreview src={preview} alt="Preview"/>
                {/* <Image
                  src={preview}
                  alt="Preview"
                  width={400}
                  height={200}
                  className={`max-h-64 mx-auto rounded ${savedImage ? "opacity-80" : ""}`}
                /> */}
           
             
          
              <p className="text-sm">{file?.name}</p>
            </div>
          )}
        </div>


        {isUploading && <LoadingSpinner text={`${savedImage ? "Updating" : "Creating"} asset...`}/>}


      </div>
    </div>
  );

  
}