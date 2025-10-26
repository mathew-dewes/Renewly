"use client";
import { useState } from "react";
import Image from "next/image";
import LoadingSpinner from "../LoadingSpinner";

export default function ImagePreview({ src, alt}: { src: string; alt: string; size?: number }) {
  const [loading, setLoading] = useState(true);

  if (!src) return;

  return (
    <div className="overflow-hidden relative rounded">
      {loading && (
        <div className="absolute  w-full h-full inset-0 flex items-center justify-center bg-gray-100">
          <LoadingSpinner />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={400}
        height={200}
        className="max-h-64 mx-auto rounded"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

