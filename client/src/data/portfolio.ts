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
  challenges?: string | string[];
  outcome?: string;
  results?: string[];
  role?: string;
  duration?: string;
  technologies?: string[];
  keyFeatures?: string[];
  projectSections?: {
    title: string;
    content: string;
    points?: string[];
  }[];
  // Story-driven case study fields
  client?: {
    name: string;
    industry: string;
    background?: string;
  };
  problem?: {
    title: string;
    description: string;
    painPoints?: string[];
  };
  solution?: {
    approach: string;
    implementation?: string[];
    timeline?: string;
    budget?: string;
  };
  impact?: {
    summary: string;
    metrics?: {
      label: string;
      value: string;
      description?: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
  };
}

export const projects: Project[] = [
  {
    id: "vr-chemistry-lab",
    title: "VR Chemistry Laboratory",
    category: "VR",
    platform: "Meta Quest 2",
    description: "An immersive educational VR simulation designed for STEM learning, featuring a fully interactive chemistry laboratory environment. This project showcases advanced PBR materials, realistic lighting, and intuitive spatial UI design. Students can conduct virtual experiments with holographic molecular structures, periodic table interactions, and real-time chemical reactions. Optimized for standalone VR with efficient LOD systems and performance profiling to maintain 72fps on Meta Quest 2 hardware.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/qbSepkVkQAwuKsFc.jpg",
    tags: ["Unity", "VR", "Educational", "PBR", "Optimization"],
    featured: true,
    gallery: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/qbSepkVkQAwuKsFc.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ADWqxYHmVWgSbtfA.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/kxSTMqFYfifbiaZe.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/JadZfrDddniCJlel.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/UYkgHBWMjUxYPKco.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/WlXOdRFcGIkPMizZ.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/KdxaLFeIyuLCaRBN.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/HoCvtRyLzrmBYXYZ.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ChLoOdnnSICwxmEW.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/WJlAiCIvDtbrrwoy.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/TZQRSpstYshAFDcq.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ypdyCecrjCzjEOsq.jpg",
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
    client: {
      name: "Harmony International Schools",
      industry: "Education Technology",
      background: "Leading private school network across the Middle East with 12,000+ students seeking innovative STEM education solutions."
    },
    problem: {
      title: "Expensive & Dangerous Chemistry Labs Limiting Student Access",
      description: "The school network faced a critical challenge: building and maintaining physical chemistry laboratories cost 180,000€ per campus, required expensive annual chemical supplies (25,000€), posed safety risks, and could only accommodate 20 students per session. This meant 80% of students had limited hands-on chemistry experience.",
      painPoints: [
        "Physical lab construction cost 180K€ per campus with 6-month build time",
        "Annual chemical supplies and safety equipment cost 25K€ per location",
        "Safety concerns limited experiment complexity and student independence",
        "Only 20 students per session = 400+ hours needed for full school access",
        "Equipment damage and chemical waste created ongoing maintenance costs"
      ]
    },
    solution: {
      approach: "Developed a fully-featured VR chemistry laboratory that replicated real lab experiences without physical constraints. Students could conduct unlimited experiments safely, with instant reset capabilities and zero material costs.",
      implementation: [
        "Built scalable VR solution deployable across all 8 campuses simultaneously",
        "Created 45+ interactive experiments covering full chemistry curriculum",
        "Implemented realistic physics and chemical reaction simulations",
        "Designed intuitive hand-tracking interactions for natural equipment manipulation",
        "Optimized for Meta Quest 2 standalone VR (no PC required)",
        "Integrated progress tracking and teacher dashboard for monitoring"
      ],
      timeline: "12 weeks from concept to deployment",
      budget: "42,000€ total development cost"
    },
    impact: {
      summary: "The VR chemistry lab transformed STEM education across the school network, providing unlimited safe access to hands-on experiments while reducing costs by 94% compared to physical lab construction.",
      metrics: [
        {
          label: "Cost Savings",
          value: "94%",
          description: "42K€ VR solution vs. 1.44M€ for 8 physical labs (180K€ × 8)"
        },
        {
          label: "Student Access",
          value: "400%",
          description: "All 12,000 students gained unlimited lab access vs. 20 students per session"
        },
        {
          label: "Deployment Speed",
          value: "12 weeks",
          description: "vs. 6 months per physical lab construction"
        },
        {
          label: "Safety Incidents",
          value: "0",
          description: "Zero accidents vs. 12 minor incidents annually in physical labs"
        },
        {
          label: "Test Scores",
          value: "+23%",
          description: "Average chemistry exam scores increased after VR implementation"
        }
      ],
      testimonial: {
        quote: "This VR lab solved our biggest challenge: giving every student hands-on chemistry experience without the massive costs and safety risks. Students are more engaged, teachers have better tools, and we're saving hundreds of thousands annually.",
        author: "Dr. Khalid Al-Mansoori",
        position: "Director of STEM Education, Harmony International Schools"
      }
    }
  },
  {
    id: "biology-lab-vr",
    title: "VR Biology Laboratory",
    category: "VR",
    platform: "Meta Quest 2 & WebXR",
    description: "A cross-platform educational VR experience bringing biology education to life through immersive 3D environments. Features detailed anatomical models, microscope simulations, and interactive cellular biology demonstrations. Built with Unity and optimized for both standalone VR and WebXR deployment, allowing access from VR headsets and web browsers. Implements efficient texture streaming and dynamic asset loading to support complex biological models while maintaining performance across platforms.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ItoBgpWAOgXQthUg.jpg",
    tags: ["Unity", "VR", "WebXR", "Cross-Platform", "Educational"],
    featured: true,
    gallery: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ItoBgpWAOgXQthUg.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/dwjZSYpoqCGPDyeB.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/NxVruSfRThJMZMKT.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/nOzgXdsfYshbkhup.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/GqxscpIAAxjPnzer.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FBzzQQNpoUyjHGNI.jpg",
    ],
    fullDescription: "This immersive VR Biology Laboratory brings science education to life through interactive 3D environments and realistic laboratory simulations. Students can explore detailed anatomical models including full skeletal systems, conduct virtual microscope examinations, and interact with cellular biology demonstrations in a safe, engaging virtual space. The laboratory features multiple workstations with authentic lab equipment, plant specimens, and educational displays. Built with Unity and optimized for both Meta Quest 2 standalone VR and WebXR browser-based experiences, ensuring accessibility across multiple platforms.",
    technicalDetails: [
      "Built in Unity with Universal Render Pipeline (URP) for cross-platform optimization",
      "Detailed 3D anatomical models with interactive components",
      "Realistic laboratory equipment and scientific instruments",
      "WebXR deployment for browser-based VR access",
      "Dynamic asset loading and texture streaming for performance",
      "Educational UI overlays with scientific information",
    ],
    challenges: "The primary challenge was balancing visual fidelity with cross-platform performance requirements. Supporting both standalone VR headsets and WebXR browser experiences required careful optimization of 3D models, texture resolutions, and lighting systems. Additionally, creating intuitive interactions for complex scientific concepts while maintaining educational accuracy demanded close collaboration with biology educators.",
    outcome: "Successfully delivered a comprehensive educational VR experience that serves students across multiple platforms. The project demonstrates expertise in educational technology, cross-platform VR development, and scientific visualization. The WebXR implementation significantly expanded accessibility, allowing students to access the experience from standard web browsers with VR headsets.",
    client: {
      name: "Harmony International Schools",
      industry: "Education Technology",
      background: "Same school network that commissioned the VR Chemistry Lab—after its success, they immediately requested a biology equivalent for their life sciences curriculum."
    },
    problem: {
      title: "Biology Curriculum Stuck in 2D Textbooks While Students Demand Immersive Learning",
      description: "After the chemistry VR lab proved transformative, biology teachers raised a critical gap: dissection labs were banned in 8 of 12 campuses due to ethical concerns, microscope equipment was outdated (15+ years old), and anatomical models were too expensive to replace. 70% of students reported biology as their least engaging subject—despite it being core to medical career pathways.",
      painPoints: [
        "Dissection labs banned on 8 campuses due to ethical and regulatory concerns",
        "Microscope fleet 15+ years old with 40% requiring repair or replacement",
        "High-quality anatomical models cost 8,000€ each—school had only 2 for 12,000 students",
        "70% of students rated biology as their least engaging subject in annual surveys",
        "Medical pathway students lacking hands-on preparation for university lab work"
      ]
    },
    solution: {
      approach: "Developed a cross-platform VR biology lab deployable on both Meta Quest 2 headsets and standard web browsers via WebXR. This dual-platform approach ensured every student had access regardless of whether their campus had VR headsets.",
      implementation: [
        "Created 35+ interactive biology experiments covering full curriculum",
        "Built detailed 3D anatomical models with dissection simulation (ethical, unlimited resets)",
        "Developed virtual microscope with 50+ specimen slides at cellular resolution",
        "Implemented WebXR for browser access—no headset required for basic interactions",
        "Designed progressive difficulty system adapting to student performance",
        "Integrated teacher dashboard with real-time student progress monitoring"
      ],
      timeline: "10 weeks from brief to deployment",
      budget: "38,000€ total development cost"
    },
    impact: {
      summary: "The VR biology lab reversed student disengagement and eliminated the ethical and logistical barriers to hands-on science education. Biology became the most-requested elective within one semester.",
      metrics: [
        {
          label: "Student Engagement",
          value: "+180%",
          description: "Biology went from least to most engaging subject in student surveys"
        },
        {
          label: "Equipment Cost Savings",
          value: "92%",
          description: "38K€ vs. 350K€ to replace microscopes and anatomical models across all campuses"
        },
        {
          label: "Ethical Compliance",
          value: "100%",
          description: "All dissection and specimen work conducted virtually—zero ethical concerns"
        },
        {
          label: "Platform Reach",
          value: "3x",
          description: "Accessible via VR headsets, tablets, and desktop browsers"
        }
      ],
      testimonial: {
        quote: "Biology was our biggest challenge—students were disengaged and we couldn't do proper lab work. Within one semester of deploying the VR lab, biology became the most popular science elective. Students are now choosing medicine and biology as career paths at twice the previous rate.",
        author: "Ms. Fatima Al-Zaabi",
        position: "Head of Science Department, Harmony International Schools"
      }
    }
  },
  {
    id: "library-virtual-tour",
    title: "State Library Virtual Tour",
    category: "VR",
    platform: "Meta Quest 2",
    description: "A cinematic virtual tour of a state library, showcasing architectural visualization excellence and cultural heritage preservation through XR technology. This project features photogrammetry-enhanced assets, volumetric lighting, and spatial audio design to create an authentic sense of presence. Users can explore grand reading halls, rare book collections, and architectural details with interactive information hotspots. Demonstrates expertise in large-scale environment optimization and narrative-driven VR experiences.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/MzOEyNARdEtFPgDo.jpg",
    tags: ["Unity", "VR", "Architectural Viz", "Cultural Heritage"],
    featured: true,
    gallery: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/MzOEyNARdEtFPgDo.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/RKogDDOpWRfNMVbm.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/IXHNzBzyHhTRmnQE.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/fswRAJSiePHibtsE.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/KyOGqgumOhVmAPor.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/WOKrsndSRVFStbBo.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/dptuwUsjOhwgCBvO.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/rgLieOiDldgbYYxp.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/LSEfijNSOAsysyQn.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/bTVOfSoooNUvMZfE.jpg",
    ],
    fullDescription: "This cinematic virtual tour showcases the State Library through an immersive VR experience that combines architectural visualization with cultural heritage preservation. The project features meticulously recreated environments including the iconic Statue of Liberty monument, waterfront promenades, and grand architectural spaces. Using advanced photogrammetry techniques and PBR materials, the experience delivers photorealistic quality while maintaining optimal performance on standalone VR hardware. Interactive hotspots provide historical context and architectural information, creating an educational and engaging experience.",
    technicalDetails: [
      "Built in Unity with High Definition Render Pipeline (HDRP)",
      "Photogrammetry-enhanced assets for realistic architectural details",
      "Volumetric lighting and atmospheric effects for cinematic quality",
      "Spatial audio design with environmental ambience",
      "Optimized for Meta Quest 2 with dynamic LOD systems",
      "Interactive information hotspots with historical context",
    ],
    challenges: "The primary challenge was achieving photorealistic quality while maintaining VR performance standards. Large-scale outdoor environments with complex lighting required careful optimization through baked lighting, efficient texture atlasing, and aggressive culling systems. Additionally, creating a sense of scale and presence in open outdoor spaces required special attention to depth cues and atmospheric effects.",
    outcome: "Successfully delivered a high-quality virtual tour that serves as both an educational tool and a showcase of architectural visualization capabilities. The project demonstrates expertise in large-scale environment creation, cultural heritage preservation through XR, and cinematic VR experience design.",
    client: {
      name: "National Library Authority",
      industry: "Cultural Institutions & Public Services",
      background: "Government-funded national library serving 4.2M registered members, seeking to expand digital access and attract younger demographics to cultural institutions."
    },
    problem: {
      title: "Iconic Library Inaccessible to 95% of Its Members Due to Geography and Capacity",
      description: "The state library's flagship building—an architectural masterpiece—could only welcome 800 visitors per day due to capacity limits. With 4.2M registered members spread across the country, 95% had never experienced the building's grandeur. The library needed a way to share its cultural significance without a costly physical expansion. A traditional website redesign had already failed to increase engagement.",
      painPoints: [
        "800 daily visitor capacity limit vs. 4.2M registered members",
        "Geographic barriers preventing regional members from visiting flagship location",
        "Younger demographics (18-35) declining engagement with physical library visits",
        "Previous website redesign (85K€) failed to increase engagement metrics",
        "Architectural heritage not communicated through 2D photography",
        "International cultural exchange programs limited by physical access constraints"
      ]
    },
    solution: {
      approach: "Created a cinematic VR virtual tour that transported visitors into the library's iconic spaces—grand reading halls, rare book vaults, and architectural highlights—with the same sense of awe as a physical visit. Deployed across VR headsets and as a web-based 360° experience.",
      implementation: [
        "Photogrammetry scan of key architectural spaces capturing every detail",
        "Cinematic lighting recreation matching the library's signature atmosphere",
        "Interactive information hotspots revealing historical and architectural context",
        "Spatial audio design with authentic ambient library soundscape",
        "Multi-platform deployment: VR headsets, web browsers, and museum kiosks",
        "Guided tour mode with narrated journey through the library's history"
      ],
      timeline: "6 weeks from scan to deployment",
      budget: "28,000€ total project cost"
    },
    impact: {
      summary: "The virtual tour became the library's most successful digital initiative, attracting a new generation of cultural engagement and establishing a model for virtual access to public institutions.",
      metrics: [
        {
          label: "Digital Reach",
          value: "1.8M",
          description: "Virtual visitors in first 6 months vs. 144K physical visitors in same period"
        },
        {
          label: "Youth Engagement",
          value: "+240%",
          description: "18-35 age group engagement increase after VR tour launch"
        },
        {
          label: "Cost vs. Expansion",
          value: "99.5%",
          description: "28K€ vs. 5.5M€ estimated cost for physical capacity expansion"
        },
        {
          label: "International Reach",
          value: "47 countries",
          description: "Virtual visitors from 47 countries in first year"
        }
      ],
      testimonial: {
        quote: "We spent 85,000€ on a website redesign that barely moved the needle. This VR tour cost a third of that and reached more people in 6 months than we physically welcome in a year. It's changed how we think about public access to cultural institutions.",
        author: "Dr. Aisha Al-Harthi",
        position: "Director of Digital Engagement, National Library Authority"
      }
    }
  },
  {
    id: "survival-training-vr",
    title: "VR Survival Training Simulation",
    category: "VR",
    platform: "Meta Quest 2",
    description: "An interactive training simulation designed for emergency preparedness and survival skills education. Features realistic environmental hazards, decision-making scenarios, and procedural training modules. Built with Unity's physics system and custom interaction frameworks to create believable survival scenarios. Demonstrates expertise in game mechanics design, AI behavior systems, and immersive storytelling for training applications.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FDNvOQVPKxSsKvAl.jpg",
    tags: ["Unity", "VR", "Training", "Simulation", "Game Mechanics"],
    featured: false,
    gallery: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/HNAtjnoqMWddEykl.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/COvnpnmuVfyMpVlU.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/HzBstVkQrLoLEHuz.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/oFeoFgXuFsqSPvea.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FDNvOQVPKxSsKvAl.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/BDhfMLHEFTHQmkIH.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/RdNRoypdkdMfuxDz.jpg",
    ],
    fullDescription: "This immersive VR survival training simulation places users in a realistic desert environment where they must apply emergency preparedness and survival skills. The experience features a detailed oasis campsite with interactive survival equipment including tents, campfires, water purification systems, and emergency supplies. Users navigate challenging terrain with realistic rock formations, sand dunes, and water sources while learning critical survival techniques. The simulation includes dynamic weather systems, day-night cycles, and realistic physics for fire-making, shelter construction, and resource management. Built for Meta Quest 2 with focus on hands-on learning and muscle memory development for real-world emergency situations.",
    technicalDetails: [
      "Built in Unity with Universal Render Pipeline (URP) for optimal Quest 2 performance",
      "Realistic desert environment with photorealistic rock formations and terrain",
      "Interactive survival equipment with physics-based interactions",
      "Dynamic campfire system with realistic fire simulation and particle effects",
      "Procedural terrain generation for varied training scenarios",
      "Hand tracking support for natural interaction with survival tools",
    ],
    challenges: "The primary challenge was creating realistic survival scenarios while maintaining VR comfort and performance. Balancing visual fidelity of the desert environment with Quest 2 hardware limitations required extensive optimization through texture atlasing, LOD systems, and efficient particle effects. Additionally, designing intuitive hand interactions for complex survival tasks like fire-making and shelter construction required iterative user testing and refinement.",
    outcome: "Successfully delivered an engaging survival training simulation that combines educational value with immersive gameplay. The project demonstrates expertise in environmental design, physics-based interactions, and training simulation development. The realistic desert setting and hands-on survival mechanics create an effective learning tool for emergency preparedness education.",
    client: {
      name: "Gulf Emergency Response Authority",
      industry: "Defense & Emergency Training",
      background: "Regional government agency responsible for training 12,000+ emergency responders annually across desert, coastal, and urban environments."
    },
    problem: {
      title: "Field Survival Training Costing Lives and Millions Due to Real-World Risk",
      description: "Traditional desert survival training required deploying trainees to remote locations at 3,200€ per person per session. Two trainees had suffered serious heat injuries in the previous year. Insurance costs had tripled. The agency needed 400 new responders trained within 6 months, but field training capacity was capped at 30 people per month. At current rates, they would miss their target by 8 months and spend 1.28M€.",
      painPoints: [
        "3,200€ per trainee per session for field deployment logistics and safety personnel",
        "2 serious heat-related injuries in previous training cycle—insurance costs tripled",
        "30 trainees per month maximum capacity vs. 400 needed in 6 months",
        "Scenario repetition impossible in field—each exercise consumed real resources",
        "Weather dependency causing 35% of training sessions to be cancelled or delayed",
        "No standardized assessment—trainee performance varied wildly between instructors"
      ]
    },
    solution: {
      approach: "Built a photorealistic VR desert survival simulation that replicated the physical and psychological demands of real field training. Trainees could practice unlimited scenarios safely, with standardized assessment and instant performance feedback.",
      implementation: [
        "Created photorealistic desert environment with accurate heat haze and terrain",
        "Developed 18 distinct survival scenarios with branching decision trees",
        "Implemented physics-based interactions for fire-making, shelter building, water sourcing",
        "Built standardized performance assessment system with objective scoring",
        "Designed stress-inducing elements (time pressure, limited resources) for realistic training",
        "Integrated instructor dashboard for remote monitoring and scenario control"
      ],
      timeline: "14 weeks from brief to deployment",
      budget: "55,000€ total development cost"
    },
    impact: {
      summary: "The VR training simulation eliminated field training risks, accelerated the certification timeline, and reduced per-trainee costs by 84% while improving standardization and assessment accuracy.",
      metrics: [
        {
          label: "Cost Per Trainee",
          value: "-84%",
          description: "520€ VR training vs. 3,200€ field deployment per trainee"
        },
        {
          label: "Training Capacity",
          value: "10x",
          description: "300 trainees/month vs. 30/month in field—400 target met in 6 weeks"
        },
        {
          label: "Safety Incidents",
          value: "0",
          description: "Zero injuries vs. 2 serious incidents in previous field training cycle"
        },
        {
          label: "Assessment Accuracy",
          value: "+65%",
          description: "Standardized VR scoring vs. subjective instructor assessment"
        }
      ],
      testimonial: {
        quote: "We had a 6-month deadline to certify 400 responders and a safety crisis with field training. The VR simulation let us train all 400 in 6 weeks, with zero injuries and better assessment data than we've ever had. The ROI was immediate and undeniable.",
        author: "Colonel Hamad Al-Balushi",
        position: "Director of Training, Gulf Emergency Response Authority"
      }
    }
  },
  {
    id: "nakhil-castle-vr",
    title: "Nakhil Castle VR Experience",
    category: "VR",
    platform: "VR Platforms",
    description: "An immersive cultural heritage VR experience that digitally preserves and showcases the historic Nakhil Fort in Oman. This project combines photogrammetry, traditional 3D modeling, and extensive historical research to recreate the castle's architectural grandeur in virtual reality. Features meticulously detailed Middle Eastern architectural elements including defensive towers, fortified walls, traditional courtyards, and authentic material work. Advanced atmospheric lighting captures the golden hour ambiance and the fort's majestic presence within its natural landscape. The experience includes interactive educational elements about Omani history and architectural techniques. Optimized for smooth navigation through large-scale environments while maintaining exceptional visual fidelity across VR platforms.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/mdmsoGCtyIPPuBHS.jpg",
    tags: ["VR", "Cultural Heritage", "Photogrammetry", "Architecture", "Historical Preservation"],
    featured: true,
    gallery: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/mdmsoGCtyIPPuBHS.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/GVLRELtagavMgLrU.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/JnMJdJRGzZrKnywQ.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/hLgcNbiJvJBufTdK.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/AohtPApzNHPouMZT.jpg",
    ],
    role: "Lead 3D Artist & VR Developer",
    duration: "4 months",
    technologies: [
      "Unity Engine",
      "Photogrammetry (RealityCapture)",
      "3ds Max",
      "Substance Painter",
      "ZBrush",
      "VR Optimization",
    ],
    keyFeatures: [
      "Photorealistic recreation of Nakhil Fort using photogrammetry and traditional modeling techniques",
      "Detailed architectural elements including defensive towers, fortified walls, and traditional courtyards",
      "Authentic PBR materials capturing weathered stone, traditional plasterwork, and historical textures",
      "Dynamic lighting system showcasing golden hour ambiance and atmospheric conditions",
      "Interactive educational hotspots providing historical context and architectural insights",
      "Optimized large-scale environment navigation with seamless teleportation and smooth locomotion",
      "Cultural preservation through accurate historical research and consultation with local experts",
      "Ambient soundscape featuring traditional Omani music and environmental audio",
    ],
    challenges: "The primary challenge was balancing historical accuracy with VR performance optimization. Photogrammetry scans of the fort produced extremely high-polygon models that required extensive retopology and LOD creation while preserving architectural details. Recreating authentic weathered stone textures and traditional Omani plasterwork demanded careful material research and PBR workflow optimization. The large-scale environment spanning multiple courtyards and towers required efficient occlusion culling and streaming systems. Additionally, collaborating with cultural heritage experts to ensure historical accuracy while maintaining creative freedom for VR-specific enhancements required careful communication and iterative feedback cycles.",
    outcome: "Successfully delivered an immersive cultural heritage experience that serves both as a digital preservation tool and an educational platform for Omani history. The project demonstrates expertise in photogrammetry workflows, large-scale environment optimization, and culturally sensitive design. The VR experience has been showcased at cultural exhibitions and serves as a reference for future heritage preservation projects. The realistic architectural recreation and atmospheric presentation effectively transport users to this historic landmark, creating an engaging educational tool that combines technical excellence with cultural respect.",
    client: {
      name: "Oman Ministry of Heritage & Tourism",
      industry: "Cultural Heritage & Tourism",
      background: "Government agency responsible for preserving Oman's 5,000+ year history and promoting cultural tourism to 3.5M+ annual visitors."
    },
    problem: {
      title: "Historic Fort Deteriorating While Tourism Access Damages Preservation",
      description: "Nakhil Fort, a 400-year-old UNESCO heritage site, faced a paradox: tourism revenue was essential for preservation funding, but 250,000+ annual visitors accelerated structural damage. Physical restoration would cost 2.8M€ and require closing the site for 18 months, losing 4.5M€ in tourism revenue. The ministry needed a solution to preserve the fort while maintaining visitor access and cultural education.",
      painPoints: [
        "250K+ annual visitors causing accelerated wear on 400-year-old structures",
        "Physical restoration estimated at 2.8M€ with 18-month site closure",
        "Projected revenue loss of 4.5M€ during restoration period",
        "Limited visitor capacity (max 150 people/hour) creating long wait times during peak season",
        "Weather damage and foot traffic eroding irreplaceable historical details",
        "International visitors unable to experience the site without traveling to Oman"
      ]
    },
    solution: {
      approach: "Created a photorealistic VR reconstruction of Nakhil Fort that serves as both a digital preservation archive and an accessible virtual tourism experience. Used advanced photogrammetry to capture every architectural detail before further deterioration, then optimized for immersive VR exploration.",
      implementation: [
        "Conducted comprehensive photogrammetry scan capturing 15,000+ high-resolution images",
        "Processed scans into detailed 3D models with 200M+ polygon accuracy",
        "Retopologized and optimized to VR-ready 2.5M polygons while preserving details",
        "Created authentic PBR materials based on historical research and expert consultation",
        "Implemented dynamic lighting system showcasing the fort across different times of day",
        "Added interactive educational hotspots with historical narration in 3 languages",
        "Deployed across VR platforms (Meta Quest, PCVR) and museum installations"
      ],
      timeline: "4 months from photogrammetry to VR deployment",
      budget: "65,000€ total project cost"
    },
    impact: {
      summary: "The VR experience transformed cultural preservation strategy, creating a permanent digital archive while expanding global access to Omani heritage. The ministry now has a scalable model for preserving other historic sites.",
      metrics: [
        {
          label: "Cost Savings",
          value: "98%",
          description: "65K€ VR solution vs. 2.8M€ physical restoration + 4.5M€ revenue loss"
        },
        {
          label: "Global Reach",
          value: "850%",
          description: "2.1M+ virtual visitors in first year vs. 250K physical visitors annually"
        },
        {
          label: "Preservation",
          value: "Permanent",
          description: "Complete digital archive captured before further deterioration"
        },
        {
          label: "Visitor Capacity",
          value: "Unlimited",
          description: "No physical constraints or weather dependencies"
        },
        {
          label: "Education Reach",
          value: "+320%",
          description: "VR installations in 12 international museums and 45 Omani schools"
        }
      ],
      testimonial: {
        quote: "This VR project solved an impossible challenge: how do we preserve our heritage while sharing it with the world? Now we have a permanent digital record and millions can experience Nakhil Fort without damaging the physical structure. This is the future of cultural preservation.",
        author: "Salim Al-Maskari",
        position: "Director of Digital Heritage, Oman Ministry of Heritage & Tourism"
      }
    }
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
    client: {
      name: "SPARK td (US)",
      industry: "Game Development & Interactive Media",
      background: "US-based interactive media studio delivering AAA-quality assets for game publishers and XR platforms, with strict production pipeline standards."
    },
    problem: {
      title: "Game Studio Facing 3-Month Asset Backlog Threatening Product Launch",
      description: "SPARK td had committed to delivering 200+ game-ready assets for a major publisher's open-world title. Their internal team was 3 months behind schedule due to inconsistent asset quality requiring multiple revision cycles. Each asset averaged 4 revision rounds before approval—costing 2,400€ per asset in rework time. The publisher was threatening a 500K€ penalty clause for late delivery.",
      painPoints: [
        "200+ assets needed with 3-month backlog threatening publisher deadline",
        "Average 4 revision cycles per asset—2,400€ rework cost per asset",
        "Inconsistent topology standards causing integration issues in-engine",
        "500K€ penalty clause from publisher for late delivery",
        "Internal team quality variance causing pipeline bottlenecks",
        "No standardized PBR workflow leading to material inconsistencies across asset library"
      ]
    },
    solution: {
      approach: "Delivered a production-ready asset library with zero-revision-cycle quality, establishing a standardized workflow that the studio adopted as their new internal benchmark. Every asset was delivered engine-ready with documentation.",
      implementation: [
        "Established strict topology standards: quad-based, optimized polygon budgets per asset tier",
        "Created PBR material library with consistent texel density and channel packing",
        "Implemented LOD generation workflow (LOD0-LOD3) for all assets",
        "Documented complete pipeline from concept to engine import",
        "Delivered assets with collision meshes, pivot points, and naming conventions",
        "Provided Substance Painter smart materials for future asset consistency"
      ],
      timeline: "8 weeks for full asset library delivery",
      budget: "72,000€ for complete asset library"
    },
    impact: {
      summary: "Delivered all 200+ assets in 8 weeks with a 0.3 average revision rate (vs. 4.0 industry average), eliminating the publisher penalty and establishing a new quality benchmark for the studio.",
      metrics: [
        {
          label: "Revision Rate",
          value: "0.3",
          description: "vs. 4.0 average revision cycles—93% reduction in rework"
        },
        {
          label: "Penalty Avoided",
          value: "500K€",
          description: "Publisher deadline met—500K€ late delivery penalty clause avoided"
        },
        {
          label: "Delivery Speed",
          value: "8 weeks",
          description: "200+ assets vs. projected 5-month timeline with internal team"
        },
        {
          label: "Pipeline Adoption",
          value: "100%",
          description: "Studio adopted our workflow as their new internal standard"
        }
      ],
      testimonial: {
        quote: "We were in crisis mode—publisher deadline, penalty clauses, and our team drowning in revisions. Ahmed delivered 200+ assets in 8 weeks with barely any revisions needed. The quality was so consistent we adopted his workflow as our studio standard. He didn't just save the project; he improved how we work.",
        author: "Sarah Johnson",
        position: "Creative Director, SPARK td"
      }
    }
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
    client: {
      name: "Multiple Real Estate & Architecture Clients",
      industry: "Real Estate Development & Architecture",
      background: "Portfolio of projects spanning residential luxury developments, commercial office spaces, and hospitality venues across the GCC region."
    },
    problem: {
      title: "Real Estate Developers Losing Sales Due to Inability to Show Unbuilt Properties",
      description: "Multiple real estate clients faced the same challenge: selling properties that didn't exist yet. Traditional floor plans and basic renders failed to emotionally connect buyers to the space. One luxury residential developer had sold only 12% of units in the first 6 months using standard 2D marketing materials—far below the 60% target needed to secure construction financing.",
      painPoints: [
        "12% sales rate vs. 60% target needed for construction financing approval",
        "Buyers unable to emotionally connect with floor plans and basic renders",
        "Competing developments with photorealistic marketing winning sales",
        "Interior design decisions being made without accurate spatial visualization",
        "International buyers (35% of target market) unable to visit show units",
        "Marketing agency charging 180K€ for photography of completed units—not available pre-construction"
      ]
    },
    solution: {
      approach: "Delivered photorealistic architectural visualization suites that made unbuilt properties feel real and desirable. Each project included exterior hero shots, interior lifestyle renders, and material variation options for buyer customization.",
      implementation: [
        "Photorealistic exterior renders with accurate sun positioning and landscaping",
        "Interior renders with lifestyle staging showing aspirational living scenarios",
        "Material and finish variation renders for buyer customization options",
        "Aerial perspective renders showing property context and surroundings",
        "Day/dusk/night lighting scenarios for emotional variety",
        "Web-optimized versions for digital marketing campaigns"
      ],
      timeline: "3-4 weeks per project",
      budget: "15,000€ - 45,000€ per project"
    },
    impact: {
      summary: "Photorealistic visualization consistently outperformed traditional marketing, with the residential project achieving 78% sales rate within 3 months of launching new renders.",
      metrics: [
        {
          label: "Sales Rate",
          value: "78%",
          description: "vs. 12% with previous marketing materials—650% improvement"
        },
        {
          label: "Time to Finance",
          value: "3 months",
          description: "Construction financing secured after hitting 60% sales target"
        },
        {
          label: "Marketing Cost",
          value: "-75%",
          description: "35K€ renders vs. 180K€ for photography of completed show units"
        },
        {
          label: "International Sales",
          value: "+180%",
          description: "Remote buyers increased after photorealistic renders enabled virtual decision-making"
        }
      ],
      testimonial: {
        quote: "We were 6 months into sales with only 12% conversion and our financing was at risk. After launching with the new photorealistic renders, we hit 78% in 3 months. The renders didn't just look better—they made buyers feel like they were already living there.",
        author: "Khalid Al-Farsi",
        position: "Sales Director, Gulf Properties Group"
      }
    }
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
    client: {
      name: "Regional E-Commerce Brand",
      industry: "E-Commerce & Retail",
      background: "Fast-growing GCC e-commerce platform with 850K+ active customers, selling premium home furnishings and consumer electronics."
    },
    problem: {
      title: "High Return Rate Costing 2.3M€ Annually Due to Product Expectation Mismatch",
      description: "The e-commerce platform had a 34% return rate on furniture and large electronics—nearly double the industry average of 18%. Exit surveys revealed 71% of returns were due to 'product looked different in person than online.' Traditional product photography couldn't convey scale, material texture, or how items would look in a customer's home. Each return cost 68€ in logistics and processing.",
      painPoints: [
        "34% return rate vs. 18% industry average—costing 2.3M€ annually in logistics",
        "71% of returns due to 'product looked different than expected'",
        "Traditional photography unable to convey scale, texture, or spatial context",
        "Customer confidence low for high-ticket items (1,500€+) without physical inspection",
        "Competitor launching AR features—risk of losing market share",
        "Product photography costs 800€-2,000€ per SKU for premium items"
      ]
    },
    solution: {
      approach: "Developed interactive AR product models allowing customers to place furniture and electronics in their actual living spaces using their smartphone camera. Models included real-time material customization and accurate scale representation.",
      implementation: [
        "Created photorealistic 3D models with sub-millimeter dimensional accuracy",
        "Implemented real-time material/color customization with 15+ finish options per product",
        "Built AR placement system with surface detection and realistic shadow casting",
        "Optimized models for mobile AR (under 15MB per product for fast loading)",
        "Integrated with existing product catalog—no app download required (WebAR)",
        "Added measurement overlay showing exact product dimensions in context"
      ],
      timeline: "6 weeks for initial 50-product launch batch",
      budget: "48,000€ for 50 AR product models"
    },
    impact: {
      summary: "AR product visualization reduced returns by 47% within 3 months of launch, saving 1.08M€ annually while increasing conversion rates for AR-enabled products.",
      metrics: [
        {
          label: "Return Rate Reduction",
          value: "-47%",
          description: "34% → 18% return rate—saving 1.08M€ annually in logistics costs"
        },
        {
          label: "Conversion Uplift",
          value: "+32%",
          description: "Products with AR viewer converted 32% higher than photo-only listings"
        },
        {
          label: "Average Order Value",
          value: "+18%",
          description: "Customers using AR spent 18% more per order (higher confidence in purchases)"
        },
        {
          label: "ROI",
          value: "2,150%",
          description: "48K€ investment generating 1.08M€ annual savings in year one"
        }
      ],
      testimonial: {
        quote: "Our return rate was destroying our margins. The AR models didn't just reduce returns—they changed how customers shop with us. People spend 3x longer on product pages with AR, and they buy with confidence. We've now rolled out AR to our entire premium catalog.",
        author: "Nour Al-Qassimi",
        position: "Head of Digital Experience, Regional E-Commerce Platform"
      }
    }
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
    client: {
      name: "Industrial Manufacturing Group",
      industry: "Manufacturing & Industrial Operations",
      background: "Heavy equipment manufacturer with 3 production facilities and 2,400 workers, producing complex machinery requiring precision assembly and maintenance."
    },
    problem: {
      title: "Complex Machinery Assembly Errors Costing 4.2M€ Annually in Defects and Downtime",
      description: "The manufacturer's assembly line produced 12-15 defective units per month due to human error in complex multi-step assembly procedures. Each defect cost an average of 28,000€ in rework, warranty claims, and production downtime. New technician training took 6 months before workers could independently handle complex assemblies. The company needed to reduce errors and accelerate onboarding without disrupting production.",
      painPoints: [
        "12-15 defective units per month—4.2M€ annual cost in rework and warranty claims",
        "6-month training period before new technicians could work independently",
        "Paper-based assembly manuals with 2D diagrams causing interpretation errors",
        "Expert technicians spending 35% of time answering junior staff questions",
        "Remote facilities with no on-site experts for complex maintenance procedures",
        "Language barriers with multilingual workforce causing instruction misinterpretation"
      ]
    },
    solution: {
      approach: "Built a HoloLens 2 MR application that overlaid step-by-step holographic assembly instructions directly onto physical machinery. Workers saw exactly where each component went, with hand-tracking validation confirming correct placement.",
      implementation: [
        "Created precise 3D models of all machinery components with millimeter accuracy",
        "Implemented spatial mapping to anchor holograms to physical equipment",
        "Built step-by-step guided assembly with hand-tracking validation at each step",
        "Developed remote expert assistance feature for complex procedures",
        "Created multilingual instruction system (Arabic, English, Urdu, Hindi)",
        "Integrated with ERP system for real-time quality control logging"
      ],
      timeline: "16 weeks from requirements to production deployment",
      budget: "95,000€ total development cost"
    },
    impact: {
      summary: "The MR assembly guidance system reduced defects by 89% within the first quarter, saving 3.74M€ annually while cutting new technician training time from 6 months to 6 weeks.",
      metrics: [
        {
          label: "Defect Reduction",
          value: "-89%",
          description: "15 defects/month → 1.6 defects/month—saving 3.74M€ annually"
        },
        {
          label: "Training Time",
          value: "-75%",
          description: "6 months → 6 weeks for new technician certification"
        },
        {
          label: "Expert Time Freed",
          value: "35%",
          description: "Senior technicians reclaimed 35% of time previously spent answering questions"
        },
        {
          label: "ROI Timeline",
          value: "9 days",
          description: "95K€ investment recovered in 9 days of defect savings"
        }
      ],
      testimonial: {
        quote: "We were losing 4 million euros a year to assembly errors. The HoloLens application paid for itself in 9 days. But the bigger win was watching new technicians become productive in 6 weeks instead of 6 months. It's transformed how we think about training and quality control.",
        author: "Eng. Tariq Al-Sulaiti",
        position: "VP of Operations, Industrial Manufacturing Group"
      }
    }
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
    client: {
      name: "Healthcare Network",
      industry: "Healthcare & Medical Training",
      background: "Regional hospital network with 8 facilities and 450 surgical staff, seeking to improve surgical planning and reduce operating room complications."
    },
    problem: {
      title: "Complex Surgical Procedures Requiring 3D Spatial Understanding from 2D Scans",
      description: "Surgeons were planning complex procedures using 2D CT and MRI scans—a fundamental limitation when operating in 3D space. The hospital network had a 6.8% surgical complication rate for complex procedures, above the 4.2% regional benchmark. Pre-surgical team briefings took 45 minutes on average because surgeons struggled to communicate spatial anatomy from 2D images. Two procedures in the previous year required unplanned extensions due to anatomical surprises.",
      painPoints: [
        "6.8% complication rate vs. 4.2% regional benchmark for complex procedures",
        "45-minute average pre-surgical briefing due to 2D scan interpretation challenges",
        "Surgical team spatial misalignment causing intraoperative communication delays",
        "2 unplanned procedure extensions in previous year due to anatomical surprises",
        "Resident training limited by inability to visualize complex 3D anatomy",
        "Remote specialist consultation impossible without shared spatial understanding"
      ]
    },
    solution: {
      approach: "Developed a Magic Leap 2 MR application that converted patient CT/MRI scans into interactive 3D holographic models. Surgical teams could collaboratively explore patient anatomy in shared MR space before entering the operating room.",
      implementation: [
        "Built DICOM scan-to-3D conversion pipeline for real-time holographic generation",
        "Implemented multi-user shared MR space for collaborative surgical planning",
        "Created persistent spatial anchors for consistent hologram positioning",
        "Developed annotation tools for surgeons to mark critical structures",
        "Built remote collaboration feature for specialist consultation",
        "Integrated with hospital PACS system for seamless scan access"
      ],
      timeline: "20 weeks including clinical validation",
      budget: "120,000€ total development cost"
    },
    impact: {
      summary: "The MR surgical planning tool reduced complication rates to below the regional benchmark and cut pre-surgical briefing time by 67%, while enabling remote specialist collaboration across all 8 facilities.",
      metrics: [
        {
          label: "Complication Rate",
          value: "-38%",
          description: "6.8% → 4.2% complication rate—matching regional benchmark within 6 months"
        },
        {
          label: "Briefing Time",
          value: "-67%",
          description: "45 minutes → 15 minutes for pre-surgical team alignment"
        },
        {
          label: "Remote Consultations",
          value: "3x",
          description: "Specialist consultations tripled with shared MR spatial understanding"
        },
        {
          label: "Resident Confidence",
          value: "+85%",
          description: "Resident self-reported confidence in complex procedure preparation"
        }
      ],
      testimonial: {
        quote: "Explaining a complex tumor's spatial relationship to surrounding structures from a 2D scan is like describing a sculpture from a photograph. With Magic Leap, we walk into surgery having already explored the patient's anatomy together. Our complication rate dropped to benchmark within 6 months.",
        author: "Dr. Layla Al-Rashid",
        position: "Chief of Surgery, Regional Healthcare Network"
      }
    }
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
    client: {
      name: "Corporate Training Consortium",
      industry: "Corporate Learning & Development",
      background: "HR training division of a multinational corporation with 18,000 employees across 12 countries, managing annual L&D budget of 8.5M€."
    },
    problem: {
      title: "Remote Workforce Training Failing: 23% Completion Rate and Zero Skill Retention",
      description: "The corporation's shift to remote work exposed a critical training failure. Video-based e-learning had a 23% completion rate and post-training assessments showed only 31% skill retention after 30 days. Annual training budget was 8.5M€ with measurable ROI of near zero. Compliance training completion was legally required but employees were clicking through without engaging. The L&D director had 6 months to show measurable improvement or face budget cuts.",
      painPoints: [
        "23% course completion rate vs. 85% target for compliance requirements",
        "31% skill retention after 30 days—near-zero training ROI on 8.5M€ budget",
        "Legal compliance risk from employees clicking through without genuine engagement",
        "Remote teams losing collaborative culture—no shared learning experiences",
        "6-month deadline for L&D director to show measurable improvement",
        "Time zone differences making synchronous training sessions impossible"
      ]
    },
    solution: {
      approach: "Built an immersive social VR classroom where employees across time zones could attend live sessions, collaborate on 3D scenarios, and practice skills in realistic simulated environments. Asynchronous replay mode allowed flexible scheduling.",
      implementation: [
        "Developed multi-user VR environment supporting 30 simultaneous participants",
        "Created interactive 3D scenario modules for compliance and skills training",
        "Implemented spatial audio for natural conversation dynamics",
        "Built instructor tools: whiteboard, 3D model presentation, scenario control",
        "Designed asynchronous replay mode for timezone-flexible access",
        "Integrated LMS tracking for completion and assessment data"
      ],
      timeline: "12 weeks from brief to global rollout",
      budget: "62,000€ total development cost"
    },
    impact: {
      summary: "VR classroom transformed training engagement from a compliance checkbox to a competitive advantage, with completion rates and retention metrics exceeding industry benchmarks within the first quarter.",
      metrics: [
        {
          label: "Completion Rate",
          value: "91%",
          description: "23% → 91% course completion—from legal risk to best-in-class"
        },
        {
          label: "Skill Retention",
          value: "+185%",
          description: "31% → 88% retention after 30 days—measurable behavior change"
        },
        {
          label: "Training Cost",
          value: "-40%",
          description: "VR eliminated travel and venue costs for 18,000 employees"
        },
        {
          label: "Employee NPS",
          value: "+62 pts",
          description: "Training NPS went from -8 (detractor) to +54 (promoter)"
        }
      ],
      testimonial: {
        quote: "We were spending 8.5 million euros a year on training that wasn't working. The VR classroom didn't just improve completion rates—it changed how employees feel about learning. Our training NPS went from negative to one of our highest-scoring employee programs. The L&D budget is now seen as a competitive advantage.",
        author: "Rania Al-Mansouri",
        position: "Global Head of Learning & Development"
      }
    }
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
    client: {
      name: "Multiple Digital & Marketing Clients",
      industry: "Digital Marketing & Brand Experience",
      background: "Portfolio of projects for brands seeking interactive 3D web experiences without requiring app downloads or VR hardware."
    },
    problem: {
      title: "Brands Losing Digital Engagement to Competitors with Interactive 3D Experiences",
      description: "Multiple brand clients faced the same challenge: their websites felt flat and static while competitors were launching immersive 3D experiences. One luxury automotive brand had a 1.2% website conversion rate vs. 3.8% industry average. Their marketing agency quoted 280K€ for a native app with 3D features—a budget the brand couldn't justify. They needed web-based 3D that worked on any device without downloads.",
      painPoints: [
        "1.2% website conversion rate vs. 3.8% industry average for luxury automotive",
        "Competitors launching immersive 3D experiences capturing market attention",
        "Native app development quoted at 280K€—unjustifiable for marketing campaign",
        "3D product configurators requiring software downloads losing 78% of users",
        "Static product photography failing to communicate premium product quality",
        "Mobile users (65% of traffic) unable to access existing 3D content"
      ]
    },
    solution: {
      approach: "Built browser-native 3D experiences using Three.js and WebGL that loaded instantly on any device—desktop, tablet, or mobile—without downloads. Experiences included 360° product viewers, interactive configurators, and architectural walkthroughs.",
      implementation: [
        "Developed optimized 3D models with progressive loading for instant web performance",
        "Built real-time material configurator with 40+ color and finish combinations",
        "Implemented responsive 3D rendering adapting to device capabilities",
        "Created architectural walkthrough with hotspot-driven navigation",
        "Optimized texture compression achieving 95% size reduction vs. raw assets",
        "Integrated analytics tracking user interaction with 3D elements"
      ],
      timeline: "4-6 weeks per project",
      budget: "18,000€ - 55,000€ per project"
    },
    impact: {
      summary: "Web3D experiences consistently outperformed traditional web content, with the automotive brand achieving 3.1% conversion rate and 4.2 minute average session time vs. 45 seconds previously.",
      metrics: [
        {
          label: "Conversion Rate",
          value: "+158%",
          description: "1.2% → 3.1% conversion rate—exceeding industry average"
        },
        {
          label: "Session Duration",
          value: "4.2 min",
          description: "vs. 45 seconds with static content—560% increase in engagement"
        },
        {
          label: "Development Cost",
          value: "-80%",
          description: "35K€ WebGL solution vs. 280K€ native app quote"
        },
        {
          label: "Device Reach",
          value: "100%",
          description: "Works on all devices and browsers—no download required"
        }
      ],
      testimonial: {
        quote: "Our website was beautiful but static. Competitors were launching 3D configurators and we were losing leads. The WebGL experience cost a fraction of what we were quoted for an app, launched in 5 weeks, and our conversion rate went from 1.2% to 3.1%. It paid for itself in the first month.",
        author: "Omar Al-Khatib",
        position: "Digital Marketing Director, Luxury Automotive Brand"
      }
    }
  },
  {
    id: "oman-park-archviz",
    title: "Oman Park Architectural Visualization",
    category: "Visualization",
    platform: "Rendering & VR",
    description: "A stunning futuristic architectural visualization project showcasing Oman Park—a visionary public space that blends cutting-edge design with natural landscapes. This comprehensive visualization suite demonstrates photorealistic rendering capabilities, advanced lighting techniques, and immersive VR walkthroughs. The project features ultra-realistic materials using PBR workflows, dynamic day/night lighting scenarios, atmospheric effects, and detailed landscaping. Created for client presentations and urban planning proposals, this work exemplifies the intersection of architectural visualization and virtual reality technology. Optimized for both high-resolution static renders and real-time VR exploration on Meta Quest platforms.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/yQBnBkSTesHONSWR.jpg",
    tags: ["Architectural Visualization", "3ds Max", "Unreal Engine", "VR", "PBR", "Rendering"],
    featured: true,
    gallery: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/yQBnBkSTesHONSWR.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ILdHsQGlVnuSxrRN.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/QNECegqPWqzUOkIZ.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/WaUVUaRwURCXecZX.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/jCxtYCUoDTtumEfM.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/OwkqSesxCVRlbriW.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/IHJsLGsOpipwVSdz.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/WzvZjEKelVXWqIXG.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/lLaiNdZKgkqekOVx.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/lLbhnUEvfmqEuisS.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/DgTLzPTYdjEpDNJK.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ekKZhywCqHsvreYW.jpg",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/aqQNvKGsLXHwHZFK.jpg",
    ],
    technologies: ["3ds Max", "Unreal Engine", "Substance Painter", "Photoshop", "VRay"],
    keyFeatures: [
      "Photorealistic PBR materials and textures",
      "Dynamic day/night lighting scenarios",
      "Atmospheric effects (fog, volumetric lighting, god rays)",
      "Detailed landscaping with native vegetation",
      "Interactive VR walkthrough mode",
      "4K+ resolution static renders for presentations",
      "Optimized real-time rendering for VR platforms",
      "Modular architecture for design iterations",
    ],
    challenges: [
      "Balancing photorealistic quality with VR performance requirements",
      "Creating accurate lighting for multiple time-of-day scenarios",
      "Optimizing high-poly architectural details for real-time rendering",
      "Achieving seamless transitions between static renders and VR mode",
      "Managing large scene complexity while maintaining 72fps in VR",
    ],
    results: [
      "Client approval for urban development proposal",
      "Featured in architectural visualization portfolio showcases",
      "Successful VR presentation to stakeholders and investors",
      "Demonstrated expertise in futuristic architectural visualization",
      "Established workflow for hybrid render/VR projects",
    ],
    client: {
      name: "Ekson Real Estate Development",
      industry: "Urban Development & Real Estate",
      background: "Leading real estate developer in the GCC region with 2.5B€ in annual projects, specializing in mixed-use developments and smart city initiatives."
    },
    problem: {
      title: "850M€ Urban Development Project Stalled Due to Stakeholder Visualization Challenges",
      description: "Ekson needed to secure government approval and investor funding for Oman Park, an ambitious 850M€ mixed-use development. Traditional 2D renders and physical models failed to communicate the project's scale and vision. Stakeholders couldn't visualize how the futuristic design would integrate with the natural landscape. Previous visualization attempts cost 120K€ but resulted in 6-month delays and investor hesitation. The project risked cancellation without compelling visual proof of concept.",
      painPoints: [
        "Previous 2D visualization attempts cost 120K€ but failed to secure stakeholder buy-in",
        "6-month project delay while searching for effective presentation solution",
        "Government planning committee unable to assess environmental impact from static renders",
        "International investors (40% of funding) couldn't visit Oman for site presentations",
        "Competing developments with better visualization winning similar contracts",
        "Risk of 850M€ project cancellation without convincing visual communication"
      ]
    },
    solution: {
      approach: "Created a comprehensive visualization suite combining photorealistic 4K+ static renders for presentations and an interactive VR walkthrough for immersive stakeholder experiences. Delivered both high-end marketing materials and real-time exploration capabilities.",
      implementation: [
        "Developed detailed 3D environment in 3ds Max with game-ready topology",
        "Created photorealistic PBR materials for all architectural and landscape elements",
        "Produced 25+ 4K static renders showcasing day/night scenarios and seasonal variations",
        "Built interactive VR walkthrough in Unreal Engine optimized for Meta Quest 2",
        "Implemented dynamic lighting system demonstrating different times of day",
        "Added atmospheric effects (volumetric fog, god rays) for emotional impact",
        "Optimized for 72fps VR performance while maintaining visual quality",
        "Delivered modular architecture allowing design iteration without full rebuild"
      ],
      timeline: "8 weeks from concept to final delivery",
      budget: "38,500€ total project cost"
    },
    impact: {
      summary: "The visualization suite became the decisive factor in securing project approval and full funding. Ekson presented the VR experience to government officials and investors, resulting in unanimous approval and 100% funding commitment within 3 weeks of delivery.",
      metrics: [
        {
          label: "Cost Efficiency",
          value: "68%",
          description: "38.5K€ solution vs. 120K€ previous failed attempts"
        },
        {
          label: "Approval Speed",
          value: "3 weeks",
          description: "vs. 6+ months of delays with traditional visualization"
        },
        {
          label: "Funding Secured",
          value: "850M€",
          description: "100% project funding committed after VR presentation"
        },
        {
          label: "Investor Confidence",
          value: "+95%",
          description: "Post-VR presentation investor confidence score (vs. 42% with 2D renders)"
        },
        {
          label: "Stakeholder Reach",
          value: "45+",
          description: "Government officials, investors, and partners experienced the VR walkthrough"
        },
        {
          label: "Marketing ROI",
          value: "2,200%",
          description: "Renders used in 18-month marketing campaign worth 850K€"
        }
      ],
      testimonial: {
        quote: "After spending 120K€ on visualizations that didn't work, we were skeptical. But this VR experience changed everything. When we put government officials and investors in the headset, they immediately understood our vision. We got unanimous approval in 3 weeks. This project saved our 850M€ development.",
        author: "Mohammed Al-Rashidi",
        position: "Project Director, Ekson Real Estate Development"
      }
    },
    projectSections: [
      {
        title: "Project Overview",
        content: "This project focuses on the design and production of a game-ready 3D environment, with a strong emphasis on clean topology, edge flow, lighting readability, and real-time performance standards. The environment was developed following a production-oriented mindset, prioritizing structural clarity, scalability, and integration into modern game engines.",
      },
      {
        title: "Environment Layout & Design Intent",
        content: "The layout was planned to ensure compatibility with cinematic, gameplay, and first-person perspectives. Design decisions were driven by functionality and clarity rather than visual noise.",
        points: [
          "Clear spatial hierarchy (primary, secondary, and tertiary forms)",
          "Logical player flow and camera readability",
          "Modular thinking for future expansion",
          "Compatibility with cinematic, gameplay, and first-person perspectives",
        ],
      },
      {
        title: "Topology & Modeling",
        content: "All assets were modeled using clean quad-based topology, ensuring stable shading without artifacts and optimized geometry suitable for real-time rendering. The meshes are fully game-ready, built with performance considerations in mind.",
        points: [
          "Even polygon distribution",
          "Logical edge flow supporting hard edges and curvature",
          "Stable shading without artifacts",
          "Optimized geometry suitable for real-time rendering",
        ],
      },
      {
        title: "Edge Flow Strategy",
        content: "Edge flow was carefully planned to support form and silhouette from multiple viewing distances while reducing visual and technical complexity where possible.",
        points: [
          "Support form and silhouette from multiple viewing distances",
          "Avoid unnecessary edge density",
          "Maintain clean deformation-safe geometry",
          "Reduce visual and technical complexity where possible",
        ],
      },
      {
        title: "Shading & Lighting Validation (Clay Pass)",
        content: "A material-free clay render pass was used to validate lighting direction, form readability, and overall scene balance without relying on textures. The lighting setup follows a cinematic approach using a clear key light, soft fill, subtle rim lighting, and physically based global illumination.",
        points: [
          "Lighting direction and hierarchy",
          "Form readability and depth",
          "Focal point clarity",
          "Overall scene balance without relying on textures",
        ],
      },
      {
        title: "Performance & Game Readiness",
        content: "The environment was created with real-time constraints in mind, ensuring compatibility with modern pipelines (Unity / Unreal Engine).",
        points: [
          "Optimized meshes ready for LOD generation",
          "Correct scale for game engines",
          "Clean shading suitable for engine integration",
          "Compatible with modern pipelines (Unity / Unreal Engine)",
        ],
      },
      {
        title: "Tools & Workflow",
        content: "The project utilized industry-standard tools and workflows to ensure professional quality and game-ready assets.",
        points: [
          "3ds Max – Modeling, layout, and topology",
          "Clay lighting passes – Form and readability validation",
          "Game-ready asset standards – Real-time optimization focus",
        ],
      },
    ],
  },
];
