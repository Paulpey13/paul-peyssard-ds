import { Zen_Tokyo_Zoo } from "next/font/google"

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'LLM Deployment with Mixtral',
    description:
      'Deployed Mixtral large language model on AWS infrastructure to ensure confidentiality and internal security compliance.',
    imgSrc: '/static/images/projects/mixtral.png',
  },


  {
    title: 'Brain Image Segmentation',
    description:
      'Implemented and compared YOLO, StarDist, Detectron, and CellPose models for microscopic neuron counting and segmentation at Neuro-Sys.',
    imgSrc: '/static/images/projects/cerveau.png',
  },


  {
    title: 'Helicopters anomaly detection',
    description:
      'Detection of anomalies such as fretting and corrosion on helicopters’ main gear boxes using deep learning for image segmentation.',
    imgSrc: '/static/images/projects/helico.png',
  },


  {
    title: 'Helicopters Dashboard for Fleet Tracking',
    description:
      'Built different interactive fleet tracking dashboards using Skywise and Spotfire, integrating live SQL queries on Big Data to monitor helicopter operations in real time.',
    imgSrc: '/static/images/projects/fleet.png',
  },


  {
    title: 'HE-Stain Domain Transfer',
    description:
      'Used CycleGANs for domain adaptation between different HE stain styles on Whole Slide Images.',
    imgSrc: '/static/images/projects/HEstained.png',
  },


  {
    title: 'Fuel Flow Prediction',
    description:
      'Prediction of helicopters’ fuel flow consumption during takeoff using tabular data and ML models.',
    imgSrc: '/static/images/projects/fuel.png',
  },

  {
    title: 'PathLDM - Histopathological Image Generation',
    description:
      'Used PathLDM to generate histopathological images from prompts for cancer diagnosis pipeline.',
    imgSrc: '/static/images/projects/pathldm.png',
  },


  {
    title: 'HistoGPT - Report Generation from WSI',
    description:
      'Fine-tuned HistoGPT to generate medical reports from Whole Slide Images using image-to-text generative models.',
    imgSrc: '/static/images/projects/report.png',
  },


  {
    title: 'Python flask automated analysis app',
    description:
      'Developed a Flask-based web app to conduct automated analaysis on different In Vivo/In Vitro files',
    imgSrc: '/static/images/projects/vitro.png',
  },


  {
    title: 'AI User Study Platform',
    description:
      'Developed a Flask-based web app to conduct performance evaluations of AI models with pathologists.',
    imgSrc: '/static/images/projects/webapp.png',
  },


  {
    title: 'Transformer POS Tagging',
    description:
      'Compared pre-trained transformers with home-made models for POS tagging on benchmark datasets.',
    imgSrc: '/static/images/projects/llm.jpeg',
  },


  {
    title: 'Multimodal Turn-Taking Prediction',
    description:
      'Built a deep learning model that predicts turn-taking from multimodal signals including video, audio, and text.',
    imgSrc: '/static/images/projects/turntaking.png',
  },


  {
    title: 'Machine Learning for Tabular Data',
    description:
      'Developed end-to-end ML pipelines for various tabular prediction tasks, including house price estimation, pet adoption speed classification, fraud detection, and Olympic gold medal forecasting.',
    imgSrc: '/static/images/projects/mltab.png',
  },


  {
  title: 'Research : Molecular Structure Generation',
  description:
    'Collaborated with Aix-Marseille University\'s chemists to generate valid molecular structures from atom lists using constraint programming in Java with the Choco solver. Ensured compliance with chemical constraints through automated structure generation.',
  imgSrc: '/static/images/projects/molecule.png',
  },


   {
    title: 'Research: Learning Compact Transparent Models using Neuro-Symbolic Methods',
    description:
      'Worked with IBM on improving model interpretability using the R2N approach for automatic feature engineering. Focused on building compact and transparent models through neuro-symbolic methods.',
    imgSrc: '/static/images/projects/rule.jpg',
  },


  {
  title: 'Python Web Application for Live Run Tracking',
  description:
    'Developed a web application for the “24h de Peynier” race to enable real-time lap counting by staff for each participant, improving accuracy and efficiency of race tracking.',
  imgSrc: '/static/images/projects/run.png',
}



  //   {
  //   title: 'Helicopters anomaly detection',
  //   description: Detection of anomaly on helicopters main gear boxes using deep learning for image semgentation,
  //   imgSrc: '/static/images/projects/small.png',
  //   // href: 'https://www.google.com',
  // },
]

export default projectsData
