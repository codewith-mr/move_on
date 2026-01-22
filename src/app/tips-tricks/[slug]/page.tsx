import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function TipPage({ params }: { params: { slug: string } }) {
  const tip = await prisma.tip.findUnique({ where: { slug: params.slug } })
  if (!tip) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-text">Tip not found</h1>
          <Link href="/tips-tricks" className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-md">Back to Tips</Link>
        </div>
      </div>
    )
  }

  const recommended = await prisma.tip.findMany({
    where: { category: tip.category, NOT: { id: tip.id } },
    take: 3,
  })

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <Link href="/tips-tricks" className="text-gray-600 hover:text-primary ml-1 md:ml-2">Tips & Tricks</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="ml-1 md:ml-2 text-gray-500">{tip.title}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-3xl font-heading font-bold text-text mb-3">{tip.title}</h1>
        <div className="flex items-center justify-between text-sm text-neutral-600">
          <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full">{tip.category}</span>
          {tip.readTime && <span>{tip.readTime}</span>}
        </div>
      </div>

      <article className="prose max-w-none">
        {tip.content ? (
          <div dangerouslySetInnerHTML={{ __html: tip.content }} />
        ) : (
          <p className="text-neutral-700">{tip.description}</p>
        )}
      </article>

      {recommended.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-heading font-bold text-text mb-6">Recommended Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommended.map((rec) => (
              <div key={rec.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
                <Link href={`/tips-tricks/${rec.slug}`} className="block">
                  <div className="relative h-32">
                    <div className="w-full h-full bg-neutral-100" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 hover:text-primary transition">{rec.title}</h3>
                    {rec.readTime && <p className="text-sm text-neutral-600">{rec.readTime}</p>}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
