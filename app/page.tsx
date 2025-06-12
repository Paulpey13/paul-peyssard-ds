'use client'

import Link from '@/components/Link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-700 opacity-30 mix-blend-multiply blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500 opacity-30 mix-blend-multiply blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-blue-500 opacity-30 mix-blend-multiply blur-3xl animate-pulse delay-2000" />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold tracking-tight text-white md:text-7xl"
        >
          Paul Peyssard
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-xl text-gray-300"
        >
          Data Scientist & Machine Learning Engineer Freelance
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 max-w-2xl text-lg text-gray-400"
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
            className="bg-primary-600 hover:bg-primary-700 inline-block rounded-lg px-6 py-3 font-medium text-white transition"
          >
            Mes Services
          </Link>
          <Link
            href="/projects"
            className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-800 inline-block rounded-lg border px-6 py-3 font-medium transition"
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
      </main>
    </div>
  )
}
