/**
 * Home Page
 * Design: Logo-Purple Cinematic Dark
 * - Deep purple primary (#7C3AED) + cyan accent (#06B6D4)
 * - Glassmorphism cards with purple border glow
 * - Scroll-based sticky skills section
 * - Creative experience timeline
 * - Typewriter About Me animation
 * - Optimized: lazy images, no heavy decorative cube spam
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Youtube, ArrowRight, Code2, Layers, Sparkles, MapPin, Clock } from "lucide-react";
import { personalInfo, projects, experience } from "@/data/portfolio";
import Header from "@/components/Header";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import ContactForm from "@/components/ContactForm";
import { TypewriterText } from "@/components/TypewriterText";
import { SkillsScroll } from "@/components/SkillsScroll";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { LogoBackground } from "@/components/LogoBackground";

const PURPLE = "oklch(0.55 0.28 290)";
const CYAN   = "oklch(0.72 0.18 210)";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const mouseRef = useRef({ x: 0, y: 0 });
  const heroParallaxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Smooth hero parallax via RAF (not useState to avoid re-renders)
  useEffect(() => {
    let raf: number;
    let cur = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    const animate = () => {
      cur.x += (mouseRef.current.x - cur.x) * 0.06;
      cur.y += (mouseRef.current.y - cur.y) * 0.06;
      if (heroParallaxRef.current) {
        heroParallaxRef.current.style.transform = `translate(${cur.x * -16}px, ${cur.y * -16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const categories = ["All", "VR", "AR", "MR", "Game", "Visualization", "Web3D"];
  const industries = [
    { label: "All", value: "All" },
    { label: "Education", value: "Education" },
    { label: "Real Estate", value: "Real Estate" },
    { label: "Healthcare", value: "Healthcare" },
    { label: "Manufacturing", value: "Manufacturing" },
    { label: "E-Commerce", value: "E-Commerce" },
    { label: "Entertainment", value: "Entertainment" },
    { label: "Corporate", value: "Corporate" },
  ];
  const industryMap: Record<string, string[]> = {
    "Education": ["vr-chemistry-lab", "vr-biology-lab"],
    "Real Estate": ["oman-park-archviz", "architectural-viz"],
    "Healthcare": ["mr-surgical-planning"],
    "Manufacturing": ["mr-assembly-guidance"],
    "E-Commerce": ["ar-product-viz"],
    "Entertainment": ["nakhil-castle-vr", "library-virtual-tour"],
    "Corporate": ["vr-classroom", "game-asset-library", "web3d-experiences", "desert-survival-vr"],
  };
  const filteredProjects = projects.filter(p => {
    const catOk = selectedCategory === "All" || p.category === selectedCategory;
    const indOk = selectedIndustry === "All" || (industryMap[selectedIndustry] || []).includes(p.id);
    return catOk && indOk;
  });

  // Scroll to section helper (fixes nav links)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">
      {/* Global logo parallax background */}
      <LogoBackground />

      <Header />

      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Parallax background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            ref={heroParallaxRef}
            className="absolute"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/SymxxZFFWf71UsoZLrpb7i/sandbox/6ZDY6fmItm5Py3Bf5JeV5o-img-1_1770730622000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU3lteHhaRkZXZjcxVXNvWkxycGI3aS9zYW5kYm94LzZaRFk2Zm1JdG01UHkzQmY1SmVWNW8taW1nLTFfMTc3MDczMDYyMjAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=knhkB9D9Y4mQNoPWnyTMH~u3j8sMUoIdoLwTEY348MowCo~QWJWSoyLdjobhFrIXiqXOZjeHjny6Lkn4UF9dSTjuD6NdE6shQYP6ORLl6w73jHwSJA72nTAiEDGrYD2gu6pOToc3VDAqv4tOYeVvmWR96rpQv2X6NKxLoOLv3pWzW8bBEB8D7WfleACznqu5GNgYsrQyoE8FLxINvc5-TVEf9hXnBF79M2~12DRtzY0CUN62EVDViu5ir4P97KxyLuLg5K7BwB3~-P~f2qk7Chz75wO8L-IG0OLm4K8T9~H0YLWCnQORXNkgQWmXNPETqMXH0loT0OkiSdJ6JjX8Ujg__')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)",
              inset: "-5%",
              width: "110%",
              height: "110%",
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/97 via-background/85 to-background/70" />
          {/* Purple diagonal ray */}
          <div className="absolute animate-light-ray" style={{ top: "-20%", right: "15%", width: "2px", height: "140%", background: `linear-gradient(to bottom, transparent 0%, ${PURPLE}60 40%, ${PURPLE}80 60%, transparent 100%)`, transform: "rotate(-35deg)", transformOrigin: "top center", filter: "blur(1px)" }} />
          <div className="absolute animate-light-ray" style={{ top: "-20%", right: "25%", width: "1px", height: "140%", background: `linear-gradient(to bottom, transparent 0%, ${CYAN}40 40%, ${CYAN}60 60%, transparent 100%)`, transform: "rotate(-35deg)", transformOrigin: "top center", animationDelay: "1.5s" }} />
          {/* Glow spots */}
          <div className="absolute" style={{ bottom: "-10%", left: "-5%", width: "40%", height: "50%", background: `radial-gradient(ellipse at bottom left, ${PURPLE}10 0%, transparent 70%)`, filter: "blur(40px)" }} />
          <div className="absolute" style={{ top: "-10%", right: "-5%", width: "50%", height: "60%", background: `radial-gradient(ellipse at top right, ${CYAN}08 0%, transparent 70%)`, filter: "blur(60px)" }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <div className="pill-badge">
                  {personalInfo.yearsExperience} Years Experience · {personalInfo.projectsCompleted} Projects
                </div>
                <h1
                  className="font-display text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
                  style={{
                    background: `linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #06b6d4 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: `drop-shadow(0 0 30px ${PURPLE}50)`,
                  }}
                >
                  {personalInfo.name.toUpperCase()}
                </h1>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold" style={{ color: CYAN }}>
                  {personalInfo.title}
                </h2>
                <p className="text-xl text-muted-foreground font-heading font-normal max-w-2xl">
                  {personalInfo.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="group font-heading btn-glow-blue transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${PURPLE}, oklch(0.50 0.26 280))`, color: "white" }}
                  onClick={() => scrollTo("projects")}
                >
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-heading transition-all duration-300"
                  style={{ borderColor: `${CYAN}60`, color: CYAN }}
                  onClick={() => scrollTo("contact")}
                >
                  <Mail size={18} className="mr-2" />
                  Get In Touch
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: `${PURPLE}25` }}>
                {[
                  { end: 50, suffix: "+", label: "Happy Clients" },
                  { end: 100, suffix: "K+", label: "Polygons Optimized" },
                  { end: 15, suffix: "+", label: "XR Platforms" },
                ].map(({ end, suffix, label }) => (
                  <div key={label} className="group">
                    <div className="font-display text-4xl" style={{ background: `linear-gradient(135deg, #a78bfa, #06b6d4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      <AnimatedCounter end={end} suffix={suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground font-heading mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D floating elements */}
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
              <div className="relative w-full h-96" style={{ perspective: "1000px" }}>
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-xl flex items-center justify-center animate-float-3d"
                  style={{ background: `linear-gradient(135deg, ${PURPLE}25, ${PURPLE}08)`, border: `1px solid ${PURPLE}50`, boxShadow: `0 0 30px ${PURPLE}20`, backdropFilter: "blur(8px)" }}
                >
                  <Code2 size={48} style={{ color: PURPLE }} />
                </div>
                <div
                  className="absolute top-32 right-20 w-24 h-24 rounded-lg flex items-center justify-center animate-float-3d"
                  style={{ background: `linear-gradient(135deg, ${CYAN}20, ${CYAN}06)`, border: `1px solid ${CYAN}45`, boxShadow: `0 0 25px ${CYAN}18`, backdropFilter: "blur(8px)", animationDelay: "0.8s" }}
                >
                  <Layers size={36} style={{ color: CYAN }} />
                </div>
                <div
                  className="absolute bottom-0 right-10 w-36 h-36 rounded-2xl flex items-center justify-center animate-float-3d"
                  style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${PURPLE}06)`, border: `1px solid ${PURPLE}45`, boxShadow: `0 0 35px ${PURPLE}18`, backdropFilter: "blur(8px)", animationDelay: "1.6s" }}
                >
                  <Sparkles size={52} style={{ color: PURPLE }} />
                </div>
                <div
                  className="absolute top-48 right-48 w-16 h-16 rounded-lg flex items-center justify-center animate-float-3d"
                  style={{ background: `linear-gradient(135deg, ${CYAN}15, ${CYAN}05)`, border: `1px solid ${CYAN}35`, backdropFilter: "blur(8px)", animationDelay: "2.4s" }}
                >
                  <div className="w-8 h-8 border-2 rounded-full" style={{ borderColor: `${CYAN}60` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT SECTION — Typewriter animation
      ═══════════════════════════════════════════════ */}
      <section id="about" className="py-24 relative overflow-hidden" style={{ background: `oklch(0.09 0.018 280)` }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px divider-glow" />
          <div className="absolute bottom-0 left-0 w-full h-px divider-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${PURPLE}08 0%, transparent 70%)` }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left: heading + bio */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="pill-badge mb-4">About Me</div>
                <h2
                  className="font-display text-5xl md:text-6xl mb-6"
                  style={{ background: `linear-gradient(135deg, #ffffff, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  CRAFTING WORLDS,<br />PIXEL BY PIXEL
                </h2>
              </div>

              {/* Typewriter bio */}
              <TypewriterText
                text={personalInfo.bio}
                className="text-lg leading-relaxed text-foreground/85 font-body"
                speed={80}
              />

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <Clock size={16} />, label: "Experience", value: "6+ Years" },
                  { icon: <MapPin size={16} />, label: "Location", value: "UAE / Remote" },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-4 rounded-xl glass-card"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}30`, color: PURPLE }}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-accent uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-heading font-semibold text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Software logos */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs text-muted-foreground font-accent tracking-[0.2em] uppercase">Core Software</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/EAgBdRaJPJCAduCI.png", alt: "Unity" },
                  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/UNlUKpwFZtIgbHgD.png", alt: "Unreal Engine" },
                  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ZErRzZlvwJmKnYCB.png", alt: "3ds Max" },
                  { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/aLPsDxUHcwdejyGx.png", alt: "Substance Painter" },
                ].map(({ src, alt }) => (
                  <div
                    key={alt}
                    className="group glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:scale-105 transition-all duration-300"
                  >
                    <img src={src} alt={alt} className="h-14 w-auto object-contain" loading="lazy" />
                    <p className="text-xs font-accent text-muted-foreground group-hover:text-primary transition-colors">{alt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROJECTS SECTION
      ═══════════════════════════════════════════════ */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mb-12">
            <div className="pill-badge mb-4">Featured Work</div>
            <h2
              className="font-display text-5xl md:text-6xl mb-6"
              style={{ background: `linear-gradient(135deg, #ffffff, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              SELECTED PROJECTS
            </h2>
            <p className="text-xl text-muted-foreground font-heading max-w-2xl">
              Production-ready work spanning VR, AR, MR, and real-time 3D development.
            </p>
          </div>

          {/* Filters */}
          <div className="space-y-4 mb-12">
            <div>
              <p className="text-xs text-muted-foreground font-accent tracking-[0.2em] uppercase mb-3">Filter by Type</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="px-4 py-1.5 text-xs font-accent tracking-widest uppercase border transition-all duration-200 rounded-lg"
                    style={{
                      borderColor: selectedCategory === cat ? PURPLE : "oklch(0.20 0.04 280)",
                      color: selectedCategory === cat ? PURPLE : "oklch(0.55 0.04 280)",
                      background: selectedCategory === cat ? `${PURPLE}12` : "transparent",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-accent tracking-[0.2em] uppercase mb-3">Filter by Industry</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind.value}
                    onClick={() => setSelectedIndustry(ind.value)}
                    className="px-4 py-1.5 text-xs font-accent tracking-widest uppercase border transition-all duration-200 rounded-lg"
                    style={{
                      borderColor: selectedIndustry === ind.value ? CYAN : "oklch(0.20 0.04 280)",
                      color: selectedIndustry === ind.value ? CYAN : "oklch(0.55 0.04 280)",
                      background: selectedIndustry === ind.value ? `${CYAN}12` : "transparent",
                    }}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>
            {(selectedCategory !== "All" || selectedIndustry !== "All") && (
              <div className="flex items-center gap-3">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold" style={{ color: CYAN }}>{filteredProjects.length}</span> of <span className="font-semibold" style={{ color: PURPLE }}>{projects.length}</span> projects
                </p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSelectedIndustry("All"); }}
                  className="text-xs text-muted-foreground/60 hover:text-primary underline transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <Card
                  className="group overflow-hidden glass-card cursor-pointer transition-all duration-400 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-35 transition-opacity" />
                    {project.featured && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-accent" style={{ background: `${PURPLE}90`, color: "white", border: `1px solid ${PURPLE}` }}>
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-accent" style={{ background: `${CYAN}15`, color: CYAN, border: `1px solid ${CYAN}30` }}>
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-accent">{project.platform}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded font-accent" style={{ background: "oklch(0.14 0.02 280)", color: "oklch(0.55 0.04 280)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TECHNICAL EXPERTISE — Scroll-based sticky
      ═══════════════════════════════════════════════ */}
      <section id="skills" className="relative overflow-hidden" style={{ background: `oklch(0.09 0.018 280)` }}>
        <div className="container py-16">
          <div className="pill-badge mb-4">Technical Expertise</div>
          <h2
            className="font-display text-5xl md:text-6xl mb-4"
            style={{ background: `linear-gradient(135deg, #ffffff, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            SKILLS & TOOLS
          </h2>
          <p className="text-lg text-muted-foreground font-heading mb-2">
            Scroll to explore each discipline — stay still and let the skills come to you.
          </p>
        </div>
        <SkillsScroll />
      </section>

      {/* ═══════════════════════════════════════════════
          EXPERIENCE SECTION — Creative timeline
      ═══════════════════════════════════════════════ */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px divider-glow" />
        </div>
        <div className="container relative z-10">
          <div className="pill-badge mb-4">Career Journey</div>
          <h2
            className="font-display text-5xl md:text-6xl mb-4"
            style={{ background: `linear-gradient(135deg, #ffffff, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            EXPERIENCE
          </h2>
          <p className="text-lg text-muted-foreground font-heading mb-12">
            Select a role to explore the mission details.
          </p>
          <ExperienceTimeline />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TOOLS & TECHNOLOGIES — Infinite scroll
      ═══════════════════════════════════════════════ */}
      <section id="tools" className="py-20 relative overflow-hidden" style={{ background: `oklch(0.09 0.018 280)` }}>
        <div className="container relative z-10 mb-12">
          <h2
            className="font-display text-5xl md:text-6xl mb-4 text-center"
            style={{ background: `linear-gradient(135deg, #ffffff, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            TOOLS & TECHNOLOGIES
          </h2>
          <p className="text-lg text-muted-foreground text-center font-heading">
            Professional software and platforms I use to craft immersive experiences
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, oklch(0.09 0.018 280), transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, oklch(0.09 0.018 280), transparent)` }} />
          <div className="overflow-hidden">
            <div className="flex items-center gap-12 py-6 animate-scroll-infinite">
              {[
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/EAgBdRaJPJCAduCI.png", alt: "Unity" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/UNlUKpwFZtIgbHgD.png", alt: "Unreal Engine" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ZErRzZlvwJmKnYCB.png", alt: "3ds Max" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/aLPsDxUHcwdejyGx.png", alt: "Substance Painter" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/kdwQLEYOBfqidnjy.png", alt: "Photoshop" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/MYDtzMGjuhJoTRqT.png", alt: "Meta Quest" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/olKtIDKETrgjVstu.png", alt: "Pico" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/OvrjZinAOhUQrhzd.png", alt: "Magic Leap" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ytgacYxnngiMGwQr.png", alt: "Figma" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/xQkBOLpVDJQbPPCa.png", alt: "Trello" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/pIFhfIEzCOoKdXxD.png", alt: "GitHub" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/qSFQhqaFJfPVXWuN.png", alt: "Illustrator" },
                // Duplicate for seamless loop
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/EAgBdRaJPJCAduCI.png", alt: "Unity2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/UNlUKpwFZtIgbHgD.png", alt: "Unreal2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ZErRzZlvwJmKnYCB.png", alt: "3dsMax2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/aLPsDxUHcwdejyGx.png", alt: "Substance2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/kdwQLEYOBfqidnjy.png", alt: "PS2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/MYDtzMGjuhJoTRqT.png", alt: "Meta2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/olKtIDKETrgjVstu.png", alt: "Pico2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/OvrjZinAOhUQrhzd.png", alt: "ML2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/ytgacYxnngiMGwQr.png", alt: "Figma2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/xQkBOLpVDJQbPPCa.png", alt: "Trello2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/pIFhfIEzCOoKdXxD.png", alt: "GH2" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/qSFQhqaFJfPVXWuN.png", alt: "AI2" },
              ].map(({ src, alt }) => (
                <div key={alt} className="group flex-shrink-0 hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src={src}
                    alt={alt.replace(/\d+$/, "")}
                    className="h-14 md:h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: `drop-shadow(0 0 12px ${PURPLE}40)` }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <h2
            className="font-display text-5xl md:text-6xl mb-4 text-center"
            style={{ background: `linear-gradient(135deg, #ffffff, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-14 font-heading">
            What clients and colleagues say about working with me
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { initial: "M", name: "Mohammed Al-Rashidi", role: "Project Manager, Ekson", text: "Ahmed's expertise in VR development transformed our educational platform. His attention to detail and ability to optimize complex 3D environments for Quest 2 exceeded our expectations. A true professional." },
              { initial: "S", name: "Sarah Johnson", role: "Creative Director, SPARK td", text: "Working with Ahmed was seamless. His 3D assets are production-ready and beautifully crafted. He understands the technical constraints of real-time rendering while maintaining artistic excellence." },
              { initial: "K", name: "Dr. Khalid Al-Mansoori", role: "Director, Harmony International Schools", text: "Ahmed created immersive VR labs that revolutionized our STEM curriculum. Students are more engaged than ever. His work combines educational value with cutting-edge technology perfectly." },
            ].map(({ initial, name, role, text }) => (
              <div
                key={name}
                className="glass-card rounded-xl p-7 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold font-display flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${PURPLE}30, ${CYAN}20)`, border: `1px solid ${PURPLE}40`, color: PURPLE }}
                  >
                    {initial}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: PURPLE }}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BLOG PREVIEW
      ═══════════════════════════════════════════════ */}
      <section id="blog" className="py-24 relative overflow-hidden" style={{ background: `oklch(0.09 0.018 280)` }}>
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="pill-badge mb-4">Insights</div>
              <h2
                className="font-display text-5xl md:text-6xl"
                style={{ background: `linear-gradient(135deg, #ffffff, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                LATEST ARTICLES
              </h2>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="font-heading hidden md:flex" style={{ borderColor: `${PURPLE}50`, color: PURPLE }}>
                View All <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/blog/vr-optimization-unity", img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop", cat: "VR Dev", title: "VR Performance Optimization in Unity", desc: "Techniques for achieving 90fps on standalone VR headsets without sacrificing visual quality." },
              { href: "/blog/pbr-texturing-workflow", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", cat: "3D Art", title: "PBR Texturing Workflow: Substance to Unity", desc: "Complete guide to creating photorealistic PBR materials for real-time rendering." },
              { href: "/blog/spatial-ui-design-vr", img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop", cat: "XR Design", title: "Designing Intuitive Spatial UI for VR", desc: "Best practices for creating comfortable and accessible VR interfaces." },
            ].map(({ href, img, cat, title, desc }) => (
              <Link key={href} href={href}>
                <div className="group glass-card rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-accent" style={{ background: `${PURPLE}90`, color: "white" }}>
                      FEATURED
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-heading font-semibold" style={{ background: `${PURPLE}15`, color: PURPLE, border: `1px solid ${PURPLE}25` }}>
                      {cat}
                    </span>
                    <h3 className="font-heading text-base font-semibold group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/blog">
              <Button style={{ background: PURPLE, color: "white" }} className="font-heading">
                View All Articles <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT SECTION — Full English
      ═══════════════════════════════════════════════ */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${PURPLE}08 0%, transparent 70%)`, filter: "blur(40px)" }} />
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${CYAN}06 0%, transparent 70%)`, filter: "blur(40px)" }} />
          <div className="absolute top-0 right-0 w-px h-full opacity-15 animate-light-ray" style={{ background: `linear-gradient(to bottom, transparent, ${PURPLE}60, transparent)`, transform: "rotate(-30deg) translateX(200px)", transformOrigin: "top center" }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="pill-badge mb-5">Get In Touch</div>
              <h2
                className="font-display text-5xl md:text-7xl mb-5"
                style={{ background: `linear-gradient(135deg, #a78bfa, #7c3aed, #06b6d4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                LET'S BUILD TOGETHER
              </h2>
              <p className="text-xl text-muted-foreground font-heading max-w-2xl mx-auto">
                Available for freelance projects, full-time opportunities, and collaborations with AAA studios and XR companies.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Left: Contact info */}
              <div className="lg:col-span-2 space-y-4">
                {[
                  { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: "Email", value: personalInfo.email, color: PURPLE },
                  { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn", value: "Ahmed Al-Hadim", color: CYAN, external: true },
                  { href: personalInfo.youtube, icon: <Youtube size={18} />, label: "YouTube", value: "3D Art & XR Channel", color: PURPLE, external: true },
                ].map(({ href, icon, label, value, color, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-accent uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-heading text-foreground">{value}</p>
                    </div>
                  </a>
                ))}

                {/* Availability */}
                <div className="p-4 rounded-xl" style={{ border: "1px solid oklch(0.55 0.18 145 / 0.3)", background: "oklch(0.55 0.18 145 / 0.05)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <div>
                      <p className="text-sm font-heading text-green-400">Available for Work</p>
                      <p className="text-xs text-muted-foreground">Ready for new projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <div className="p-8 rounded-2xl glass-card">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-7">
                    Send a Message
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════ */}
      <footer className="relative py-12 overflow-hidden" style={{ background: "oklch(0.07 0.015 280)", borderTop: `1px solid ${PURPLE}18` }}>
        <div className="divider-glow absolute top-0 left-0 right-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 rounded-full opacity-20" style={{ background: `radial-gradient(ellipse, ${PURPLE}08 0%, transparent 70%)`, filter: "blur(20px)" }} />

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png"
                alt="Al-Hadim"
                className="h-14 animate-float"
                style={{ filter: `drop-shadow(0 0 10px ${PURPLE}50)` }}
              />
              <div>
                <h3
                  className="text-xl font-display"
                  style={{ background: `linear-gradient(135deg, #ffffff, #a78bfa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  AHMED ALHADIM
                </h3>
                <p className="text-sm text-muted-foreground font-accent">Senior 3D Artist | Game & XR Specialist</p>
              </div>
            </div>

            <div className="flex gap-5">
              {[
                { href: `mailto:${personalInfo.email}`, icon: <Mail className="h-5 w-5" />, label: "Email" },
                { href: personalInfo.linkedin, icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", external: true },
                { href: personalInfo.youtube, icon: <Youtube className="h-5 w-5" />, label: "YouTube", external: true },
              ].map(({ href, icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="transition-all duration-300 hover:scale-110"
                  style={{ color: "oklch(0.55 0.04 280)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = PURPLE)}
                  onMouseLeave={e => (e.currentTarget.style.color = "oklch(0.55 0.04 280)")}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 text-center text-sm text-muted-foreground font-accent" style={{ borderTop: `1px solid ${PURPLE}12` }}>
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with passion for XR & 3D.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
