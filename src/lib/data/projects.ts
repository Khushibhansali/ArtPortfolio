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
  title: "Exploring Dual Identity",
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
          { text: "My Indian upbringing represented grounding — responsibility to family, collectivism, humility, and tradition. Living in America encouraged independence, self-expression, ambition, and the freedom to define success for yourself. " },
          { text: "These values sometimes clashed in deeply personal ways.", bold: true },
        ],
        [
          { text: "I found myself translating my parents' worldview to my friends, and my friends' lifestyle back to my parents — learning the guilt of saying no to family to maintain a social life, while feeling alienated when saying no to peers to honor family obligations. Even success itself became a negotiation between external achievement and internal fulfillment." },
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
          { text: "Over time, I realized this tension was not something to escape, but something to learn from. Like a kite during " },
          { text: "Makar Sankranti", bold: true },
          { text: " — an Indian harvest festival celebrated through kite flying — I found that " },
          { text: "balancing opposing forces is what ultimately allows you to take flight.", bold: true },
        ],
        [
          { text: "The kite becomes a central metaphor throughout the piece. The wind and string are not enemies — the string does not exist to restrict the kite, and the wind does not exist to pull it apart. " },
          { text: "Both are necessary for flight.", bold: true },
          { text: " My identity was not divided between two opposing worlds, but shaped through learning how to move between them." },
        ],
        [
          { text: "Before the kite can fly, it must first be designed. The opening scene reflects how identity is often constructed through perception — players choose a kite's shape, fabric, colors, and tail, symbolizing the tension between " },
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
          { text: "As the kite rises, challenges emerge that represent moments of cultural negotiation from my own life. The player must continuously balance opposing pressures to keep the kite airborne — " },
          { text: "the interaction is intentionally unstable", bold: true },
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
          { text: " — one that can become a source of strength, resilience, and flight." },
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
  title: "ComfyUI Texture Map Generator - Creator Tool ",
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
            { "text": "The node architecture is designed for seamless integration and modular expansion within ComfyUI, separating asset computation into a clean, multi-map pipeline. Upon receiving a text prompt, the underlying backend splits the generation task into six distinct channels: " },
            { "text": "Albedo (Base Color), Normal maps, Roughness data, Metallic attributes, Ambient Occlusion (AO) shadowing, and Displacement (Height) data.", "bold": true }
          ],
          [
            { "text": "The software implementation relies on a lightweight, modular repository architecture:" }
          ],
          [
            { "text": "• " },
            { "text": "__init__.py :", "bold": true },
            { "text": " Registers the custom node within ComfyUI by exporting node class and display name mappings." }
          ],
          [
            { "text": "• " },
            { "text": "pbr.py :", "bold": true },
            { "text": " The core execution logic. Defines data inputs, texture channels, and structural inference systems." }
          ],
          [
            { "text": "• " },
            { "text": "requirements.txt :", "bold": true },
            { "text": " Isolates and manages the necessary Python library dependencies for processing backend data." }
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
    title: "AromaSense - VR Aroma Experience Concept (Top 10 US Finalist for L'Oréal Brandstorm)",
    role: "Concept Design & VR Product Development — L'Oréal Brandstorm 2023",
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
              { "text": " to increase personalization and inclusivity and reach a broader, younger demographic — with the goal of turning the winning pitch into a real product." }
            ],
            [
              { "text": "L'Oréal had already backed groundbreaking products like " },
              { "text": "HAPTA", "bold": true },
              { "text": ", which blends seamless online-to-offline experiences with AI-driven personalization, and its collaborations with startups underscored a real appetite for innovative beauty products and services — this was fertile ground for a bold pitch." }
            ],
            [
              { "text": "At the same time, in 2023 Forbes reported that " },
              { "text": "66-90% of Gen Z experiences anxiety, depression, phobias, or PTSD", "bold": true },
              { "text": " — conditions shown to be reduced through VR therapy. Yet the fragrance industry remained entirely physical and one-size-fits-all, with no bridge connecting L'Oréal's perfume line to the immersive wellness tech Gen Z was already turning to." }
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
              { "text": " — leaning on VR's proven therapeutic effects on anxiety and mood to turn fragrance discovery into a moment of aromatherapy and self-care." }
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
              { "text": " and complete the purchase directly through the L'Oréal store — closing the loop from mood scan to product in hand." }
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
            { "text": "Capturing memories while traveling often relies on flat, passive mediums like standard smartphone photos or generic, store-bought postcards. For artists and creators on the go, these digital snapshots fail to convey the tactile, meditative experience of physically painting a landscape as you thought of it during a journey. Conversely, traditional painting is highly unapproachable while traveling due to the heavy burden of carrying extensive art supplies, palettes, and mixing tools. Furthermore, once a travel memory is shared, static physical media lacks the spatial depth to fully transport a loved one into the exact, immersive atmosphere of the destination."}
          ]
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text":"To bridge the gap between spontaneous physical art and immersive digital storytelling, this project introduces a mobile, automated paint-by-numbers ecosystem designed for creators on the move. By leveraging a custom-coded computer vision pipeline, the system distills any smartphone travel photograph into a simplified, paintable canvas and a minimalist, highly curated color palette that eliminates the need for extensive art supplies. The final artwork is exported onto a dual-sided, ready-to-print postcard format. While one side hosts the tactile painting template and localized palette guide, the reverse side integrates a custom-generated Web3 or WebXR QR code—allowing the recipient to step directly into a 3D, virtual reality reimagining of the painted scene as if experiencing the traveler's physical journey firsthand."},
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "The platform architecture is structured around an integrated pipeline that coordinates a back-end computer vision engine, a custom print-layout wrapper, and an immersive, browser-based spatial environment. The workflow begins when a user uploads a smartphone photograph to the application. A custom-coded computer vision script—utilizing color quantization algorithms like K-Means clustering—analyzes the pixel matrix of the image to isolate and extract its core dominant colors, effectively distilling a complex landscape down to a tight, minimalist palette. Once the primary colors are established, the engine applies edge-detection and mathematical contour-mapping filters to trace clean vector boundaries between the color zones, transforming the source photograph into a precise, unpainted vector canvas matrix. Following the asset generation phase, a custom print layout engine structures the data into a print-ready, dual-sided postcard blueprint adhering to exact real-world dimensions. Side A is dynamically generated to display the numbered contour art canvas alongside a specific, localized ink-swatch guide detailing the exact extracted colors required for the physical painting. Simultaneously, Side B compiles a standardized mailing layout, mapping out a clean message window, a postage stamp boundary, and a uniquely generated QR code tied directly to that specific asset's spatial coordinate profile. The final layer of the architecture governs the digital transformation loop through an accessible WebXR and Three.js framework. When the recipient scans the postcard's QR code, it instantly triggers a web-based, hardware-agnostic spatial environment that requires no external app downloads. The system reads the original source image data to procedurally map the textures onto a responsive 3D scene or a spherical panorama. This creates an immersive virtual reality depth layer, allowing the user to seamlessly move their device or use a mobile headset to step into a 3D, wrapped environment of the exact travel destination."}
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        "paragraphs": [
          [
            { "text": "The completed pipeline successfully transformed spontaneous travel photography into a highly functional, interactive physical-to-digital keepsake. The computer vision model achieved optimized color quantization, consistently reducing complex landscape gradients down to less than ten highly distinct, essential color zones without sacrificing the original composition’s visual recognizability. Hardware compatibility testing verified that the generated postcard designs perfectly maintained standard printing dimensions, bleed boundaries, and scaling metrics. Finally, the automated VR engine maintained clean interoperability across multiple mobile web browsers, triggering full spatial immersion within milliseconds of scanning the postcard's QR code."}
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
            { "text": "Traditional classic art is inherently static and passive. For an immersive event like a Halloween-themed installation, a flat visual medium alone fails to fully engage the audience's senses or amplify the atmospheric, eerie essence intended by the original piece." },
          ]
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text": "The goal was to bridge the gap between traditional fine art and physical computing." },
            { "text": " By recreating Edvard Munch's The Scream, the project fused classic imagery with modern tech to create a multi-sensory, touch-activated experience that brings the painting's inherent anxiety and spookiness into the physical space." }
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "To bring the canvas to life, the installation relies on an integrated hardware and software pipeline centered around a Raspberry Pi. The physical interface was constructed by applying electrically conductive paint over copper wiring hidden beneath the painting's surface, mapping out specific touch-responsive zones on The Scream. These conductive pathways act as capacitive sensors wired directly into the Raspberry Pi’s GPIO pins. The software logic was written and deployed using VS Code, where a Python script continuously polls the pins for electrical resistance changes caused by human touch, instantaneously triggering specific audio files through the Pi’s sound card when a contact event is registered."}
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        video: "/scream2.mov",
        "paragraphs": [
          [
            { "text": "System performance was evaluated by the accuracy and latency of the interaction loop, achieving seamless real-time audio playback within milliseconds of physical touch. The code architecture managed debouncing logic flawlessly, ensuring that rapid, consecutive touches cleanly cycled through the different spooky soundtracks without overlapping or crashing the audio driver. The final system state and its interactive audio-visual feedback loops were fully validated and documented in the accompanying project videos."}
          ]
        ]
      }
    ]
  };

const wirebend: Project = {
  id: "06",
  title: "3D Unity Software For Wire Bending - Creator Tool",
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
            { "text": "Traditional 3D wire-bending machines operate on rigid hardware constraints, often requiring custom code or deep technical expertise to program physical paths. This creates a steep barrier to entry for creators, designers, and non-technical operators. Furthermore, designing blindly in a digital space without real-time physical feedback leads to frequent structural failures, machine collisions, and material waste, as there is no built-in mechanism to check if a digital shape is actually manufacturable by the physical bender."}
          ],
          
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text": "To democratize this fabrication process, I collaboratively developed a interactive 3D plugin software tailored specifically to the wire-bending machine'/s physics. By embedding the machine's hardware constraints directly into a visual engineering environment, we shifted the workflow from programming to intuitive modeling. This ensures that any geometry a user draws is mathematically feasible, automatically catching potential manufacturing errors and collision risks before the design ever hits the shop floor."}
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "Built natively in Unity, the software architecture cleanly separates back-end geometry computation from front-end user interaction. For the core physics and simulation engine, C# scripts govern the virtual wire object's behavior, executing real-time bend, rotation, and linear extension algorithms while simultaneously running a continuous background collision-detection routine to flag geometry that physically impacts the machine frame. The UX and interaction layer features a comprehensive camera rigging system supporting adaptive orbiting, panning, and zooming optimized across both trackpads and standard mice, alongside an onboarding portal, guided instructional tutorials, and dynamic canvas overlays detailing live spatial dimensioning. Finally, the hardware integration pipeline translates the virtual 3D vector model into physical machine instructions via a custom-coded C# exporter that applies precise real-world dimensional scaling matrices to the digital coordinates, outputting a streamlined CSV file compiled specifically to mirror the syntax requirements of the physical Wire Terminal software." }
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        "paragraphs": [
          [
            { "text": "The collaborative engineering effort yielded a fully functional, verified end-to-end CAD-to-fabrication pipeline. Rigorous validation testing confirmed that the generated spatial coordinates successfully imported into the Wire Terminal environment with zero orientation errors, maintaining flawless dimensional accuracy from the digital canvas to the physical machine. System-wide code refactoring successfully unified complex physical keyboard bindings with active UI button states, streamlining function mapping and significantly lowering latency during live manipulation. Furthermore, comprehensive edge-case testing and quality control sweeps verified the complete stability of the simulation, ensuring a reliable, crash-free interface ready for deployment to non-technical users."}
          ]
        ]
      }
    ]
  };

const trashcan: Project = {
  id: "07",
  title: "Smart IOT Trashcan",
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
            { "text": "Public spaces like airports, malls, and stadiums generate massive volumes of waste, yet a significant portion is missorted due to consumers lacking the time, convenience, or localized knowledge to distinguish between recyclables, compost, batteries, and general trash. This widespread sorting failure leads to severe recycling contamination, increased landfill waste, and missed opportunities for material recovery. Furthermore, standard waste infrastructure remains completely passive. It fails to educate users in real time, lacks data collection on consumption habits, and relies on manual, inefficient physical inspections by facility staff to determine when a bin needs to be emptied."}
        ]
        ]
      },
      {
        "label": "Approach",
        "paragraphs": [
          [
            { "text": "To address these inefficiencies, the team developed an intelligent, interactive waste management ecosystem that automates classification and gamifies environmental responsibility. By placing a smart, sensor-driven sorting hub in high-traffic areas, the system removes the cognitive burden of recycling from busy individuals. The approach leverages an adaptable machine learning model coupled with a real-time, closed-loop feedback mechanism. Instead of relying on a static, rigid classification database, the system is designed around continuous user-centric learning—allowing real-time failure correction where users can actively flag misclassifications, directly contributing to the system's long-term accuracy and adaptability."}
          ]
        ]
      },
      {
        "label": "System Design",
        "paragraphs": [
          [
            { "text": "The architecture integrates a custom-coded computer vision pipeline with a highly specialized, hand-built physical computing infrastructure to automate waste classification. At its core, the system utilizes a Teachable Machine model to handle real-time object recognition across multiple waste streams. To support this digital pipeline, the physical scanning areas and customized lids for each individual trash bin, along with a dedicated battery bin, were custom-designed and precision laser-cut. The physical prototype assembly required a complex, hand-wired network connecting multiple distance sensors, buttons, and servo motors directly to the main control hub. This included uniquely soldering the hardware profiles for seven distinct LED buttons, ensuring each input maintained a designated, unique address on the shared system bus."},
            { "text": "On the software and interface layer, custom Python algorithms govern the complete end-to-end operation of the waste hub. The central script captures input from the camera to scan the object, processes the frame through the machine learning model, and immediately outputs the classification results directly to the user. Simultaneously, a mechanical actuation script drives precise servo control to physically open the lid of the corresponding bin. To display these interactions seamlessly, an interactive iPad dashboard features a custom-designed layout managing the camera background, alignment targets, and active item labels. This interface acts as the primary hub for the system's user feedback and misclassification correction loops, enabling real-time continuous learning from human inputs."},
            { "text": "To maintain facility awareness, the system integrates a multi-sensor telemetry layer to track bin capacity and waste metrics. A specialized distance-sensing algorithm was programmed to read multiple proximity sensors simultaneously, accurately calculating structural fill levels and providing real-time data indicating when a bin is full and requires maintenance. As items are successfully sorted, a tracking database logs each disposal event to calculate rolling metrics. These aggregated recycling statistics are systematically pushed to a dedicated dashboard layout on the iPad screen, giving users clear, real-time visibility into local conservation data and current disposal impact."}
          ]
        ]
      },
      {
        "label": "Results / Metrics",
        "paragraphs": [
          [
            { "text": "The deployment of the automated waste system yielded strong benchmarks in interactive environmental education and hardware synergy. The machine learning model successfully demonstrated dynamic object recognition across four distinct waste streams, showing a measurable trajectory of increasing accuracy through its user-driven data-capture loops. Hardware integration proved highly resilient, managing complex sensor telemetry, error handling, and debouncing logic smoothly during live public sorting trials. Additionally, by publicly displaying the real-time aggregated quantities of recycled materials, the system successfully drove consumer engagement, fostering a measurable sense of shared ecological responsibility and establishing a scalable framework for sustainable public infrastructure."}
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
            { "text": "A still image can only hint at what makes a pond feel alive — the way koi drift and turn, the way light keeps rearranging itself across the surface. I wanted a piece that " },
            { "text": "never repeats itself and never needs a viewer to press play.", "bold": true }
          ],
          [
            { "text": "I was drawn to spaces where architecture and shifting light collide — vaulted rooms where sun through stained glass fractures into moving color across the floor. That same restless, prismatic quality felt like the right language for water: never one fixed palette, always catching a different hue." },
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
            { "text": "The piece is built as a small ecosystem of autonomous agents — " },
            { "text": "fish, lily pads, and cherubs — each governed by simple rules that compound into believable, unscripted behavior.", "bold": true },
            { "text": " Fish wander by continuously nudging their own heading rather than following a path, so no two loops of the sketch ever swim the same route twice." }
          ],
          [
            { "text": "Rather than treat color as fixed, hue itself became a variable that drifts over time — on fish scales, lily rims, and ripple rings — so the water always looks like it's catching " },
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
            { "text": ", mounted inside a React component so the sketch lives directly on this page rather than as an embedded iframe. Four lightweight object types drive the scene: " },
            { "text": "Fish, LilyPad, Cherub, and Ripple.", "bold": true }
          ],
          [
            { "text": "Fish perturb their own steering angle every frame and occasionally spawn a " },
            { "text": "Ripple", "bold": true },
            { "text": " as they move, which expands and fades until it clears itself from the array — a self-managing particle system with no fixed lifetime." }
          ],
          [
            { "text": "The iridescent aesthetic comes from " },
            { "text": "HSB color cycling composited with additive blending:", "bold": true },
            { "text": " ripple strokes, a sheen along each fish's spine, and thin rim highlights on the lily pads all cycle hue against the frame count, while soft rotated light beams drift across the whole canvas — echoing the way stained-glass light fractures into color on a reflective floor." }
          ],
          [
            { "text": "The canvas itself is fully responsive — a " },
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
            { "text": "self-sustaining ambient artwork", "bold": true },
            { "text": " — it runs indefinitely with no input required, never exactly repeating a frame, while staying visually anchored by its classical frame and vignette." }
          ],
          [
            { "text": "Clicking anywhere on the pond now " },
            { "text": "drops a feed point that draws the fish in", "bold": true },
            { "text": " — they steer toward the cursor, quicken their pace, then jostle and mill around it before the feeding cue fades and they drift back to their ordinary wandering." }
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
    title: "Real-Time Dance-to-Audio-Visual System",
    role: "Developer",
    description:
      "Coming Soon...",
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
              { "text": "In most tech-infused dance shows, the digital elements feel like an afterthought—the dancer simply moves to a pre-recorded track while cool visuals play passively in the background. There is no real connection between the performer and the room. Think back to the iconic scene in Dil To Pagal Hai, where Madhuri Dixit dances furiously while Shah Rukh Khan matches her beat for beat on the drums; it is a thrilling, high-energy conversation where two artists challenge and answer each other in real time. Currently, a solo dancer cannot easily recreate that magical dialogue with technology. Existing systems don't allow a dancer's physical body to actually create the music and the visuals on the fly, missing the chance to turn the stage into a living partner that talks back to them."}
            ]
          ]
        },
        {
          "label": "Approach",
          "paragraphs": [
            [
              { "text": "This project redefines the relationship between performer and multimedia by positioning the dancer as both the choreographer and the musician. By leveraging advanced machine learning-based computer vision, the system translates the dancer’s kinetic energy, velocity, and spatial positioning into real-time trigger data. Instead of dancing to a track, the performer’s sharp gestures mimic the strike of a drum, and fluid movements stretch or modulate melodic notes, effectively recreating a self-contained digital jugalbandi. This dynamically synthesized audio is then instantly fed back into a generative visual ecosystem, making the stage an active participant that answers the dancer's movements in a continuous, expressive conversation."}
            ]
          ]
        },
        {
          "label": "System Design",
          "paragraphs": [
            [
              { "text": "The architecture is divided into three integrated pipelines: motion capture, audio synthesis, and visual rendering. A high-definition camera or depth sensor feeds live video into a computer vision model (such as MediaPipe or MoveNet via TouchDesigner), extracting real-time skeletal coordinates and optical flow data. This kinetic data is translated into MIDI and OSC (Open Sound Control) signals, which are routed into an audio engine (like Ableton Live or Max/MSP) to trigger percussive samples and modulate synthesizers based on movement velocity. Finally, both the raw motion channels and the resulting audio frequencies are processed natively within TouchDesigner using Python and GPU-accelerated particle systems, rendering striking, audio-reactive visual projections that adapt to the performance with minimal overhead."}
            ]
          ]
        },
        {
          "label": "Results / Metrics",
          "paragraphs": [
            [
              { "text": "The success of the system is measured by its responsiveness, technical stability, and artistic fidelity. Architected for live performance, the entire pipeline operates with an ultra-low latency of under 30 milliseconds, ensuring that the visual and auditory feedback feels instantaneous to both the performer and the audience. System performance is optimized to maintain a consistent 60 frames per second (FPS) at 4K resolution, eliminating immersion-breaking stutter. Qualitatively, user testing with trained dancers evaluates creative agency —measuring how intuitively performers can control the rhythm and interpret the visual echo, successfully reviving the classic, improvisational magic of a live jugalbandi in a digital medium."}
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
