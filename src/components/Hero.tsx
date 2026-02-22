import { Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div>
            <h1 className="font-['Source_Serif_Pro',serif] text-5xl md:text-6xl mb-4 tracking-tight text-[#e8eaed]">
              Hi, I'm Carol.
            </h1>
            <p className="text-gray-400 mb-4">Málaga, Andalucía, España</p>
            <div className="h-1 w-16 bg-[#6366f1]" />
          </div>

          <div className="space-y-6 text-gray-300 max-w-3xl">
            <p className="text-xl leading-relaxed">
              UX/UI Designer & Frontend Developer specializing in <span className="font-medium text-[#e8eaed]">accessibility</span> and <span className="font-medium text-[#e8eaed]">inclusive design</span>.
            </p>

            <p className="leading-relaxed">
              I'm passionate about building accessible and intuitive digital experiences for everyone, uniting the creativity of design with the solidity of code. My hybrid approach allows me to bridge the gap between UX vision and technical implementation.
            </p>

            <p className="leading-relaxed">
              I specialize in digital accessibility (WCAG, UNE EN 301449), user research, and design systems. I excel in frontend development (Angular, TypeScript, HTML/CSS) and low-code platforms (Power Platform), creating scalable and functional solutions.
            </p>

            <p className="leading-relaxed">
              My background in <span className="font-medium text-[#e8eaed]">Spanish linguistics and translation</span> combined with technical expertise positions me uniquely in the AI era, where language precision and user experience converge. The bridge between my technological side and my linguistic side is the <span className="font-medium text-[#e8eaed]">user</span>—that's why UX/UI design and accessibility are central to my work.
            </p>

            <p className="leading-relaxed">
              I'm ready to contribute my experience in inclusive technology projects that seek to generate positive change.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/carolinarjona/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 rounded hover:border-[#6366f1] hover:bg-[#6366f1]/10 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="mailto:carolinarjona@gmail.com"
              className="p-3 border border-white/10 rounded hover:border-[#6366f1] hover:bg-[#6366f1]/10 transition-colors"
              aria-label="Email contact"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}