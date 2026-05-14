import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-site flex min-h-[60vh] flex-col items-start justify-center py-22">
        <p className="eyebrow mb-4">404</p>
        <h1 className="max-w-2xl text-display-xl text-ink-900">
          The page you were looking for is not here.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink-600">
          It may have moved, or the link may be out of date. Try the home page, or get in touch
          and we will point you in the right direction.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
