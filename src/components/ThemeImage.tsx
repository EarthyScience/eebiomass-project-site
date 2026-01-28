'use client';

import Image, { ImageProps } from 'next/image';
import { useTheme } from 'next-themes';

interface ThemeImageProps extends Omit<ImageProps, 'src'> {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}

export default function ThemeImage({ lightSrc, darkSrc, alt, ...props }: ThemeImageProps) {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const src = currentTheme === 'dark' ? darkSrc : lightSrc;

  return <Image src={src} alt={alt} {...props} />;
}