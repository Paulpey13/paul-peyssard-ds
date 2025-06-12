import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a meeting or get in touch with me.',
}

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          Let’s Connect
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          If you're interested in working together, hiring me, or simply getting in touch,
          feel free to schedule a call at your convenience.
        </p>
        <a
          href="https://calendly.com/paul-peyssard"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-xl bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-700"
        >
          Book a Call
        </a>
      </div>
    </>
  )
}
