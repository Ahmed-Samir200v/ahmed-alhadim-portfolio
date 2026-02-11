/**
 * Design Philosophy: Cinematic Depth-Field Narrative
 * - Film noir meets AAA game cinematics
 * - Midnight blue to charcoal backgrounds
 * - Warm amber and cool violet accents
 * - Depth-of-field blur effects
 * - Diagonal composition and overlapping sections
 */

import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Youtube, ArrowRight, Code2, Layers, Sparkles } from "lucide-react";
import { personalInfo, projects, skills, experience } from "@/data/portfolio";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "VR", "AR", "MR", "Game", "Visualization", "Web3D"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/sftHyPWzPimOxihY.png"
            alt="Al-Hadim Logo"
            className="h-10 transition-transform duration-300 hover:scale-105"
          />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-heading hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm font-heading hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-sm font-heading hover:text-primary transition-colors">Experience</a>
              <a href="#skills" className="text-sm font-heading hover:text-primary transition-colors">Skills</a>
              <Link href="/blog" className="text-sm font-heading hover:text-primary transition-colors">
                Blog
              </Link>
              <a href="#contact" className="text-sm font-heading hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cinematic with diagonal composition */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background with depth-of-field effect */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/SymxxZFFWf71UsoZLrpb7i/sandbox/6ZDY6fmItm5Py3Bf5JeV5o-img-1_1770730622000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU3lteHhaRkZXZjcxVXNvWkxycGI3aS9zYW5kYm94LzZaRFk2Zm1JdG01UHkzQmY1SmVWNW8taW1nLTFfMTc3MDczMDYyMjAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=knhkB9D9Y4mQNoPWnyTMH~u3j8sMUoIdoLwTEY348MowCo~QWJWSoyLdjobhFrIXiqXOZjeHjny6Lkn4UF9dSTjuD6NdE6shQYP6ORLl6w73jHwSJA72nTAiEDGrYD2gu6pOToc3VDAqv4tOYeVvmWR96rpQv2X6NKxLoOLv3pWzW8bBEB8D7WfleACznqu5GNgYsrQyoE8FLxINvc5-TVEf9hXnBF79M2~12DRtzY0CUN62EVDViu5ir4P97KxyLuLg5K7BwB3~-P~f2qk7Chz75wO8L-IG0OLm4K8T9~H0YLWCnQORXNkgQWmXPETqMXH0loT0OkiSdJ6JjX8Ujg__')`,
              filter: 'blur(2px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
        </div>

        {/* Content - 60/40 split with diagonal cut */}
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <Badge variant="outline" className="font-accent text-xs px-4 py-1.5 border-primary/50 text-primary">
                    {personalInfo.yearsExperience} Years Experience • {personalInfo.projectsCompleted} Projects
                  </Badge>
                </div>
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-glow-amber">
                  {personalInfo.name.toUpperCase()}
                </h1>
                <h2 className="font-heading text-2xl md:text-3xl text-accent font-semibold">
                  {personalInfo.title}
                </h2>
                <p className="text-xl text-muted-foreground font-heading font-normal max-w-2xl">
                  {personalInfo.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="font-heading border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail size={18} />
                    Get In Touch
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div>
                  <div className="font-display text-4xl text-primary">{personalInfo.yearsExperience}</div>
                  <div className="text-sm text-muted-foreground font-heading">Years Experience</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-primary">{personalInfo.projectsCompleted}</div>
                  <div className="text-sm text-muted-foreground font-heading">Projects Delivered</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-primary">AAA</div>
                  <div className="text-sm text-muted-foreground font-heading">Production Quality</div>
                </div>
              </div>
            </div>

            {/* Right side - 3D floating elements */}
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
              <div className="relative w-full h-96">
                {/* 3D Cube element */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 flex items-center justify-center glow-amber animate-float shadow-2xl backdrop-blur-sm cursor-pointer transition-all duration-700 ease-out hover:scale-110 hover:shadow-[0_0_40px_rgba(255,179,71,0.6)]" style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)', transition: 'transform 0.7s ease-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(25deg) rotateY(-35deg) scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(-15deg) scale(1)'}>
                  <div className="absolute inset-2 border border-primary/20 rounded-lg" style={{ transform: 'translateZ(20px)' }} />
                  <Code2 size={48} className="text-primary" style={{ transform: 'translateZ(40px)' }} />
                </div>
                
                {/* 3D Hexagon element */}
                <div className="absolute top-32 right-20 w-24 h-24 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/40 flex items-center justify-center glow-violet animate-float shadow-2xl backdrop-blur-sm cursor-pointer transition-all duration-700 ease-out hover:scale-110 hover:shadow-[0_0_40px_rgba(139,127,255,0.6)]" style={{ animationDelay: '0.5s', transform: 'perspective(1000px) rotateX(-10deg) rotateY(20deg)', transition: 'transform 0.7s ease-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(-30deg) rotateY(40deg) scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(-10deg) rotateY(20deg) scale(1)'}>
                  <div className="absolute inset-1.5 border border-accent/20 rounded" style={{ transform: 'translateZ(15px)' }} />
                  <Layers size={36} className="text-accent" style={{ transform: 'translateZ(30px)' }} />
                </div>
                
                {/* 3D Sphere-like element */}
                <div className="absolute bottom-0 right-10 w-36 h-36 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 flex items-center justify-center glow-amber animate-float shadow-2xl backdrop-blur-sm cursor-pointer transition-all duration-700 ease-out hover:scale-110 hover:shadow-[0_0_40px_rgba(255,179,71,0.6)]" style={{ animationDelay: '1s', transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)', transition: 'transform 0.7s ease-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(30deg) rotateY(-30deg) scale(1.1) rotate(10deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(-10deg) scale(1) rotate(0deg)'}>
                  <div className="absolute inset-3 border border-primary/20 rounded-xl" style={{ transform: 'translateZ(25px)' }} />
                  <Sparkles size={52} className="text-primary" style={{ transform: 'translateZ(50px)' }} />
                </div>
                
                {/* Additional small 3D element */}
                <div className="absolute top-48 right-48 w-16 h-16 rounded-lg bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 flex items-center justify-center glow-violet animate-float shadow-xl backdrop-blur-sm cursor-pointer transition-all duration-700 ease-out hover:scale-125 hover:shadow-[0_0_30px_rgba(139,127,255,0.5)]" style={{ animationDelay: '1.5s', transform: 'perspective(1000px) rotateX(20deg) rotateY(-25deg)', transition: 'transform 0.7s ease-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(40deg) rotateY(-45deg) scale(1.25) rotate(180deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateX(20deg) rotateY(-25deg) scale(1) rotate(0deg)'}>
                  <div className="w-8 h-8 border-2 border-accent/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/30 relative overflow-hidden">
        {/* Decorative Cube Icons */}
        <div className="absolute top-20 right-10 opacity-10 animate-float" style={{animationDelay: '0s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-32 rotate-12" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float" style={{animationDelay: '1.5s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-24 -rotate-12" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl mb-8 text-primary text-glow-amber">
              ABOUT ME
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>{personalInfo.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Film reel style */}
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Decorative Cube Icons */}
        <div className="absolute top-40 left-20 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-110 hover:rotate-[60deg]" style={{animationDelay: '0.5s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-28 rotate-45 transition-transform duration-700" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-110 hover:rotate-[-60deg]" style={{animationDelay: '2s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-36 -rotate-45 transition-transform duration-700" />
        </div>
        
        <div className="container relative z-10">
          <div className="mb-12">
            <h2 className="font-display text-5xl md:text-6xl mb-6 text-primary text-glow-amber">
              FEATURED WORK
            </h2>
            <p className="text-xl text-muted-foreground font-heading max-w-2xl">
              A selection of production-ready projects showcasing expertise across VR, AR, MR, and real-time 3D development.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="font-accent text-xs"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <Card 
                  className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-amber cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-accent text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="font-accent text-xs border-accent/50 text-accent">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-accent">
                        {project.platform}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-accent">
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

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-card/30 relative overflow-hidden">
        {/* Decorative Cube Icons */}
        <div className="absolute top-10 right-40 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-125 hover:rotate-[120deg]" style={{animationDelay: '1s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-20 rotate-90 transition-transform duration-700" />
        </div>
        <div className="absolute bottom-10 left-40 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-125 hover:rotate-[-120deg]" style={{animationDelay: '2.5s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-24 -rotate-90 transition-transform duration-700" />
        </div>
        
        <div className="container relative z-10">
          <h2 className="font-display text-5xl md:text-6xl mb-12 text-primary text-glow-amber">
            TECHNICAL EXPERTISE
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6 bg-card border-border hover:border-primary/30 transition-colors">
                <h3 className="font-heading text-lg font-semibold mb-4 text-accent">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative overflow-hidden">
        {/* Decorative Cube Icons */}
        <div className="absolute top-20 left-10 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-110 hover:rotate-[210deg]" style={{animationDelay: '0.3s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-32 rotate-180 transition-transform duration-700" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-110 hover:rotate-[30deg]" style={{animationDelay: '1.8s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-28 transition-transform duration-700" />
        </div>
        
        <div className="container relative z-10">
          <h2 className="font-display text-5xl md:text-6xl mb-12 text-primary text-glow-amber">
            EXPERIENCE
          </h2>
          <div className="max-w-4xl space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-accent font-heading">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="outline" className="font-accent text-xs mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 flex gap-3">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        {/* Decorative Cube Icons */}
        <div className="absolute top-10 right-20 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-120 hover:rotate-[75deg]" style={{animationDelay: '0.8s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-24 rotate-45 transition-transform duration-700" />
        </div>
        <div className="absolute bottom-10 left-20 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-120 hover:rotate-[-75deg]" style={{animationDelay: '2.2s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-28 -rotate-45 transition-transform duration-700" />
        </div>
        
        <div className="container relative z-10">
          <h2 className="font-display text-5xl md:text-6xl mb-4 text-primary text-glow-amber text-center">
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 font-heading">
            What clients and colleagues say about working with me
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-bold text-primary">
                  M
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground">Mohammed Al-Rashidi</h3>
                  <p className="text-sm text-muted-foreground">Project Manager, Ekson</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "Ahmed's expertise in VR development transformed our educational platform. His attention to detail and ability to optimize complex 3D environments for Quest 2 exceeded our expectations. A true professional."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-bold text-primary">
                  S
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Creative Director, SPARK td</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "Working with Ahmed was seamless. His 3D assets are production-ready and beautifully crafted. He understands the technical constraints of real-time rendering while maintaining artistic excellence."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-bold text-primary">
                  K
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground">Dr. Khalid Al-Mansoori</h3>
                  <p className="text-sm text-muted-foreground">Director, Harmony International Schools</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "Ahmed created immersive VR labs that revolutionized our STEM curriculum. Students are more engaged than ever. His work combines educational value with cutting-edge technology perfectly."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-24 relative overflow-hidden">
        {/* Decorative Cube Icons */}
        <div className="absolute top-20 right-10 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-110 hover:rotate-[50deg]" style={{animationDelay: '1.2s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-28 transition-transform duration-700" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float hover:opacity-20 transition-all duration-700 hover:scale-110 hover:rotate-[-50deg]" style={{animationDelay: '2.8s'}}>
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png" alt="" className="h-32 transition-transform duration-700" />
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl md:text-6xl mb-4 text-primary text-glow-amber">
              TECHNICAL INSIGHTS
            </h2>
            <p className="text-xl text-muted-foreground font-heading mb-8">
              In-depth articles on VR/XR development, 3D art, and real-time rendering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Featured Blog Article 1 */}
            <Link href="/blog/optimizing-vr-meta-quest-2">
              <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop"
                    alt="VR Optimization"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-semibold">
                    FEATURED
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold border border-primary/20">
                    VR Development
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    Optimizing VR Experiences for Meta Quest 2
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Essential optimization techniques to achieve smooth 72Hz performance on Meta Quest 2.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Featured Blog Article 2 */}
            <Link href="/blog/pbr-texturing-workflow-substance-unity">
              <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
                    alt="PBR Texturing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-semibold">
                    FEATURED
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold border border-primary/20">
                    3D Art
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    PBR Texturing Workflow: Substance to Unity
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Complete guide to creating photorealistic PBR materials for real-time rendering.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Featured Blog Article 3 */}
            <Link href="/blog/spatial-ui-design-vr">
              <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop"
                    alt="Spatial UI Design"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-semibold">
                    FEATURED
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold border border-primary/20">
                    XR Design
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    Designing Intuitive Spatial UI for VR
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Best practices for creating comfortable and accessible VR interfaces.
                  </p>
                </div>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                View All Articles
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl mb-6 text-primary text-glow-amber">
              LET'S COLLABORATE
            </h2>
            <p className="text-xl text-muted-foreground font-heading mb-8">
              Available for freelance projects, full-time opportunities, and collaborations with AAA studios and XR companies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading w-full sm:w-auto">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2">
                  <Mail size={20} />
                  {personalInfo.email}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading w-full sm:w-auto">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={20} />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Brand */}
            <div className="flex items-center gap-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/FZfjwUzTsScMPRYL.png"
                alt="Al-Hadim Cube Icon"
                className="h-16 animate-float"
              />
              <div>
                <h3 className="text-xl font-display font-bold text-amber">AHMED ALHADIM</h3>
                <p className="text-sm text-muted-foreground font-accent">Senior 3D Artist | Game & XR Specialist</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-amber transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-violet transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={personalInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground font-accent">
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
