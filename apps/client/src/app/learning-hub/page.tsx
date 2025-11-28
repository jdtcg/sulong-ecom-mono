
import Link from "next/link"

const videos = [
  {
    id: "Js_5RaKN1-A",
    title: "How to sew ruffles",
    description: "Step-by-step guide to sewing ruffles on garments.",
  },
  {
    id: "oD_KpZm7OaM",
    title: "A begginer's guide to sewing",
    description: "Basic sewing techniques for beginners.",
  },
  {
    id: "ZvzMMcKHVR4",
    title: "How to sew by hand",
    description: "Essential hand sewing stitches and techniques.",
  },
  {
    id: "_DQozdK_BuY",
    title: "diy straw bag",
    description: "Making a stylish straw bag from scratch.",
  },
  {
    id: "knbR3kgGssE",
    title: "How to start a coiled basket",
    description: "Techniques for beginning a coiled basket project.",
  },
]

const ebooks = [
  {
    title: "Reader's Digest Complete Guide to Sewing",
    author: "Reader's Digest Editors",
    url: "https://www.amazon.com/dp/1621458016?linkCode=ml1&tag=angelinamccul-20",
  },
  {
    title: "Vogue Sewing Book",
    author: "Unknown",
    url: "https://www.amazon.com/dp/B0026PUEVC?linkCode=ml1&tag=angelinamccul-20",
  },
  {
    title: "Fast Fit: Easy Pattern Alterations for Every Figure",
    author: "Sandra Betzina",
    url: "https://www.amazon.com/dp/1561586498?linkCode=ml1&tag=angelinamccul-20",
  },
  {
    title: "Patternmaking for Fashion Design",
    author: "Helen Joseph Armstrong",
    url: "https://www.amazon.com/dp/9332518114?linkCode=ml1&tag=angelinamccul-20",
  },
  {
    title: "HONEYSEW 1",
    author: "Unknown",
    url: "https://www.amazon.com/dp/B08ZS9JS56?linkCode=ml1&tag=angelinamccul-20",
  },
  {
    title: "Ready, Set, Serge",
    author: "Georgie Melot",
    url: "https://www.amazon.com/dp/0896896900?linkCode=ml1&tag=angelinamccul-20",
  },
  {
    title: "Dream Sewing Spaces",
    author: "Lynette Ranney Black",
    url: "https://www.amazon.com/dp/0935278818?linkCode=ml1&tag=angelinamccul-20",
  },
  {
    title: "Upcycling & Patchwork Patterns",
    author: "Community Tutorials",
    url: "https://www.instructables.com/Upcycling/",
  },
]

export default function LearningHub() {
  return (
    <div className="py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Sulong Learning Hub</h1>
      </header>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <article key={v.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{v.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{v.description}</p>
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-cyan-700 hover:underline"
                  >
                    Watch on YouTube
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ebooks & Guides</h2>
        <p className="text-gray-600 mb-4">Downloadable and online guides to help you learn handicrafts.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ebooks.map((e) => (
            <div key={e.url} className="p-4 bg-white rounded shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-medium">{e.title}</h3>
                <p className="text-sm text-gray-500">{e.author}</p>
              </div>
              <div className="mt-4">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-3 py-2 rounded-md bg-cyan-700 text-white text-sm hover:bg-cyan-800"
                >
                  Open resource
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}