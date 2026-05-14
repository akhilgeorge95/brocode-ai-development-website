import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/cn';

export function IndustryCard({
  title,
  summary,
  href,
  image,
  imageAlt,
  className
}: {
  title: string;
  summary: string;
  href: string;
  image: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative isolate flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-xl2 bg-ink-900 p-6 text-white transition-transform hover:-translate-y-0.5',
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover opacity-55 transition-transform duration-700 ease-out-quart group-hover:scale-105 group-hover:opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/20" aria-hidden />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold leading-snug">{title}</h3>
        <p className="mt-2 max-w-sm text-sm text-white/75">{summary}</p>
        <span className="link-arrow mt-4 inline-flex text-sm font-semibold text-white">
          Explore solutions
        </span>
      </div>
    </Link>
  );
}
