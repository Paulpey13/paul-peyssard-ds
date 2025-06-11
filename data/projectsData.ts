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
    imgSrc: '/static/images/mixtral.png',
  },
  {
    title: 'Brain Image Segmentation',
    description:
      'Implemented YOLO, StarDist, Detectron, and CellPose models for microscopic neuron segmentation at Neuro-Sys.',
    imgSrc: '/static/images/cerveau.png',
  },
  {
    title: 'Helicopters anomaly detection',
    description:
      'Detection of anomalies such as fretting and corrosion on helicopters’ main gear boxes using deep learning for image segmentation.',
    imgSrc: '/static/images/helico.png',
  },
  {
    title: 'HE-Stain Domain Transfer',
    description:
      'Used CycleGANs for domain adaptation between different HE stain styles on Whole Slide Images.',
    imgSrc: '/static/images/HEstained.png',
  },
  {
    title: 'Fuel Flow Prediction',
    description:
      'Prediction of helicopters’ fuel flow consumption during takeoff using tabular data and ML models.',
    imgSrc: '/static/images/fuel.png',
  },

  {
    title: 'PathLDM - Histopathological Image Generation',
    description:
      'Used PathLDM to generate histopathological images from prompts for Veracyte’s cancer diagnosis pipeline.',
    imgSrc: '/static/images/pathldm.png',
  },
  {
    title: 'HistoGPT - Report Generation from WSI',
    description:
      'Fine-tuned HistoGPT to generate medical reports from Whole Slide Images using image-to-text generative models.',
    imgSrc: '/static/images/report.png',
  },
  {
    title: 'Python flask automated analysis app',
    description:
      'Developed a Flask-based web app to conduct automated analaysis on different In Vivo/In Vitro files',
    imgSrc: '/static/images/vitro.png',
  },
  {
    title: 'AI User Study Platform',
    description:
      'Developed a Flask-based web app to conduct performance evaluations of AI models with pathologists.',
    imgSrc: '/static/images/webapp.png',
  },
  {
    title: 'Transformer POS Tagging',
    description:
      'Compared pre-trained transformers with home-made models for POS tagging on benchmark datasets.',
    imgSrc: '/static/images/llm.jpeg',
  },
  {
    title: 'Multimodal Turn-Taking Prediction',
    description:
      'Built a deep learning model that predicts turn-taking from multimodal signals including video, audio, and text.',
    imgSrc: '/static/images/turntaking.png',
  },

  //   {
  //   title: 'Helicopters anomaly detection',
  //   description: Detection of anomaly on helicopters main gear boxes using deep learning for image semgentation,
  //   imgSrc: '/static/images/small.png',
  //   // href: 'https://www.google.com',
  // },
]

export default projectsData
