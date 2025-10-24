"use client";
import { useState } from "react";
import Image from "next/image";
import LoadingSpinner from "../LoadingSpinner";

export default function AssetImageLarge({ src, alt, size = 100 }: { src: string; alt: string; size?: number }) {
  const [loading, setLoading] = useState(true);

  if (!src) return;

  return (
    <div className="overflow-hidden  relative rounded" style={{ width: size, height: size }}>
      {loading && (
        <div className="absolute  w-full h-full inset-0 flex items-center justify-center bg-gray-100">
          <LoadingSpinner />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

