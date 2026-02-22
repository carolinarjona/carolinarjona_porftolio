import image_f83644d08e8c63f2fd36bae29b50325962f6f49f from 'figma:asset/f83644d08e8c63f2fd36bae29b50325962f6f49f.png';
import image_8747ec80a46d094381cec91e089a3664b24fe802 from 'figma:asset/8747ec80a46d094381cec91e089a3664b24fe802.png';
import { ArrowRight, Sparkles, Code2, Paintbrush, Eye, Terminal, Users, Languages, PenTool, Trello } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HelloProps {
  onNavigate: (view: 'home' | 'about' | 'projects') => void;
}

export default function Hello({ onNavigate }: HelloProps) {
  return (
    <div className="flex-1 relative font-[Satoshi] bg-[#1e1e1e] animate-in fade-in duration-500">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative p-8 border-b border-white/5">
        
        {/* Status Badge */}
        <div className="absolute top-8 lg:top-12 bg-[#2a2a2a] border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AABF94] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AABF94]"></span>
          </span>
          <span className="text-xs font-[Ubuntu_Condensed] font-bold text-[#AABF94] tracking-wider uppercase">Available for work</span>
        </div>

        <div className="text-center space-y-6 max-w-2xl mx-auto relative z-10 mt-8">
          {/* Avatar */}
          <div className="mx-auto w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#2a2a2a] shadow-xl mb-6 relative group cursor-pointer" onClick={() => onNavigate('about')}>
            <div className="absolute inset-0 bg-[#AABF94]/10 group-hover:bg-transparent transition-colors duration-500" />
             <ImageWithFallback
                src={image_f83644d08e8c63f2fd36bae29b50325962f6f49f}
                alt="Pixel Art Avatar"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif text-[#e8eaed] tracking-tight leading-none">
              Hi, I'm <span className="text-[#AABF94]">Carol.</span>
            </h1>
            
            {/* Headline */}
            <h2 className="text-xl md:text-2xl font-[Ubuntu_Condensed] text-white font-bold tracking-wide uppercase">
              PMO with UX/UI Design and Development Background
            </h2>

            {/* Motto / Description */}
            <p className="text-base md:text-lg text-gray-400 font-[Ubuntu_Condensed] leading-relaxed max-w-lg mx-auto">
              Building Accessible Digital Experiences for Humans.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-8 w-full px-8 md:px-16 flex justify-between text-xs font-[Satoshi] font-bold text-gray-400 uppercase tracking-widest">
          <p className="font-[Ubuntu_Condensed] text-gray-400">Málaga, Spain</p>
          <p className="font-[Ubuntu_Condensed]">EST. {new Date().getFullYear()}</p>
        </div>
      </section>

      {/* --- SECTION 2: ABOUT ME TEASER --- */}
      <section className="py-24 px-8 lg:px-24 border-b border-white/5 bg-[#1e1e1e]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Title */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center border border-[#AABF94]/20 text-[#AABF94]">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#e8eaed]">
              Designing Experiences, Developing Connections
            </h2>
          </div>

          {/* Content Box */}
          <div className="bg-[#2a2a2a] p-8 md:p-10 border-l-4 border-[#AABF94] shadow-lg">
             <p className="md:text-xl text-gray-300 leading-relaxed font-light font-[Ubuntu_Condensed] text-[20px]">
               I am a <span className="text-[#AABF94] font-bold">Project Management Officer (PMO)</span> with deep expertise in <span className="text-[#AABF94] font-bold">UX/UI Design</span> and <span className="text-[#AABF94] font-bold">Frontend Development</span>. My hybrid background allows me to build the crucial bridge between strategy, design, and code—not just in the product, but in the team itself. I specialize in orchestrating projects where technology serves the human, ensuring solutions are accessible, intuitively structured, and delivered with alignment between stakeholders, designers, and developers.
             </p>
          </div>

          {/* Link */}
           <div className="text-center">
            <button 
              onClick={() => onNavigate('about')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#AABF94] text-[#1e1e1e] rounded-full hover:bg-[#e8eaed] transition-all duration-300 shadow-[0_0_20px_rgba(170,191,148,0.2)] font-bold tracking-wide cursor-pointer"
            >
              <span className="font-[Ubuntu_Condensed] text-[20px] uppercase">Read Full Bio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: WORK / PORTFOLIO TEASER --- */}
      <section className="py-24 px-8 lg:px-24 bg-[#161616]">
        <div className="max-w-6xl mx-auto space-y-12">
          
           <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center border border-[#AABF94]/20 text-[#AABF94]">
              <Terminal className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#e8eaed]">Work Areas</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: UX/UI */}
            <div className="bg-[#2a2a2a] p-8 rounded-lg border border-white/5 hover:border-[#AABF94] transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#1e1e1e] rounded flex items-center justify-center text-[#AABF94] mb-6 group-hover:scale-110 transition-transform">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">UX/UI Design</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-[Ubuntu_Condensed]">
                From complex applications to data-rich dashboards. I work closely with stakeholders and clients to translate requirements into visual reality.
              </p>
              <ul className="space-y-2 font-[Ubuntu_Condensed] text-sm text-gray-400">
                <li className="flex items-center gap-2 font-[Ubuntu_Condensed]"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Dashboards & Data Viz</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Design Systems</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>User Research</li>
              </ul>
            </div>

            {/* Card 2: Programming */}
            <div className="bg-[#2a2a2a] p-8 rounded-lg border border-white/5 hover:border-[#AABF94] transition-all duration-300 group">
               <div className="w-12 h-12 bg-[#1e1e1e] rounded flex items-center justify-center text-[#AABF94] mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Development</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-[Ubuntu_Condensed]">
                Making things intuitive and functional. I bridge the gap between design and implementation, using code to solve user problems.
              </p>
              <ul className="space-y-2 font-[Ubuntu_Condensed] text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Angular, TypeScript</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>HTML/CSS/JS</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Power Platform & Retool</li>
              </ul>
            </div>

             {/* Card 3: Accessibility */}
            <div className="bg-[#2a2a2a] p-8 rounded-lg border border-white/5 hover:border-[#AABF94] transition-all duration-300 group">
               <div className="w-12 h-12 bg-[#1e1e1e] rounded flex items-center justify-center text-[#AABF94] mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Accessibility</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-[Ubuntu_Condensed]">
                Not just a checklist, but a mindset. Accessibility is integrated into every step of my process, for both design and code.
              </p>
               <ul className="space-y-2 font-[Ubuntu_Condensed] text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>WCAG Compliance</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Inclusive Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Audits & Testing</li>
              </ul>
            </div>

             {/* Card 4: Project Management */}
            <div className="bg-[#2a2a2a] p-8 rounded-lg border border-white/5 hover:border-[#AABF94] transition-all duration-300 group">
               <div className="w-12 h-12 bg-[#1e1e1e] rounded flex items-center justify-center text-[#AABF94] mb-6 group-hover:scale-110 transition-transform">
                <Trello className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Project Management (PMO)</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-[Ubuntu_Condensed]">
                Project Management Office. I orchestrate communication between technical teams, functional teams, and stakeholders, ensuring alignment and clarity in requirements.
              </p>
               <ul className="space-y-2 font-[Ubuntu_Condensed] text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Technical/functional team coordination</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Risk management & mitigation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#AABF94]"></span>Project monitoring & client reporting</li>
              </ul>
            </div>

          </div>

           <div className="text-center">
              <button 
                onClick={() => onNavigate('projects')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#AABF94] text-[#1e1e1e] rounded-full hover:bg-[#e8eaed] transition-all duration-300 shadow-[0_0_20px_rgba(170,191,148,0.2)] font-bold tracking-wide cursor-pointer"
              >
                <span className="font-[Ubuntu_Condensed] text-[20px]">SEE SELECTED PROJECTS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
        </div>
      </section>
    </div>
  );
}