export const profile = {
  name: "Khushi Bhansali",
  tagline: "Creative Technology, Immersive Experiences, and Generative Media",
  cvHref: "/cv.pdf", // TODO: add your CV to /public/cv.pdf
  email: "bhansali.khushi19@gmail.com",
  about: [
    {
      bold: true,
      text: "👋 I'm a Cornell Tech graduate and creative technologist building toward a future where immersive experiences and generative media help artists and brands create their most ambitious work.",
    },
    {
      bold: false,
      text: "My journey — from developing immersive XR projects at the FDA, to tackling complex financial challenges at Goldman Sachs and PNC — reflects a commitment to using cutting-edge technology to shape a more inclusive and creative future.",
    },
    {
      bold: true,
      text: "I currently work at PNC Bank, where I apply statistical modeling and fraud detection techniques to enhance financial integrity — building solutions that are as impactful as they are forward-thinking.",
    },
    {
      bold: true,
      text: "My vision is to cultivate a future where innovative artistry and design principles drive the evolution of technology — fostering inclusive, immersive, and impactful experiences for individuals and communities worldwide.",
    },
  ],
};

export const socialLinks = [
  { label: "LinkedIn", href: "#" }, // TODO: add LinkedIn profile URL
  { label: "X", href: "#" }, // TODO: add X/Twitter profile URL
  { label: "Instagram", href: "#" }, // TODO: add Instagram profile URL
  { label: "Email", href: `mailto:${profile.email}` },
];
