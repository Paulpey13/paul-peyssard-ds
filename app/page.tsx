import Link from '@/components/Link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
        Paul Peyssard
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Data Scientist & Machine Learning Engineer Freelance
      </p>
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
        Spécialisé en IA, Deep Learning, LLMs et automatisation. Je conçois, entraîne, et déploie des modèles d'intelligence artificielle adaptés aux besoins métiers.
      </p>

      <div className="mt-8 space-x-4">
        <Link
          href="/services"
          className="inline-block rounded-lg bg-primary-600 px-6 py-3 text-white font-medium hover:bg-primary-700"
        >
          Mes Services
        </Link>
        <Link
          href="/projects"
          className="inline-block rounded-lg border border-primary-600 px-6 py-3 text-primary-600 font-medium hover:bg-primary-50 dark:hover:bg-gray-800"
        >
          Mes Projets
        </Link>
      </div>

      <div className="mt-12 text-sm text-gray-400">
        Basé en France • Disponible en télétravail • <Link href="mailto:paul.peyssard@gmail.com" className="underline">Contactez-moi</Link>
      </div>
    </div>
  )
}
