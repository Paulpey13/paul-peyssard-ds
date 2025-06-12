'use client'

import Link from '@/components/Link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-gray-900 md:text-6xl dark:text-white"
      >
        Paul Peyssard
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-xl text-gray-600 dark:text-gray-300"
      >
        Data Scientist & Machine Learning Engineer Freelance
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-2 text-lg text-gray-500 dark:text-gray-400"
      >
        Specialized in AI, Deep Learning, LLMs, and automation. I design, train, and deploy artificial intelligence models tailored to business needs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="mt-8 space-x-4"
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 text-sm text-gray-400"
      >
        Based in France & Switzerland • Available for remote and on-site work •{' '}
        <Link href="mailto:paul.peyssard@gmail.com" className="underline">
          Contact me
        </Link>
      </motion.div>
    </div>
  )
}
