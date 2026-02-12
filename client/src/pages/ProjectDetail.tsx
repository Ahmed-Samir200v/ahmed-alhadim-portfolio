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
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const project = projects.find((p) => p.id === params?.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const gallery = project.gallery || [project.image];

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
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border glow-amber">
              <img
                src={gallery[selectedImage]}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              />
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

              {project.challenges && (
                <div>
                  <h2 className="font-heading text-3xl font-semibold mb-4 text-primary">
                    Challenges & Solutions
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    {project.challenges}
                  </p>
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
    </div>
  );
}
