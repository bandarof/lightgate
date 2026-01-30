"use client";

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageFallbackProps extends ImageProps {
  fallbackText?: string;
}

export default function ImageFallback({ 
  src, 
  alt, 
  fallbackText,
  onError,
  ...props 
}: ImageFallbackProps) {
  const [hasError, setHasError] = React.useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    if (onError) onError(e);
  };

  if (hasError) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-orange-500/10 to-orange-500/5">
        <div className="text-center">
          {fallbackText ? (
            <span className="text-gray-400 text-sm">{fallbackText}</span>
          ) : (
            <div className="text-3xl font-bold text-orange-400">
              {alt?.charAt(0) || 'L'}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}
