import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Services IA proposés par Paul Peyssard',
}

export default function Services() {
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Services
      </h1>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-lg text-gray-700 dark:text-gray-300">
        <li>Consulting IA</li>
        <li>Développement, entraînement, mise en production de modèles IA</li>
        <li>Implémentation de LLM pour entreprises</li>
        <li>Analyse et nettoyage de données</li>
        <li>Automatisation de traitements (images, texte, etc.)</li>
        <li>Développement d’applications web (Python, Flask, React…)</li>
        <li>Formation / cours : introduction à l’IA et Python</li>
      </ul>
    </div>
  )
}
