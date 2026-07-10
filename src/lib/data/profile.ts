import { text } from "stream/consumers";

export const profile = {
  name: "Khushi Bhansali",
  tagline: "Creative Technology, Immersive Experiences, and Generative Media",
  cvHref: "/cv.pdf",
  email: "bhansali.khushi19@gmail.com",
  about: [
    {
      bold: true,
      text: "👋 Hey there! I'm Khushi! Data Scientist by trade. Creative Technologist by intent. Artist at heart.",
     },
     {
      bold: false,
      text: "I engineer real-time interactive pipelines that translate human motion, touch, and environmental datasets into responsive physical installations. By fusing data science with physical computing, I build stable, sensor-driven systems that transform abstract code into tangible human experiences.",
    },
     {bold: false,
      text: "My current work focuses on two distinct tracks. First, I develop backend creator tools and custom nodes to optimize 3D and generative workflows for the creative industry. Second, I design multi-sensory prototypes using computer vision, hardware sensors, and real-time audio-visual engines.",
    },
    {
      bold: false,
      text: "Every custom script, node, and sensor matrix I deploy serves as a direct technical building block toward a larger vision. My ultimate goal is to architect large-scale, climate-conscious immersive environments that merge Indian heritage with circular ecological engineering. By optimizing generative software for algorithmic energy conservation and exploring sustainable physical substrates, I am building a future where spatial technology flows cleanly through the environment instead of fighting it.",
    },
  ],
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khushi-bhansali/" }, // TODO: add LinkedIn profile URL
  { label: "Instagram", href: "https://www.instagram.com/khushi.paints/" }, // TODO: add Instagram profile URL
];
