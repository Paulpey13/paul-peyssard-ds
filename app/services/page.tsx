// import { Metadata } from 'next'
// import { Briefcase, Code, BookOpen, BarChart3, Sparkles, Bot, Zap } from 'lucide-react'

// export const metadata: Metadata = {
//   title: 'Services',
//   description: 'AI services offered by Paul Peyssard: custom development, automation, LLM integration, and more.',
// }

// const services = [
//   {
//     title: 'AI Strategy & Consulting',
//     description: 'Guidance on how to integrate AI into your business workflow, with a focus on feasibility and ROI.',
//     icon: <Briefcase className="h-6 w-6 text-primary-600" />,
//   },
//   {
//     title: 'Model Development & Deployment',
//     description: 'Custom AI models for classification, prediction, detection, segmentation — trained and deployed in production.',
//     icon: <Code className="h-6 w-6 text-primary-600" />,
//   },
//   {
//     title: 'LLM Integration (GPT, Claude, etc.)',
//     description: 'Custom GPT-powered solutions tailored to internal data, knowledge bases, or user interaction workflows.',
//     icon: <Bot className="h-6 w-6 text-primary-600" />,
//   },
//   {
//     title: 'Data Cleaning & Analysis',
//     description: 'Exploratory analysis, feature engineering, data validation, and preprocessing pipelines.',
//     icon: <BarChart3 className="h-6 w-6 text-primary-600" />,
//   },
//   {
//     title: 'Automation & AI Agents',
//     description: 'End-to-end automation of complex processes using AI agents — image, video, text, or code.',
//     icon: <Zap className="h-6 w-6 text-primary-600" />,
//   },
//   {
//     title: 'Full-Stack App Development',
//     description: 'AI-powered tools and dashboards using Python, Flask, Next.js, React, Tailwind, and more.',
//     icon: <Sparkles className="h-6 w-6 text-primary-600" />,
//   },
//   {
//     title: 'Workshops & Training',
//     description: 'Introductory and advanced sessions on AI, Python, deep learning, and generative models.',
//     icon: <BookOpen className="h-6 w-6 text-primary-600" />,
//   },
// ]

// export default function Services() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
//           What I Offer
//         </h1>
//         <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Practical AI expertise for real-world problems. From custom models to automated workflows and LLMs — I deliver production-ready solutions.
//         </p>
//       </div>

//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
//           >
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//               {service.title}
//             </h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
