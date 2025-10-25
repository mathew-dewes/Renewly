"use client";
import { useState } from "react";
import Image from "next/image";
import LoadingSpinner from "../LoadingSpinner";

export default function AssetThumbnail({ src, alt, size}: { src: string; alt: string; size?: number }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-10 h-10 md:w-16 md:h-16 overflow-hidden  relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <LoadingSpinner />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        quality={75}
        className="object-cover w-full h-full"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

        //  <Image priority
        //                                     className="object-cover w-full h-full"
        //                                     width={64}
        //                                     height={64}
        //                                     src={asset.imageUrl || ""}
        //                                     alt="asset-image"
        //                                 />
