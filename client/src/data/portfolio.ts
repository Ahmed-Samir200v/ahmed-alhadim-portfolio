export const personalInfo = {
  name: "Ahmed Alhadim",
  title: "Senior 3D Artist | Game & XR Specialist",
  tagline: "Crafting Immersive Worlds & Production-Ready Assets for AAA & XR Studios",
  bio: "With over six years of specialized experience in game development and extended reality, I transform creative visions into interactive experiences that push the boundaries of immersive media. My expertise spans the complete 3D art pipeline—from concept to optimization—delivering photorealistic environments, characters, and assets optimized for real-time rendering in Unity and Unreal Engine. I have led cross-functional teams in developing educational VR simulations, architectural visualizations, and game-ready assets across multiple XR platforms including Meta Quest, HoloLens 2, and Magic Leap 2. My work combines technical precision with artistic vision, ensuring every asset meets both performance requirements and visual excellence standards expected in AAA production pipelines.",
  yearsExperience: "6+",
  projectsCompleted: "25+",
  email: "ahmedsemoo82@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-alhadim-01a59b157",
  youtube: "http://www.youtube.com/@ahmedsamir-kn6vd/videos",
};

export const skills = {
  "3D Art & Modeling": [
    "3D Modeling & Sculpting",
    "PBR Texturing & Materials",
    "UV Mapping & Unwrapping",
    "Lighting & Rendering",
    "Character & Environment Design",
    "Prop & Asset Creation",
  ],
  "Game Engines & Real-Time": [
    "Unity Engine",
    "Unreal Engine",
    "Real-Time Optimization",
    "Performance Profiling",
    "Shader Development",
    "Level Design",
  ],
  "XR Development": [
    "VR Development (Meta Quest 2)",
    "AR Applications",
    "MR Experiences (HoloLens 2, Magic Leap 2)",
    "Spatial UI/UX Design",
    "Cross-Platform XR Optimization",
    "Interactive Simulations",
  ],
  "Software & Tools": [
    "3ds Max",
    "ZBrush",
    "Substance Painter",
    "Photoshop",
    "Blender",
    "Maya",
  ],
};

export const experience = [
  {
    title: "Team Leader 3D/XR Artist",
    company: "Ekson",
    period: "Recent",
    responsibilities: [
      "Led a team of 3D artists and XR designers in delivering high-quality assets and immersive experiences within tight deadlines, resulting in a 50% increase in overall productivity.",
      "Designed and modeled diverse environment and asset libraries, establishing standardized workflows that improved quality, efficiency, and reduced production costs.",
      "Collaborated with 20+ industry professionals across departments, conducting progress reports and presenting results to executives while ensuring alignment with client requirements.",
      "Developed UI/UX assets, app icons, and menu screens that enhanced user engagement and streamlined navigation across multiple XR applications.",
    ],
  },
  {
    title: "3D Artist and XR Designer",
    company: "IT-Corner Dubai",
    period: "Previous",
    responsibilities: [
      "Developed optimized 3D models and environments for seamless integration across Quest 2, Magic Leap, HTC, and HoloLens 2 platforms, prioritizing performance without compromising visual fidelity.",
      "Implemented advanced PBR texturing workflows using Substance Painter, creating photorealistic assets that elevated user engagement and satisfaction.",
      "Collaborated with cross-functional teams to translate conceptual visions into engaging XR experiences, incorporating stakeholder feedback through iterative design processes.",
      "Stayed current with industry trends and emerging XR technologies, proactively integrating new techniques to refine skills and streamline production workflows.",
    ],
  },
  {
    title: "3D Artist and XR Designer",
    company: "SPARK td (US)",
    period: "Previous",
    responsibilities: [
      "Supervised all design projects from ideation to delivery, ensuring brand consistency across marketing initiatives and maintaining high-quality standards.",
      "Designed 3D assets for XR projects and web applications, optimizing for performance across multiple platforms while maintaining visual excellence.",
      "Mentored junior designers, reviewing work to ensure quality standards and fostering a collaborative environment that encouraged continuous learning.",
      "Maintained close communication with marketing and design teams to ensure project deadlines were met and deliverables exceeded client expectations.",
    ],
  },
  {
    title: "3D Artist and Creative Designer",
    company: "Harmony International Schools",
    period: "Previous",
    responsibilities: [
      "Designed immersive 3D educational environments for VR, including chemistry and physics labs used as STEM education simulations, improving learning outcomes through interactive experiences.",
      "Customized 3D assets and environments for compatibility with VR and AR technologies, ensuring optimal performance on educational platforms.",
      "Created high-quality theatrical scenography as screened backgrounds for drama productions, collaborating with technical and creative directors within strict budgets and deadlines.",
      "Gained extensive experience with Unity, Unreal Engine, and Substance, delivering expertise in performance optimization and visual quality.",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  category: "VR" | "AR" | "MR" | "Game" | "Visualization" | "Web3D";
  platform: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  gallery?: string[];
  fullDescription?: string;
  technicalDetails?: string[];
  challenges?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: "vr-chemistry-lab",
    title: "VR Chemistry Laboratory",
    category: "VR",
    platform: "Meta Quest 2",
    description: "An immersive educational VR simulation designed for STEM learning, featuring a fully interactive chemistry laboratory environment. This project showcases advanced PBR materials, realistic lighting, and intuitive spatial UI design. Students can conduct virtual experiments with holographic molecular structures, periodic table interactions, and real-time chemical reactions. Optimized for standalone VR with efficient LOD systems and performance profiling to maintain 72fps on Meta Quest 2 hardware.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/SymxxZFFWf71UsoZLrpb7i/sandbox/6ZDY6fmItm5Py3Bf5JeV5o-img-2_1770730622000_na1fn_dnItbGFiLXNob3djYXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU3lteHhaRkZXZjcxVXNvWkxycGI3aS9zYW5kYm94LzZaRFk2Zm1JdG01UHkzQmY1SmVWNW8taW1nLTJfMTc3MDczMDYyMjAwMF9uYTFmbl9kbkl0YkdGaUxYTm9iM2RqWVhObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Pw-j8f-6rWB9TD6~r-YWxYC5Xp3o9kH0AlUn7VL3ofMPqEmD6nr4-kMsgLz9sF2riaGvkGopG6q5G8JS5F~2w5IdRexTvLZopOUissoO2HVHNuD73ibZwaU5GinW707OQvjNsHYdxE3U3cd-82jISizMnBZPh6vxXqAuGQVZ-LrfLrDL3Nw6qfQOsd19RbOPhYrAipDVvY-veoML~QPhh05dYhYpeiZYRjxcMTxqryIxz717p6WZ0gDq13f4KmO4f9aYqWrEs0pR0VmXUMe-S-WovSxglM13CFEXa69FzpcElou14tCtsB7jLsaZ-WOfEkM32ZO8W0RXT2vAunTQbA__",
    tags: ["Unity", "VR", "Educational", "PBR", "Optimization"],
    featured: true,
    gallery: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/MKWeYzveiqcpMMZf.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/cwYOhplIHjrYzOkU.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/pAureCPEiVjkMFTI.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/KdZOWagLpFbKyiMC.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/jGbIQSkMuTBLCKoJ.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/uFxoMobkEkHeYXbZ.png",
    ],
    fullDescription: "This comprehensive VR chemistry laboratory was designed as an educational tool for STEM learning, providing students with a safe, interactive environment to conduct virtual experiments. The project showcases advanced real-time rendering techniques, including physically-based materials for realistic chemical reactions, dynamic lighting systems, and optimized performance for standalone VR hardware. Students can interact with holographic molecular structures, explore the periodic table in 3D space, and conduct experiments with real-time visual feedback.",
    technicalDetails: [
      "Built in Unity 2021 LTS with Universal Render Pipeline (URP)",
      "Custom shader development for liquid simulations and chemical reactions",
      "Optimized to maintain 72fps on Meta Quest 2 hardware",
      "Implemented LOD (Level of Detail) systems for complex molecular models",
      "Spatial audio integration for immersive laboratory ambience",
      "Hand tracking support for natural interaction with lab equipment",
    ],
    challenges: "The main challenge was balancing visual fidelity with performance constraints on mobile VR hardware. Complex molecular structures and real-time particle effects required careful optimization through custom shaders, aggressive LOD systems, and efficient draw call batching. Additionally, designing intuitive VR interactions for precise laboratory procedures required extensive user testing and iteration.",
    outcome: "Successfully deployed in multiple educational institutions as a STEM learning tool. Students reported increased engagement and better understanding of chemical concepts through hands-on VR interaction. The project demonstrated the viability of standalone VR for educational applications without requiring expensive physical laboratory equipment.",
  },
  {
    id: "biology-lab-vr",
    title: "VR Biology Laboratory",
    category: "VR",
    platform: "Meta Quest 2 & WebXR",
    description: "A cross-platform educational VR experience bringing biology education to life through immersive 3D environments. Features detailed anatomical models, microscope simulations, and interactive cellular biology demonstrations. Built with Unity and optimized for both standalone VR and WebXR deployment, allowing access from VR headsets and web browsers. Implements efficient texture streaming and dynamic asset loading to support complex biological models while maintaining performance across platforms.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80",
    tags: ["Unity", "VR", "WebXR", "Cross-Platform", "Educational"],
    featured: true,
  },
  {
    id: "library-virtual-tour",
    title: "State Library Virtual Tour",
    category: "VR",
    platform: "Meta Quest 2",
    description: "A cinematic virtual tour of a state library, showcasing architectural visualization excellence and cultural heritage preservation through XR technology. This project features photogrammetry-enhanced assets, volumetric lighting, and spatial audio design to create an authentic sense of presence. Users can explore grand reading halls, rare book collections, and architectural details with interactive information hotspots. Demonstrates expertise in large-scale environment optimization and narrative-driven VR experiences.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/SymxxZFFWf71UsoZLrpb7i/sandbox/6ZDY6fmItm5Py3Bf5JeV5o-img-4_1770730625000_na1fn_YXJjaGl0ZWN0dXJhbC12ci1zcGFjZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU3lteHhaRkZXZjcxVXNvWkxycGI3aS9zYW5kYm94LzZaRFk2Zm1JdG01UHkzQmY1SmVWNW8taW1nLTRfMTc3MDczMDYyNTAwMF9uYTFmbl9ZWEpqYUdsMFpXTjBkWEpoYkMxMmNpMXpjR0ZqWlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UWya5PVw3I1C3NYRjIvxLujUCulUNetLrqILZUQabZqRlz0o6QP7cNY7soqJnTKXZTo7nnx0EzLEXy9Ff~934bhVGFT9cSx-j36sxfIayxuZ7f-UPAdVulYgUMv5gun-MkXVPG~Z0v3goQy1uyJBOoaZb4MJ1I1mN~mWbAHD5DuiUgwWATBw5wA9HnulWzEVOC8qpEiAtM94lnzR-SPxGF2t7pHqIzolwgQ2~036~LTukOsteVpzBFr57vM0W4HGgsQ2ffZJEfM1gZs6nbhStsBMjDzvKrEp60Ge3PgGZ9qixiKIQ3~tstL6MlEJVFJPRem1csyojPM8DU6YJn6VWw__",
    tags: ["Unity", "VR", "Architectural Viz", "Cultural Heritage"],
    featured: true,
  },
  {
    id: "survival-training-vr",
    title: "VR Survival Training Simulation",
    category: "VR",
    platform: "Meta Quest 2",
    description: "An interactive training simulation designed for emergency preparedness and survival skills education. Features realistic environmental hazards, decision-making scenarios, and procedural training modules. Built with Unity's physics system and custom interaction frameworks to create believable survival scenarios. Demonstrates expertise in game mechanics design, AI behavior systems, and immersive storytelling for training applications.",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1200&q=80",
    tags: ["Unity", "VR", "Training", "Simulation", "Game Mechanics"],
    featured: false,
  },
  {
    id: "nakhil-castle-vr",
    title: "Nakhil Castle VR Experience",
    category: "VR",
    platform: "VR Platforms",
    description: "A cultural heritage VR experience showcasing Omani architecture and historical preservation. This project combines photogrammetry, traditional 3D modeling, and historical research to recreate the castle's grandeur in virtual reality. Features detailed Middle Eastern architectural elements, authentic material work, and atmospheric lighting that captures the essence of the location. Optimized for smooth navigation through large-scale environments while maintaining visual fidelity.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1200&q=80",
    tags: ["VR", "Cultural Heritage", "Photogrammetry", "Architecture"],
    featured: false,
  },
  {
    id: "game-asset-library",
    title: "Production-Ready Game Assets",
    category: "Game",
    platform: "Multi-Platform",
    description: "A comprehensive library of game-ready 3D assets demonstrating mastery of the complete asset creation pipeline. Includes characters, weapons, props, and environmental pieces optimized for real-time rendering. Each asset features clean topology, efficient UV layouts, and PBR materials created in Substance Painter. Showcases understanding of polygon budgets, texture optimization, and LOD systems essential for AAA game production.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/SymxxZFFWf71UsoZLrpb7i/sandbox/6ZDY6fmItm5Py3Bf5JeV5o-img-5_1770730629000_na1fn_Z2FtZS1hc3NldC1jb2xsZWN0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU3lteHhaRkZXZjcxVXNvWkxycGI3aS9zYW5kYm94LzZaRFk2Zm1JdG01UHkzQmY1SmVWNW8taW1nLTVfMTc3MDczMDYyOTAwMF9uYTFmbl9aMkZ0WlMxaGMzTmxkQzFqYjJ4c1pXTjBhVzl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rsapTYXqGWwptK8sGhvSa267L7JKHmajqanGMfi5L4S7WCNeR5KpGRJRA4s14aAMzcuizO3BsDx~1QIYJRtOHE0re2PKxzZJNgK5W5oRsv1PODLH-~pe-t0hML6N3LL22SpVqV3QrEFSOBCykiQ~W-wVlPC0u-y1TL-Dgv~Pp9GwPra1GQAg58yGc44FUP3yFx7uQk66l8L1I2Zu0JH1Z8ce3Dw8oQ0cjfBf-WV0FFSvIyntWtESGTqSSqnNCTpby1bte5Ydn46Vc1iufIrMxpvstjy2mW9Bqoc8UTjWoRiTq9C58Xo9X74PjORDdmGQ8UkTZhwngkGfuVv29Eb1Ow__",
    tags: ["3ds Max", "Substance Painter", "PBR", "Game Assets", "Optimization"],
    featured: true,
  },
  {
    id: "architectural-visualization",
    title: "Architectural Visualization Suite",
    category: "Visualization",
    platform: "Rendering & VR",
    description: "High-end architectural visualizations for real estate and design presentations. Features photorealistic exterior and interior renders with advanced lighting setups, material work, and atmospheric effects. Demonstrates proficiency in V-Ray, Corona, and real-time rendering techniques. Projects range from residential to commercial spaces, showcasing versatility in architectural styles and rendering approaches.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    tags: ["3ds Max", "V-Ray", "Architectural Viz", "Photorealism"],
    featured: false,
  },
  {
    id: "product-ar-models",
    title: "AR Product Visualization",
    category: "AR",
    platform: "Mobile AR",
    description: "Interactive AR product models designed for e-commerce and marketing applications. Features include real-time material customization, scale adjustment, and environmental lighting adaptation. Optimized for mobile AR platforms with efficient polygon counts and texture compression. Demonstrates understanding of AR-specific challenges including surface detection, lighting estimation, and performance constraints on mobile devices.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    tags: ["AR", "Product Design", "Mobile", "Unity"],
    featured: false,
  },
  {
    id: "hololens-mr-app",
    title: "HoloLens 2 MR Application",
    category: "MR",
    platform: "HoloLens 2",
    description: "A mixed reality application for HoloLens 2 demonstrating spatial computing and enterprise MR solutions. Features hand tracking interactions, spatial mapping integration, and holographic UI elements. Built with MRTK (Mixed Reality Toolkit) and optimized for HoloLens 2's unique capabilities including eye tracking and voice commands. Showcases expertise in designing for mixed reality where digital content coexists with the physical world.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=80",
    tags: ["HoloLens 2", "MR", "MRTK", "Enterprise", "Spatial Computing"],
    featured: false,
  },
  {
    id: "magic-leap-experience",
    title: "Magic Leap 2 Experience",
    category: "MR",
    platform: "Magic Leap 2",
    description: "An immersive mixed reality experience designed for Magic Leap 2, showcasing advanced spatial computing and enterprise visualization. Features include persistent spatial anchors, multi-user collaboration, and context-aware digital overlays. Optimized for Magic Leap 2's high-resolution displays and field of view. Demonstrates expertise in cutting-edge MR development and understanding of enterprise XR applications.",
    image: "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=1200&q=80",
    tags: ["Magic Leap 2", "MR", "Enterprise", "Collaboration"],
    featured: false,
  },
  {
    id: "vr-classroom",
    title: "VR Classroom Environment",
    category: "VR",
    platform: "Meta Quest 2",
    description: "An interactive virtual classroom designed for remote education and training. Features spatial audio for realistic voice propagation, interactive whiteboards, 3D model demonstrations, and multi-user support. Built with Unity and Photon networking for real-time collaboration. Demonstrates expertise in social VR applications and educational technology.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
    tags: ["VR", "Education", "Networking", "Unity", "Social VR"],
    featured: false,
  },
  {
    id: "web3d-portfolio",
    title: "Interactive Web3D Experiences",
    category: "Web3D",
    platform: "WebGL",
    description: "Browser-based 3D experiences built with Three.js and WebGL, bringing interactive 3D content to the web without requiring downloads or installations. Features include 360° product viewers, interactive architectural walkthroughs, and portfolio showcases. Optimized for web performance with progressive loading, texture compression, and responsive design. Demonstrates versatility in delivering 3D content across platforms.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&q=80",
    tags: ["WebGL", "Three.js", "Web3D", "Interactive"],
    featured: false,
  },
];
