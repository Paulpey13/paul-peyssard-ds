import Link from '@/components/Link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl dark:text-white">
        Paul Peyssard
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Data Scientist & Machine Learning Engineer Freelance
      </p>
      <p className="mt-2 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
        Specialized in AI, Deep Learning, LLMs, and automation. I design, train, and deploy artificial intelligence models tailored to business needs.
      </p>

      <div className="mt-8 space-x-4">
        <Link
          href="/services"
          className="bg-primary-600 hover:bg-primary-700 inline-block rounded-lg px-6 py-3 font-medium text-white"
        >
          Mes Services
        </Link>
        <Link
          href="/projects"
          className="border-primary-600 text-primary-600 hover:bg-primary-50 inline-block rounded-lg border px-6 py-3 font-medium dark:hover:bg-gray-800"
        >
          Mes Projets
        </Link>
      </div>

      <div className="mt-12 text-sm text-gray-400">
        Based in France & Switzerland • Available for remote and on-site work •{' '}
        <Link href="mailto:paul.peyssard@gmail.com" className="underline">
          Contact me
        </Link>
      </div>
    </div>
  )
}
