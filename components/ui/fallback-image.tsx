"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface FallbackImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK = "/img/Rooms/StaysCoversHero.webp";

export function FallbackImage({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  className,
  ...rest
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  React.useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <Image
      {...rest}
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt || "Vanrai Village Resort"}
      className={className}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}

export default FallbackImage;
