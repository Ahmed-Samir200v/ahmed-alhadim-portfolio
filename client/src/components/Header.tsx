import { Link } from 'wouter';
import { Linkedin, Youtube } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663048751930/sftHyPWzPimOxihY.png"
                alt="Al-Hadim Logo"
                className="h-10 transition-transform duration-300 hover:scale-105"
              />
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about">
              <a className="text-sm font-heading hover:text-primary transition-colors">About</a>
            </Link>
            <Link href="/#projects">
              <a className="text-sm font-heading hover:text-primary transition-colors">Projects</a>
            </Link>
            <Link href="/#experience">
              <a className="text-sm font-heading hover:text-primary transition-colors">Experience</a>
            </Link>
            <Link href="/#skills">
              <a className="text-sm font-heading hover:text-primary transition-colors">Skills</a>
            </Link>
            <Link href="/blog" className="text-sm font-heading hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/#contact">
              <a className="text-sm font-heading hover:text-primary transition-colors">Contact</a>
            </Link>
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
  );
}
