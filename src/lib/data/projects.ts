export type Accent = "green" | "yellow" | "blue" | "orange";

export type TextSegment = { text: string; bold?: boolean };

export type CaseStudySection = {
  label: string;
  paragraphs: TextSegment[][];
  /** Optional video embedded below this section's text. */
  video?: string;
};

export type Project = {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  accent: Accent;
  /** Thumbnail used in the projects table and as the detail page video poster. */
  image?: string;
  /** Hero video shown at the top of the project detail page. */
  video?: string;
  /** Key into the hero sketch registry — renders a live generative sketch instead of `video`/`image`. */
  sketch?: "koipond";
  /** External link to the live project, repo, or work shown as a button on the detail page. */
  link?: string;
  sections: CaseStudySection[];
};

// Animated hero blobs (no text inside) reference these CSS custom properties directly.
export const accentCssVar: Record<Accent, string> = {
  green: "var(--blob-green)",
  yellow: "var(--blob-yellow)",
  blue: "var(--blob-blue)",
  orange: "var(--blob-orange)",
};

// Swatches that contain text use a translucent rgba so the content stays readable.
export const accentSoft: Record<Accent, string> = {
  green: "rgba(139, 212, 80, 0.3)",
  yellow: "rgba(255, 209, 102, 0.3)",
  blue: "rgba(110, 198, 255, 0.3)",
  orange: "rgba(255, 179, 122, 0.3)",
};

function placeholderSections(num: string): CaseStudySection[] {
  return [
    {
      label: "The Problem",
      paragraphs: [
        [
          { text: `Placeholder for project ${num} — describe the problem space, who it affected, and why it mattered. ` },
          { text: "Call out the key pain point here.", bold: true },
        ],
        [
          { text: "Add any supporting context, research, or data that motivated the work." },
        ],
      ],
    },
    {
      label: "Approach",
      paragraphs: [
        [
          { text: "Describe your approach and process — " },
          { text: "the key decisions and trade-offs you made.", bold: true },
        ],
      ],
    },
    {
      label: "System Design",
      paragraphs: [
        [
          { text: "Outline the architecture, tools, and workflows behind this project — " },
          { text: "call out the core technical or creative system.", bold: true },
        ],
      ],
    },
    {
      label: "Results / Metrics",
      paragraphs: [
        [
          { text: "Share the outcomes — " },
          { text: "quantify the impact with metrics where possible.", bold: true },
          { text: " Close with what you learned." },
        ],
      ],
    },
  ];
}

const sankranti: Project = {
  id: "01",
  title: "Exploring Dual Identity: Flying Between Two Skies",
  role: "Interactive Installation — Concept, Design & Development",
  description:
    "A computer-vision kite-flying installation about balancing two cultures, inspired by Makar Sankranti — built with React, Vite, and MediaPipe hand tracking.",
  tags: ["#INTERACTIVE INSTALLATION", "#COMPUTER VISION", "#CULTURAL IDENTITY"],
  accent: "green",
  image: "/kite.png",
  video: "/kiteapp.mp4",
  link: "https://khushibhansali.github.io/kite/",
  sections: [
    {
      label: "The Problem",
      paragraphs: [
        [
          { text: "As an Indian living in America, I discovered that navigating two cultures often came with " },
          { text: "conflicting values, expectations, and definitions of success.", bold: true },
          { text: " Growing up, I constantly felt pulled between worlds that sometimes seemed incompatible." },
        ],
        [
          { text: "My Indian upbringing represented grounding, responsibility to family, collectivism, humility, and tradition. Living in America encouraged independence, self-expression, ambition, and the freedom to define success for yourself. " },
          { text: "These values sometimes clashed in deeply personal ways.", bold: true },
        ],
        [
          { text: "I found myself translating my parents' worldview to my friends, and my friends' lifestyle back to my parents. I learned the guilt of saying no to family to keep up a social life, and I felt alienated saying no to peers to honor family obligations. Even success itself became a negotiation between external achievement and internal fulfillment." },
        ],
        [
          { text: "This installation explores those tensions not as universal truths about any culture, but as " },
          { text: "reflections of my own lived experience navigating identity between two environments.", bold: true },
        ],
      ],
    },
    {
      label: "Approach",
      video: "/kiteidea.mp4",
      paragraphs: [
        [
          { text: "Over time, I realized this tension wasn't something to escape, but something to learn from. Like a kite during " },
          { text: "Makar Sankranti", bold: true },
          { text: ", an Indian harvest festival celebrated through kite flying, I found that " },
          { text: "balancing opposing forces is what ultimately allows you to take flight.", bold: true },
        ],
        [
          { text: "The kite becomes a central metaphor throughout the piece. The wind and string aren't enemies. The string doesn't exist to restrict the kite, and the wind doesn't exist to pull it apart. " },
          { text: "Both are necessary for flight.", bold: true },
          { text: " My identity wasn't divided between two opposing worlds, but shaped through learning how to move between them." },
        ],
        [
          { text: "Before the kite can fly, it has to be designed first. The opening scene reflects how identity is often built through perception. Players choose a kite's shape, fabric, colors, and tail, symbolizing the tension between " },
          { text: "self-expression and external expectation.", bold: true },
        ],
      ],
    },
    {
      label: "System Design",
      paragraphs: [
        [
          { text: "The second scene transforms the installation into an " },
          { text: "embodied interactive experience.", bold: true },
          { text: " Using a live laptop camera feed, players physically hold and balance two virtual kite strings with their hands." },
        ],
        [
          { text: "As the kite rises, challenges emerge that represent moments of cultural negotiation from my own life. The player must continuously balance opposing pressures to keep the kite airborne. " },
          { text: "The interaction is intentionally unstable", bold: true },
          { text: ", reflecting how exhausting and delicate identity negotiation can feel in real life." },
        ],
        [
          { text: "Built with " },
          { text: "React and Vite", bold: true },
          { text: " for the interface, " },
          { text: "MediaPipe", bold: true },
          { text: " for computer-vision hand tracking, a live webcam feed for input, and an interactive physics-based gameplay system for the kite's flight." },
        ],
      ],
    },
    {
      label: "Results / Metrics",
      paragraphs: [
        [
          { text: "Rather than presenting dual identity as a problem to solve, " },
          { text: "Sankranti frames it as an act of continuous navigation", bold: true },
          { text: ", one that can become a source of strength, resilience, and flight." },
        ],
        [
          { text: "Planned next steps include " },
          { text: "expanded kite customization, dynamic environmental challenges tied to emotional states, audio storytelling and spoken reflections, a projection-based installation mode, and multiplayer collaborative kite balancing.", bold: true },
        ],
      ],
    },
  ],
  };

const customtool: Project = {
  id: "02",
  title: "Prompt-to-Texture Node for ComfyUI",
  role: "Developer",
  description:
    "Provides a custom ComfyUI node that generates a full Physically Based Rendering (PBR) texture set from a text prompt for use in 3D content-creation workflows.",
  tags: ["#DEVELOPER TOOLS", "#COMPUTER VISION", "#IMAGE GENERATION"],
  accent: "green",
  image: "/texture.png",
  link: "https://github.com/Khushibhansali/Comfyui-texture-map-generator",
  sections:
  [
      {
        "label": "The Problem",
        "paragraphs": [
          [
            { "text": "In modern 3D content creation pipelines, creating realistic materials traditionally requires manually sourcing or painting multiple individual texture layers. Shading and texturing for consistent realism under varying lighting environments " },
            { "text": "demands an intricate mix of physical properties rather than a single, flat image.", "bold": true }
          ],
          [
            { "text": "While text-to-image models have made generating standalone, stylized, or realistic images incredibly accessible, artists and game developers cannot easily use raw 2D image outputs in a 3D engine. Traditional 2D generations suffer from 'baked-in' lighting, reflections, and shadows, which " },
            { "text": "shatter visual consistency when placed into dynamic 3D environments.", "bold": true }
          ],
          [
            { "text": "This creates a major workflow bottleneck. Artists are forced to use external, fragmented tools to manually extract structural depth, roughness, and surface details from a single text prompt or reference photo just to make a material usable in 3D." }
          ]
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text": "To solve this bottleneck, this project introduces a custom ComfyUI node designed to automate the entire " },
            { "text": "Physically Based Rendering (PBR)", "bold": true },
            { "text": " texture generation workflow directly from a text prompt." }
          ],
          [
            { "text": "Instead of forcing creators to leave the ComfyUI ecosystem, this node utilizes a specialized text-to-material generation backend to simultaneously compute a comprehensive material profile. By separating a single asset prompt into its exact physical parameters, the system ensures the resulting textures look convincing under any lighting setup, from a bright desert sun to a moody neon interior." }
          ],
          [
            { "text": "The node maps these advanced physical parameters directly into standard ComfyUI " },
            { "text": "IMAGE outputs", "bold": true },
            { "text": ", allowing them to instantly route into downstream nodes like upscalers, texture packers, previewers, or local file savers." }
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "The node architecture is designed for seamless integration and modular expansion within ComfyUI, separating asset computation into a clean, multi-map pipeline. Upon receiving a text prompt, the underlying backend splits the generation task into six distinct channels, including " },
            { "text": "Albedo (Base Color), Normal maps, Roughness data, Metallic attributes, Ambient Occlusion (AO) shadowing, and Displacement (Height) data.", "bold": true }
          ],
          [
            { "text": "The software implementation relies on a lightweight, modular repository architecture." }
          ],
          [
            { "text": "• " },
            { "text": "__init__.py", "bold": true },
            { "text": " registers the custom node within ComfyUI by exporting node class and display name mappings." }
          ],
          [
            { "text": "• " },
            { "text": "pbr.py", "bold": true },
            { "text": " holds the core execution logic, defining the data inputs, texture channels, and structural inference systems." }
          ],
          [
            { "text": "• " },
            { "text": "requirements.txt", "bold": true },
            { "text": " isolates and manages the Python library dependencies needed to process backend data." }
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        "paragraphs": [
          [
            { "text": "The system successfully transforms abstract text descriptions into ready-to-use material suites compatible with all major 3D creation suites, including " },
            { "text": "Blender, Unreal Engine, Unity, and Substance Suite.", "bold": true }
          ],
          [
            { "text": "To ensure immediate usability, the repository includes a native " },
            { "text": "example_workflow.json", "bold": true },
            { "text": " file. This allows users to drop a pre-configured template directly into their ComfyUI workspace, instantly wiring the generator's multi-channel map outputs straight to automated save and preview matrices." }
          ],
          [
            { "text": "Future updates will focus on " },
            { "text": "image-to-PBR map conversion, advanced resolution upscaling presets, customized texture-packing configurations (such as ORM layout maps), and seamless procedural seam-tiling algorithms.", "bold": true }
          ]
        ]
      }
    ]
  };

const aromasense: Project = {
    id: "03",
    title: "AromaSense: A Mood-to-Scent VR Experience",
    role: "Concept Design & VR Product Development",
    description:
      "A VR concept that lets users blend custom L'Oréal fragrances by scanning their mood, face, and voice inside an aromatherapy zen space — Top 10 US Finalist, L'Oréal Brandstorm 2023.",
    tags: ["#VR/AR", "#IMMERSIVE EXPERIENCE", "#PRODUCT DESIGN"],
    accent: "green",
    image: "/loreal.png",
    video: "/loreal_ad.mp4",
    sections:
    [
        {
          "label": "The Problem",
          "paragraphs": [
            [
              { "text": "L'Oréal Brandstorm 2023 was an international pitch competition challenging teams to use " },
              { "text": "AI, AR/VR, and metaverse technologies", "bold": true },
              { "text": " to increase personalization and inclusivity and reach a broader, younger demographic, with the goal of turning the winning pitch into a real product." }
            ],
            [
              { "text": "L'Oréal had already backed groundbreaking products like " },
              { "text": "HAPTA", "bold": true },
              { "text": ", which blends seamless online-to-offline experiences with AI-driven personalization, and its collaborations with startups underscored a real appetite for innovative beauty products and services. This was fertile ground for a bold pitch." }
            ],
            [
              { "text": "At the same time, in 2023 Forbes reported that " },
              { "text": "66 to 90% of Gen Z experiences anxiety, depression, phobias, or PTSD", "bold": true },
              { "text": ", conditions shown to be reduced through VR therapy. Yet the fragrance industry remained entirely physical and one-size-fits-all, with no bridge connecting L'Oréal's perfume line to the immersive wellness tech Gen Z was already turning to." }
            ]
          ]
        },
        {
          "label": "Approach",
          "paragraphs": [
            [
              { "text": "Our pitch capitalized on the burgeoning sector of " },
              { "text": "L'Oréal perfumes", "bold": true },
              { "text": " by introducing them into people's homes through VR headsets, rather than confining the fragrance experience to a physical counter." }
            ],
            [
              { "text": "Instead of treating scent as a static purchase, we reframed it as a " },
              { "text": "personalized wellness ritual", "bold": true },
              { "text": ", leaning on VR's proven therapeutic effects on anxiety and mood to turn fragrance discovery into a moment of aromatherapy and self-care." }
            ]
          ]
        },
        {
          "label": "System Design",
          "paragraphs": [
            [
              { "text": "Inside the headset, the system scans the user's " },
              { "text": "mood, facial expressions, and voice", "bold": true },
              { "text": " and translates them into a blended L'Oréal scent profile unique to that moment." }
            ],
            [
              { "text": "Users are then immersed in an " },
              { "text": "aromatherapy zen space", "bold": true },
              { "text": " built for them to sit with and fully appreciate their custom scent creation." }
            ],
            [
              { "text": "Once satisfied, users personalize the " },
              { "text": "3D design of the bottle", "bold": true },
              { "text": " and complete the purchase directly through the L'Oréal store, closing the loop from mood scan to product in hand." }
            ]
          ]
        },
        {
          "label": "Results / Metrics",
          "paragraphs": [
            [
              { "text": "The concept placed as a " },
              { "text": "Top 10 US Finalist in L'Oréal Brandstorm 2023.", "bold": true }
            ],
            [
              { "text": "More broadly, the pitch expands L'Oréal's presence into the VR realm and " },
              { "text": "taps into an underdeveloped market", "bold": true },
              { "text": " at the intersection of beauty, wellness, and immersive tech." }
            ],
            [
              { "text": "It also strengthens " },
              { "text": "accessibility and engagement", "bold": true },
              { "text": " with L'Oréal's brand and identity, giving Gen Z a new, emotionally resonant way to discover and shop its fragrance line." }
            ]
          ]
        }
      ]
  };

const paintbynumbers: Project = {
  id: "04",
  title: "Paint by Numbers",
  role: "Developer",
  description:
    "Paint by Numbers is a generative art project that uses a simple algorithm to generate images based on a set of numbers.",
  tags: ["#DEVELOPER TOOLS", "#COMPUTER VISION", "#CREATIVE CODING"],
  accent: "green",
  link: "https://khushibhansali.github.io/PaintbyNumbers/",
  image: "/postcard.png",
  video: "/paintbynumbersdemo.mov",
  sections: 
  [
      {
        "label": "The Problem",
        "paragraphs": [
          [
            { "text": "Capturing memories while traveling usually relies on flat, passive mediums like standard smartphone photos or generic, store-bought postcards. For artists and creators on the go, these digital snapshots don't convey the tactile, meditative feeling of physically painting a landscape as you experienced it during a journey. Traditional painting, on the other hand, is hard to do while traveling because of the burden of carrying extensive art supplies, palettes, and mixing tools. And once a travel memory is shared, static physical media doesn't have the spatial depth to fully transport a loved one into the immersive atmosphere of the destination."}
          ]
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text":"To bridge the gap between spontaneous physical art and immersive digital storytelling, this project introduces a mobile, automated paint-by-numbers ecosystem built for creators on the move. Using a custom computer vision pipeline, the system turns any smartphone travel photo into a simplified, paintable canvas with a minimal, curated color palette, cutting out the need for extensive art supplies. The final artwork is exported onto a dual-sided, ready-to-print postcard. One side holds the tactile painting template and a localized palette guide, while the other side carries a custom-generated Web3 or WebXR QR code that lets the recipient step directly into a 3D, virtual reality reimagining of the painted scene, as if experiencing the traveler's journey firsthand."},
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "The platform runs on an integrated pipeline that connects a backend computer vision engine, a custom print layout wrapper, and an immersive, browser-based spatial environment. It starts when a user uploads a smartphone photo to the app. A custom-coded computer vision script uses color quantization algorithms like K-Means clustering to analyze the image's pixel matrix and pull out its core dominant colors, distilling a complex landscape down to a tight, minimal palette. Once the primary colors are set, the engine applies edge detection and contour mapping filters to trace clean vector boundaries between the color zones, turning the source photo into a precise, unpainted vector canvas. From there, a custom print layout engine arranges the data into a print-ready, dual-sided postcard sized to exact real-world dimensions. Side A shows the numbered contour art canvas along with a localized ink swatch guide listing the exact colors needed for the physical painting. Side B lays out a standard mailing template, with a message window, a postage stamp boundary, and a QR code generated specifically for that asset's spatial coordinates. The last piece of the architecture handles the digital transformation loop through an accessible WebXR and Three.js setup. When the recipient scans the postcard's QR code, it instantly opens a web-based, hardware-agnostic spatial environment that needs no app download. The system reads the original image data to map the textures onto a responsive 3D scene or a spherical panorama, creating an immersive VR depth layer that lets the user move their device, or put on a headset, to step into a 3D version of the exact travel destination."}
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        "paragraphs": [
          [
            { "text": "The finished pipeline turns spontaneous travel photography into a functional, interactive physical-to-digital keepsake. The computer vision model handles color quantization well, consistently reducing complex landscape gradients down to fewer than ten distinct color zones without losing the original composition's visual character. Hardware testing confirmed the generated postcard designs held standard printing dimensions, bleed boundaries, and scaling accurately. The automated VR engine also stayed consistent across multiple mobile web browsers, triggering full spatial immersion within milliseconds of scanning the postcard's QR code."}
          ]
        ]
      }
    ]
  };

const musicalpainting: Project = {
  id: "05",
  title: "The scream that actually screams",
  role: "Developer",
  description:
    "A multi-sensory reimagining of Edvard Munch’s The Scream that blends physical computing with fine art to transform human touch into spooky soundscapes.",
  tags: ["#PHYSICAL COMPUTING", "#RASPBERRY PI", "#CREATIVE CODING"],
  accent: "green",
  image: "/scream.png",
  video: "/scream1.mov",
  sections: 
  [
      {
        "label": "The Problem",
        "paragraphs": [
          [
            { "text": "Traditional fine art is static and passive by nature. For an immersive event like a Halloween-themed installation, a flat visual piece alone can't fully engage the audience's senses or bring out the atmospheric, eerie feeling the original painting intended." },
          ]
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text": "The goal was to bridge the gap between traditional fine art and physical computing." },
            { "text": " Recreating Edvard Munch's The Scream, the project fused classic imagery with modern tech to build a multi-sensory, touch-activated experience that brings the painting's inherent anxiety and spookiness into the physical space." }
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "To bring the canvas to life, the installation runs on an integrated hardware and software pipeline centered around a Raspberry Pi. The physical interface was built by applying electrically conductive paint over copper wiring hidden beneath the painting's surface, mapping out specific touch-responsive zones on The Scream. These conductive pathways act as capacitive sensors wired directly into the Raspberry Pi's GPIO pins. The software was written and deployed in VS Code, where a Python script continuously polls the pins for electrical resistance changes caused by human touch, instantly triggering specific audio files through the Pi's sound card whenever a contact event is registered."}
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        video: "/scream2.mov",
        "paragraphs": [
          [
            { "text": "Performance was measured by the accuracy and latency of the interaction loop, and it hit seamless real-time audio playback within milliseconds of physical touch. The code handled debouncing logic flawlessly, so rapid, consecutive touches cleanly cycled through the different spooky soundtracks without overlapping or crashing the audio driver. The final system and its interactive audio-visual feedback loops were fully tested and documented in the accompanying project videos."}
          ]
        ]
      }
    ]
  };

const wirebend: Project = {
  id: "06",
  title: "3D Unity Software For Wire Bending",
  role: "Developer",
  description:
    "Turning complex industrial wire bending into an intuitive 3D game.",
  tags: ["#DEVELOPER TOOLS", "#UNITY", "#CREATIVE CODING"],
  accent: "green",
  image: "/wirebend.png",
  video:"/wire.mov",
  link: "https://drive.google.com/file/d/13VYxuO8VKyChI6NfMQ42t50r46cDApHr/view",
  sections: 
  [
      {
        "label": "The Problem",
        "paragraphs": [
          [
            { "text": "Traditional 3D wire-bending machines run on rigid hardware constraints and usually require custom code or deep technical expertise to program physical paths. That creates a steep barrier to entry for creators, designers, and non-technical operators. On top of that, designing blindly in a digital space without real-time physical feedback leads to frequent structural failures, machine collisions, and material waste, since there's no built-in way to check if a digital shape is actually manufacturable by the physical bender."}
          ],
          
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text": "To make this fabrication process more accessible, I helped develop an interactive 3D plugin tailored specifically to the wire-bending machine's physics. By embedding the machine's hardware constraints directly into a visual engineering environment, we shifted the workflow from programming to intuitive modeling. This makes sure any geometry a user draws is mathematically feasible, automatically catching potential manufacturing errors and collision risks before the design ever reaches the shop floor."}
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "Built natively in Unity, the software cleanly separates backend geometry computation from front-end user interaction. For the core physics and simulation engine, C# scripts govern the virtual wire object's behavior, running real-time bend, rotation, and linear extension calculations while also running a continuous background collision-detection routine to flag geometry that physically hits the machine frame. The UX layer includes a full camera rigging system supporting adaptive orbiting, panning, and zooming across both trackpads and standard mice, along with an onboarding portal, guided tutorials, and dynamic canvas overlays showing live spatial dimensions. Finally, the hardware integration pipeline translates the virtual 3D vector model into physical machine instructions through a custom C# exporter that applies precise real-world dimensional scaling to the digital coordinates, outputting a streamlined CSV file built to match the syntax the physical Wire Terminal software expects." }
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        "paragraphs": [
          [
            { "text": "The collaborative engineering effort produced a fully functional, verified end-to-end CAD-to-fabrication pipeline. Testing confirmed that the generated spatial coordinates imported into the Wire Terminal environment with zero orientation errors, keeping dimensional accuracy consistent from the digital canvas to the physical machine. A round of code refactoring unified complex physical keyboard bindings with active UI button states, streamlining function mapping and lowering latency during live manipulation. Further edge-case testing and quality checks confirmed the simulation was fully stable, giving a reliable, crash-free interface ready for non-technical users."}
          ]
        ]
      }
    ]
  };

const trashcan: Project = {
  id: "07",
  title: "Teaching Cities to Recycle in Real Time",
  role: "Developer",
  description: "AI-powered smart trashcan utilizing computer vision and a custom sensor-driven hardware matrix to automate waste classification and real-time user error correction.",
  tags: ["#IOT", "#RASPBERRY PI", "#CREATIVE CODING"],
  accent: "green",
  image: "/trash.png",
  link: "https://github.com/Khushibhansali/Interactive-Lab-Hub/tree/Fall2023/Smart-Trash-Can",
  video: "/FinalDemoiRecycle.mov",
  sections: 
  [
      {
        "label": "The Problem",
        "paragraphs": [
          [
            { "text": "Public spaces like airports, malls, and stadiums generate huge volumes of waste, yet a lot of it gets missorted because people lack the time, convenience, or local knowledge to tell recyclables, compost, batteries, and general trash apart. This sorting failure leads to serious recycling contamination, more landfill waste, and missed chances for material recovery. On top of that, standard waste infrastructure stays completely passive. It doesn't educate users in real time, doesn't collect data on consumption habits, and relies on manual, inefficient physical checks by facility staff to figure out when a bin needs to be emptied."}
        ]
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text": "To fix these inefficiencies, the team built an intelligent, interactive waste management system that automates classification and gamifies environmental responsibility. By placing a smart, sensor-driven sorting hub in high-traffic areas, the system takes the cognitive burden of recycling off busy people. The approach relies on an adaptable machine learning model paired with a real-time, closed-loop feedback mechanism. Instead of relying on a static, rigid classification database, the system is built around continuous, user-centric learning, letting users actively flag misclassifications in real time and directly improve the system's long-term accuracy and adaptability."}
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "The architecture combines a custom computer vision pipeline with a highly specialized, hand-built physical computing setup to automate waste classification. At its core, the system uses a Teachable Machine model to handle real-time object recognition across multiple waste streams. To support this, the physical scanning areas and customized lids for each individual trash bin, along with a dedicated battery bin, were custom-designed and precision laser-cut. Building the physical prototype meant hand-wiring a network connecting multiple distance sensors, buttons, and servo motors directly to the main control hub, including soldering the hardware for seven distinct LED buttons so each input kept a designated, unique address on the shared system bus."},
            { "text": "On the software side, custom Python scripts run the complete end-to-end operation of the waste hub. The central script captures input from the camera to scan the object, runs the frame through the machine learning model, and immediately shows the classification results to the user. At the same time, a mechanical actuation script drives precise servo control to physically open the lid of the matching bin. To display these interactions, an interactive iPad dashboard has a custom-designed layout managing the camera background, alignment targets, and active item labels. This interface is the primary hub for the system's user feedback and misclassification correction loop, enabling real-time continuous learning from human input."},
            { "text": "To keep the facility informed, the system includes a multi-sensor telemetry layer that tracks bin capacity and waste metrics. A distance-sensing algorithm reads multiple proximity sensors at once, calculating fill levels and flagging in real time when a bin is full and needs attention. As items get sorted, a tracking database logs each disposal event to calculate rolling metrics. These recycling statistics get pushed to a dedicated dashboard on the iPad screen, giving users clear, real-time visibility into local conservation data and their disposal impact."}
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        "paragraphs": [
          [
            { "text": "The deployment of the automated waste system hit strong benchmarks for interactive environmental education and hardware performance. The machine learning model showed dynamic object recognition across four distinct waste streams, with measurably increasing accuracy through its user-driven data-capture loop. The hardware held up well, managing complex sensor telemetry, error handling, and debouncing logic smoothly during live public sorting trials. By publicly showing the real-time totals of recycled materials, the system also drove consumer engagement, building a measurable sense of shared ecological responsibility and setting up a scalable framework for sustainable public infrastructure."}
        ]
      ]
      }
    ]
  };

const koipond: Project = {
  id: "08",
  title: "Koi Pond: A Generative Fresco",
  role: "Creative Coder — Generative Art & Interaction Design",
  description:
    "A living koi pond rendered entirely in p5.js — wandering fish, drifting lily pads, and hovering cherubs sit inside a gilded Renaissance frame, its ripples and scales shimmering with iridescent, stained-glass color.",
  tags: ["#GENERATIVE ART", "#CREATIVE CODING", "#P5.JS"],
  accent: "blue",
  sketch: "koipond",
  image: "/koipond.png",
  sections:
  [
      {
        "label": "The Problem",
        "paragraphs": [
          [
            { "text": "A still image can only hint at what makes a pond feel alive, the way koi drift and turn, the way light keeps rearranging itself across the surface. I wanted a piece that " },
            { "text": "never repeats itself and never needs a viewer to press play.", "bold": true }
          ],
          [
            { "text": "I was drawn to spaces where architecture and shifting light collide, vaulted rooms where sun through stained glass fractures into moving color across the floor. That same restless, prismatic quality felt like the right language for water, never one fixed palette, always catching a different hue." },
          ],
          [
            { "text": "The challenge was combining that organic, unrepeatable motion with something classical and " },
            { "text": "deliberately composed, like a framed fresco rather than a screensaver.", "bold": true }
          ]
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text": "The piece is built as a small ecosystem of autonomous agents, " },
            { "text": "fish, lily pads, and cherubs, each governed by simple rules that compound into believable, unscripted behavior.", "bold": true },
            { "text": " Fish wander by continuously nudging their own heading rather than following a path, so no two loops of the sketch ever swim the same route twice." }
          ],
          [
            { "text": "Rather than treat color as fixed, hue itself became a variable that drifts over time, on fish scales, lily rims, and ripple rings, so the water always looks like it's catching " },
            { "text": "light from somewhere just out of frame.", "bold": true }
          ],
          [
            { "text": "A gilded Renaissance-style frame and vignette hold the scene together, keeping the generative chaos inside a deliberately composed, painterly boundary rather than letting it sprawl edge to edge." }
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "Built in " },
            { "text": "p5.js instance mode", "bold": true },
            { "text": ", mounted inside a React component so the sketch lives directly on this page rather than as an embedded iframe. Four lightweight object types drive the scene, " },
            { "text": "Fish, LilyPad, Cherub, and Ripple.", "bold": true }
          ],
          [
            { "text": "Fish perturb their own steering angle every frame and occasionally spawn a " },
            { "text": "Ripple", "bold": true },
            { "text": " as they move, which expands and fades until it clears itself from the array, a self-managing particle system with no fixed lifetime." }
          ],
          [
            { "text": "The iridescent aesthetic comes from " },
            { "text": "HSB color cycling composited with additive blending.", "bold": true },
            { "text": " Ripple strokes, a sheen along each fish's spine, and thin rim highlights on the lily pads all cycle hue against the frame count, while soft rotated light beams drift across the whole canvas, echoing the way stained-glass light fractures into color on a reflective floor." }
          ],
          [
            { "text": "The canvas itself is fully responsive. A " },
            { "text": "ResizeObserver", "bold": true },
            { "text": " keeps it locked to its container's aspect ratio, and a click anywhere on the pond drops a feed point that steers nearby fish toward the cursor before fading out." }
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        "paragraphs": [
          [
            { "text": "The result is a " },
            { "text": "self-sustaining ambient artwork.", "bold": true },
            { "text": " It runs indefinitely with no input required, never exactly repeating a frame, while staying visually anchored by its classical frame and vignette." }
          ],
          [
            { "text": "Clicking anywhere on the pond now " },
            { "text": "drops a feed point that draws the fish in.", "bold": true },
            { "text": " They steer toward the cursor, quicken their pace, then jostle and mill around it before the feeding cue fades and they drift back to their ordinary wandering." }
          ],
          [
            { "text": "Planned next steps include " },
            { "text": "ambient generative audio tied to ripple events, and a day/night lighting cycle that shifts the iridescent palette over time.", "bold": true }
          ]
        ]
      }
    ]
};

const projectionmapping: Project = {
    id: "09",
    title: "Jugalbandi: A Dancer's Duet with Light and Sound",
    role: "Developer",
    description:
      "Real-Time Dance-to-Audio-Visual System coming soon...",
    tags: ["#TOUCH DESIGNER", "#GENERATIVE AUDIO", "#CREATIVE CODING"],
    accent: "green",
    image: "/diltohpagal.png",
    video: "",
    sections: 
    [
        {
          "label": "The Problem",
          "paragraphs": [
            [
              { "text": "In most tech-infused dance shows, the digital elements feel like an afterthought. The dancer simply moves to a recorded track while cool visuals play passively in the background, and there's no real connection between the performer and the room. Think back to the iconic scene in Dil To Pagal Hai, where Madhuri Dixit dances furiously while Shah Rukh Khan matches her beat for beat on the drums. It's a thrilling, high-energy conversation where two artists challenge and answer each other in real time. Right now, a solo dancer can't easily recreate that magical dialogue with technology. Existing systems don't let a dancer's physical body actually create the music and the visuals on the fly, missing the chance to turn the stage into a living partner that talks back to them."}
            ]
          ]
        },
        {
          "label": "Approach",
          "paragraphs": [
            [
              { "text": "This project redefines the relationship between performer and multimedia by positioning the dancer as both the choreographer and the musician. Using machine learning based computer vision, the system translates the dancer's kinetic energy, velocity, and spatial positioning into real-time trigger data. Instead of dancing to a track, the performer's sharp gestures mimic the strike of a drum, and fluid movements stretch or shape melodic notes, recreating a self-contained digital jugalbandi. This synthesized audio is then instantly fed back into a generative visual system, making the stage an active participant that answers the dancer's movements in a continuous, expressive conversation."}
            ]
          ]
        },
        {
          "label": "System Design",
          "paragraphs": [
            [
              { "text": "The architecture splits into three connected pipelines, motion capture, audio synthesis, and visual rendering. A high-definition camera or depth sensor feeds live video into a computer vision model (such as MediaPipe or MoveNet via TouchDesigner), pulling out real-time skeletal coordinates and optical flow data. This kinetic data gets translated into MIDI and OSC (Open Sound Control) signals, which route into an audio engine (like Ableton Live or Max/MSP) to trigger percussive samples and shape synthesizers based on movement velocity. Finally, both the raw motion channels and the resulting audio frequencies get processed natively within TouchDesigner using Python and GPU-accelerated particle systems, rendering striking, audio-reactive visual projections that adapt to the performance with minimal overhead."}
            ]
          ]
        },
        {
          "label": "Results / Metrics",
          "paragraphs": [
            [
              { "text": "Success here comes down to responsiveness, technical stability, and artistic fidelity. Built for live performance, the entire pipeline runs with an ultra-low latency of under 30 milliseconds, so the visual and auditory feedback feels instantaneous to both the performer and the audience. The system stays at a consistent 60 frames per second (FPS) at 4K resolution, avoiding any immersion-breaking stutter. On the qualitative side, testing with trained dancers looks at creative agency, how intuitively performers can control the rhythm and interpret the visual echo, successfully reviving the classic, improvisational magic of a live jugalbandi in a digital medium."}
            ]
          ]
        }
      ]
    };

// const projectionmapping2: Project = {
//   id: "09",
//   title: "Under the Sea",
//   role: "Developer",
//   description:
//   "Seaweed animation created in TouchDesigner, inspired by Newnome Beauton.",
//   tags: ["#TOUCH DESIGNER", "#GENERATIVE MEDIA", "#CREATIVE CODING"],
//   accent: "green",
//   image: "/seaweed.png",
//   video: "/seaweed.mov",
//   sections:[]
//   };



export const projects: Project[] = [sankranti, customtool, aromasense, paintbynumbers, musicalpainting, wirebend,trashcan, koipond, projectionmapping];
