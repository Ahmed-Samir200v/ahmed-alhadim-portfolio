import { Mail, Linkedin, Youtube } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
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
    </footer>
  );
}
