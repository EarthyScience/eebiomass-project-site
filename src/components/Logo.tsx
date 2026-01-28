import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { withBasePath } from '@/lib/utils';
import type { Locale } from '@/config/i18n';

interface LogoProps {
  icon?: string;
  title?: string;
  locale: Locale;
}

const LogoProject = ({ icon = '', title = '', locale }: LogoProps) => {
  const homeHref = `/${locale}`;
  return (
    <div className="flex-shrink-0 flex items-center mr-4">
        <Link href={homeHref}>
            <Image src={withBasePath(icon)} alt={title} width={32} height={32} className="mr-4"/>
        </Link>
        <Link href={homeHref} className="font-bold text-[var(--link-color)] hover:text-[var(--link-hover)]">
            {title}
        </Link>
    </div>
  );
};

export default LogoProject;