/**
 * Header Component
 * Design: Interactive header inspired by aigency-dark
 * - Scroll-aware: transparent → frosted glass with border on scroll
 * - Animated nav links: text slides up on hover (dual-text technique)
 * - "GET IN TOUCH" CTA button with animated border
 * - Animated hamburger → X transition for mobile
 * - Smooth mobile drawer with staggered link animations
 */

import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Linkedin, Youtube } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const navLinks = [
  { label: 'About',      href: '/#about' },
  { label: 'Projects',   href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills',     href: '/#skills' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Contact',    href: '/#contact' },
];

/** Animated nav link — text slides up on hover (aigency-style) */
function AnimatedNavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative overflow-hidden h-5 flex flex-col group cursor-pointer"
      style={{ width: 'max-content' }}
    >
      {/* Top text (visible by default, slides up on hover) */}
      <span
        className="text-xs font-heading tracking-widest uppercase text-foreground/80 transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
      >
        {label}
      </span>
      {/* Bottom text (hidden below, slides up into view on hover) */}
      <span
        className="absolute top-full text-xs font-heading tracking-widest uppercase text-primary transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
      >
        {label}
      </span>
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/60 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/sftHyPWzPimOxihY.png"
              alt="Al-Hadim Logo"
              className="h-9 transition-all duration-300 hover:scale-105 hover:brightness-110"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <AnimatedNavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* Desktop Right: Social + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>

            {/* CTA Button — animated border */}
            <Link href="/#contact" className="group relative inline-flex items-center overflow-hidden">
              <span className="relative z-10 px-5 py-2 text-xs font-heading tracking-widest uppercase border border-primary/60 text-foreground group-hover:text-background transition-colors duration-300">
                GET IN_TOUCH
              </span>
              {/* Fill animation */}
              <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-10 w-8 h-6 flex flex-col justify-between items-end group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-foreground transition-all duration-300 origin-right ${
                mobileMenuOpen ? 'w-full rotate-[-45deg] translate-y-[11px]' : 'w-full'
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 w-0' : 'w-3/4'
              }`}
            />
            <span
              className={`block h-px bg-foreground transition-all duration-300 origin-right ${
                mobileMenuOpen ? 'w-full rotate-[45deg] -translate-y-[11px]' : 'w-1/2'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 pt-20 pb-10">
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-6 mb-10">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-3xl font-heading tracking-wider uppercase text-foreground/70 hover:text-primary transition-all duration-300 ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${i * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`inline-flex w-fit px-8 py-3 border border-primary text-sm font-heading tracking-widest uppercase text-foreground hover:bg-primary hover:text-background transition-all duration-300 ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms' }}
          >
            GET IN_TOUCH
          </a>

          {/* Mobile Social */}
          <div
            className={`flex items-center gap-6 mt-8 transition-all duration-300 ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '460ms' : '0ms' }}
          >
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube size={22} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
