"use client";
import { useState } from "react";
import Image from "next/image";


export default function AssetThumbnail({ src, alt }: { src: string; alt: string }) {

  const [loading, setLoading] = useState(true);

  return (
    <div className="w-10 h-10 md:w-16 md:h-16 overflow-hidden  relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="flex items-center">
      <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        quality={75}
        className="object-cover w-full h-full"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

  
