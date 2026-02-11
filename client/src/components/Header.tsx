import { useState } from 'react';
import { Link } from 'wouter';
import { Linkedin, Youtube, Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/sftHyPWzPimOxihY.png"
              alt="Al-Hadim Logo"
              className="h-10 transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-sm font-heading hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#projects" className="text-sm font-heading hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/#experience" className="text-sm font-heading hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="/#skills" className="text-sm font-heading hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="/blog" className="text-sm font-heading hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-heading hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/#about" className="text-sm font-heading hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/#projects" className="text-sm font-heading hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/#experience" className="text-sm font-heading hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </Link>
              <Link href="/#skills" className="text-sm font-heading hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
              <Link href="/blog" className="text-sm font-heading hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/#contact" className="text-sm font-heading hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex items-center gap-4 pt-2 border-t border-border">
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
        )}
      </div>
    </nav>
  );
}
