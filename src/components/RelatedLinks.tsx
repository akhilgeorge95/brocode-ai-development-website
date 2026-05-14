import Link from 'next/link';

export function RelatedLinks({
  heading = 'Continue exploring',
  items
}: {
  heading?: string;
  items: { label: string; href: string; description?: string }[];
}) {
  return (
    <section className="bg-surface-muted py-20">
      <div className="container-site">
        <p className="eyebrow mb-4">{heading}</p>
        <h2 className="text-display-md text-ink-900">Related capabilities and stories</h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-xl2 border border-ink-100 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
              >
                <h3 className="text-base font-semibold text-ink-900">{item.label}</h3>
                {item.description && (
                  <p className="mt-2 text-sm text-ink-600">{item.description}</p>
                )}
                <span className="link-arrow mt-auto pt-5 text-sm font-semibold text-brand">
                  Read more
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
