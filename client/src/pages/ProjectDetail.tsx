/**
 * Design Philosophy: Cinematic Depth-Field Narrative
 * - Film noir meets AAA game cinematics
 * - Full-screen image galleries with depth effects
 * - Diagonal composition for content sections
 */

import { useRoute, Link } from "wouter";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const project = projects.find((p) => p.id === params?.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const gallery = project?.gallery || [project?.image || ''];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [params?.id]);

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    if (!project?.gallery || project.gallery.length <= 1) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedImage((prev) => (prev + 1) % (project.gallery?.length || 1));
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 4000);

    return () => clearInterval(interval);
  }, [project]);

  const handleImageSelect = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedImage(index);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevImage = () => {
    const newIndex = selectedImage === 0 ? gallery.length - 1 : selectedImage - 1;
    handleImageSelect(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (selectedImage + 1) % gallery.length;
    handleImageSelect(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isLightboxOpen, gallery.length]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4 text-primary">PROJECT NOT FOUND</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <Button variant="ghost" className="font-heading">
              <ArrowLeft className="mr-2" size={18} />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section with Large Image */}
      <section className="pt-24 pb-12">
        <div className="container">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="font-accent text-xs border-accent/50 text-accent">
                {project.category}
              </Badge>
              <span className="text-sm text-muted-foreground font-accent">
                {project.platform}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl mb-4 text-primary text-glow-amber">
              {project.title.toUpperCase()}
            </h1>
            <p className="text-xl text-muted-foreground font-heading max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Main Image Gallery */}
          <div className="space-y-6">
            <div 
              className="relative aspect-video rounded-lg overflow-hidden border border-border glow-amber cursor-pointer group"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img
                src={gallery[selectedImage]}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                className={`w-full h-full object-cover transition-all duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'} group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-heading bg-black/50 px-4 py-2 rounded-lg">
                  Click to enlarge
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {gallery.length > 1 && (
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleImageSelect(idx)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-primary glow-amber scale-105"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-card/30">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Client Story */}
              {project.client && (
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-semibold text-primary">
                        {project.client.name}
                      </h2>
                      <p className="text-accent font-medium">{project.client.industry}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{project.client.background}</p>
                </div>
              )}

              {/* The Problem */}
              {project.problem && (
                <div className="border-l-4 border-red-500/50 pl-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">⚠️</span>
                    <div>
                      <h2 className="font-heading text-3xl font-semibold text-primary mb-2">
                        The Challenge
                      </h2>
                      <h3 className="text-xl font-medium text-red-400 mb-3">
                        {project.problem.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                    {project.problem.description}
                  </p>
                  {project.problem.painPoints && project.problem.painPoints.length > 0 && (
                    <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-4 text-red-400">Key Pain Points:</h4>
                      <ul className="space-y-3">
                        {project.problem.painPoints.map((point, idx) => (
                          <li key={idx} className="flex gap-3 text-foreground/80">
                            <span className="text-red-400 mt-1.5 flex-shrink-0">✗</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* The Solution */}
              {project.solution && (
                <div className="border-l-4 border-blue-500/50 pl-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">💡</span>
                    <h2 className="font-heading text-3xl font-semibold text-primary">
                      The Solution
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                    {project.solution.approach}
                  </p>
                  {project.solution.implementation && project.solution.implementation.length > 0 && (
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-lg mb-4 text-blue-400">Implementation:</h4>
                      <ul className="space-y-3">
                        {project.solution.implementation.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-foreground/80">
                            <span className="text-blue-400 mt-1.5 flex-shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.solution.timeline && (
                      <div className="bg-card border border-border rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                        <p className="text-xl font-semibold text-primary">{project.solution.timeline}</p>
                      </div>
                    )}
                    {project.solution.budget && (
                      <div className="bg-card border border-border rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Investment</p>
                        <p className="text-xl font-semibold text-primary">{project.solution.budget}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* The Impact */}
              {project.impact && (
                <div className="border-l-4 border-green-500/50 pl-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">🎯</span>
                    <h2 className="font-heading text-3xl font-semibold text-primary">
                      The Results
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                    {project.impact.summary}
                  </p>
                  
                  {/* Metrics Grid */}
                  {project.impact.metrics && project.impact.metrics.length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {project.impact.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg p-6 text-center">
                          <div className="text-4xl font-bold text-green-400 mb-2">
                            {metric.value}
                          </div>
                          <div className="text-sm font-semibold text-foreground/90 mb-2">
                            {metric.label}
                          </div>
                          <div className="text-xs text-foreground/60">
                            {metric.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Testimonial */}
                  {project.impact.testimonial && (
                    <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-lg p-8">
                      <div className="text-5xl text-accent/30 mb-4">"</div>
                      <p className="text-lg italic text-foreground/90 mb-6 leading-relaxed">
                        {project.impact.testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-2xl">👤</span>
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{project.impact.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{project.impact.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.fullDescription && (
                <div>
                  <h2 className="font-heading text-3xl font-semibold mb-4 text-primary">
                    Project Overview
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    {project.fullDescription}
                  </p>
                </div>
              )}

              {project.technicalDetails && project.technicalDetails.length > 0 && (
                <div>
                  <h2 className="font-heading text-3xl font-semibold mb-4 text-primary">
                    Technical Details
                  </h2>
                  <ul className="space-y-3">
                    {project.technicalDetails.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-foreground/80">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.projectSections && project.projectSections.length > 0 && (
                <div className="space-y-8">
                  {project.projectSections.map((section, idx) => (
                    <div key={idx} className="border-l-4 border-accent/50 pl-6">
                      <h2 className="font-heading text-3xl font-semibold mb-4 text-primary">
                        {section.title}
                      </h2>
                      <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                        {section.content}
                      </p>
                      {section.points && section.points.length > 0 && (
                        <ul className="space-y-3 mt-4">
                          {section.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex gap-3 text-foreground/80">
                              <span className="text-accent mt-1.5">▸</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {project.challenges && (
                <div>
                  <h2 className="font-heading text-3xl font-semibold mb-4 text-primary">
                    Challenges & Solutions
                  </h2>
                  {Array.isArray(project.challenges) ? (
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground/80">
                          <span className="text-accent mt-1.5">▸</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-lg leading-relaxed text-foreground/90">
                      {project.challenges}
                    </p>
                  )}
                </div>
              )}

              {project.outcome && (
                <div>
                  <h2 className="font-heading text-3xl font-semibold mb-4 text-primary">
                    Outcome & Impact
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="font-heading text-xl font-semibold mb-4 text-accent">
                  Project Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 font-accent">Category</div>
                    <div className="font-heading">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 font-accent">Platform</div>
                    <div className="font-heading">{project.platform}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 font-accent">Technologies</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-heading text-xl font-semibold mb-4 text-accent">
                  Interested in Similar Work?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm available for freelance projects and full-time opportunities in game development and XR.
                </p>
                <Link href="/#contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                    Get In Touch
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      {project.impact && (
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.01) 40px, rgba(255,255,255,0.01) 80px)'}} />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-accent font-accent text-sm tracking-[0.3em] uppercase mb-4">Ready to Get Similar Results?</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-primary">
                LET'S BUILD<br />
                <span className="text-accent">YOUR SUCCESS STORY</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Every project starts with a problem worth solving. Tell me yours — I'll show you what's possible with 3D, VR, and XR.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <button className="group relative px-10 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center gap-3">
                      START YOUR PROJECT
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </Link>
                <Link href="/#projects">
                  <button className="px-10 py-4 border border-primary/50 text-primary font-heading font-bold text-lg tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300">
                    VIEW MORE WORK
                  </button>
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-display text-accent mb-1">50+</div>
                  <div className="text-xs text-muted-foreground font-accent tracking-widest uppercase">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-accent mb-1">8+</div>
                  <div className="text-xs text-muted-foreground font-accent tracking-widest uppercase">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-accent mb-1">15+</div>
                  <div className="text-xs text-muted-foreground font-accent tracking-widest uppercase">XR Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-12">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl mb-8 text-primary text-glow-amber">
            MORE PROJECTS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={`/project/${relatedProject.id}`}>
                  <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-amber cursor-pointer">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          {gallery.length > 1 && (
            <>
              <button
                className="absolute left-6 text-white hover:text-primary transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
              >
                <ChevronLeft size={48} />
              </button>
              <button
                className="absolute right-6 text-white hover:text-primary transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
              >
                <ChevronRight size={48} />
              </button>
            </>
          )}

          {/* Image */}
          <div 
            className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[selectedImage]}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-heading text-sm bg-black/50 px-4 py-2 rounded-lg">
            {selectedImage + 1} / {gallery.length}
          </div>

          {/* Keyboard Hint */}
          <div className="absolute bottom-6 right-6 text-white/50 font-heading text-xs">
            ← → to navigate • ESC to close
          </div>
        </div>
      )}
    </div>
  );
}
