import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#1e1e1e] py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Contact Section */}
        <div className="text-center md:text-left space-y-2">
          <p className="font-[Ubuntu_Condensed] font-bold text-sm text-gray-400 uppercase tracking-wider">Get in touch</p>
          <a 
            href="mailto:carolinarjona@gmail.com" 
            className="text-2xl md:text-3xl font-serif text-[#e8eaed] hover:text-[#AABF94] transition-colors block cursor-pointer"
          >
            carolinarjona@gmail.com
          </a>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <a 
            href="https://www.linkedin.com/in/carolinarjona/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#2a2a2a] text-[#AABF94] hover:bg-[#AABF94] hover:text-[#1e1e1e] transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          
          <div className="text-center md:text-right">
            <p className="font-[Ubuntu_Condensed] text-xs text-gray-400">
              Carolina Arjona — {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
