import { Globe, Gamepad2, Zap, Footprints, Book, Utensils, PenTool, Code2, Trello, Languages, GraduationCap, Briefcase, Award, Eye } from 'lucide-react';

interface AboutMeProps {
  onNavigate: (view: 'home' | 'about' | 'projects' | 'contact') => void;
}

export default function AboutMe({ onNavigate }: AboutMeProps) {
  return (
    <div className="flex-1 relative bg-[#1e1e1e] animate-in fade-in duration-500">
      <div className="p-8 lg:p-16 max-w-5xl mx-auto space-y-16 pb-32">
        
        {/* Header Section */}
        <header className="mt-12 lg:mt-0 mb-12 pb-12 space-y-4">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6">
            <div className="text-left flex-1">
              <h1 className="text-4xl lg:text-5xl font-serif mb-2">Carolina Arjona Soler</h1>
              <span className="inline-block bg-[#2a2a2a] text-[#AABF94] px-3 py-1 font-[Ubuntu_Condensed] font-bold text-sm border border-[#AABF94]/30">
                PMO WITH UX/UI DESIGN AND DEVELOPMENT BACKGROUND
              </span>
            </div>
          </div>

          <div className="bg-[#2a2a2a] p-6 border-l-4 border-[#AABF94] font-[Satoshi] text-sm lg:text-base leading-relaxed text-gray-300 shadow-lg">
            <p className="mb-4 font-[Ubuntu_Condensed]">
              <span className="text-[#AABF94] font-bold">Hi! I'm Carolina</span>, a Project Management Officer (PMO) with extensive experience in UX/UI Design and Frontend Development. After years of learning across development and design areas, I've found a new motivation: <span className="text-white underline decoration-[#AABF94]">building the bridge between technical teams, design teams, clients, and stakeholders</span>.
            </p>
            <p className="font-[Ubuntu_Condensed]">
              My hybrid background allows me to manage projects with a comprehensive perspective: from specialized technical consulting on the Microsoft ecosystem (Power Platform) and frontend development (Angular), to guaranteeing user experience quality and accessibility (WCAG). The user has always been the central axis of my projects, and now, from the PMO, I ensure that every solution is created for and centered on them.
            </p>
          </div>
        
          {/* THE LINGUISTIC EDGE - Clean Console Style */}
          <div className="mt-8 flex gap-4 items-start pt-6 border-t border-dashed border-[#AABF94]/20">
              <div className="mt-1 text-[#AABF94]">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                  <span className="text-xs font-bold text-[#AABF94] uppercase tracking-widest">Bonus Insight</span>
                  <p className="text-gray-400 text-sm font-[Ubuntu_Condensed] italic">  
                      "I view code and design as a <span className="text-[#e8eaed] not-italic font-bold">universal language of communication</span>, prioritizing clarity, structure and human perspective."
                  </p>
              </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Experience & Skills */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-2">
                <Briefcase className="w-6 h-6 text-[#AABF94]" />
                <h2 className="text-2xl font-serif">Experience</h2>
              </div>
              
              <div className="space-y-10 relative border-l border-white/10 ml-3 pl-8">
                
                {/* PwC - PMO */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#AABF94]" />
                  <h3 className="text-lg font-bold text-white font-[Ubuntu_Condensed]">Project Management Officer (PMO)</h3>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Jan 2026 - Present</p>
                  <p className="text-[#AABF94] font-[Ubuntu_Condensed] font-bold text-sm mb-2">PwC Spain</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li className="font-[Ubuntu_Condensed]">Coordinate communication between technical teams, functional teams, and stakeholders, ensuring alignment and clarity in requirements.</li>
                    <li className="font-[Ubuntu_Condensed]">Manage risks by proactively identifying issues, developing solutions, and presenting alternatives to clients with a focus on mitigation.</li>
                    <li className="font-[Ubuntu_Condensed]">Oversee project performance and present progress reports to clients.</li>
                    <li className="font-[Ubuntu_Condensed]">Support testing and quality assurance tasks, verifying that developed solutions align with functional documentation and client expectations.</li>
                    <li className="font-[Ubuntu_Condensed]">Provide specialized technical consulting on the Microsoft Power Platform ecosystem (Power Apps, Power BI, Power Pages, Power Automate, Dataverse).</li>
                  </ul>
                </div>

                {/* PwC - UX/UI Designer */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#2a2a2a] border border-[#AABF94]" />
                  <h3 className="text-lg font-bold text-white font-[Ubuntu_Condensed]">UX/UI Designer</h3>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Jan 2023 - Dec 2025</p>
                  <p className="text-[#AABF94] font-[Ubuntu_Condensed] font-bold text-sm mb-2">PwC Spain</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li className="font-[Ubuntu_Condensed]">Planned and executed user research and product analysis.</li>
                    <li className="font-[Ubuntu_Condensed]">Defined information architecture and interaction flows.</li>
                    <li className="font-[Ubuntu_Condensed]">Created low and high-fidelity prototypes using Figma and Miro.</li>
                    <li className="font-[Ubuntu_Condensed]">Used and contributed to Design Systems.</li>
                    <li className="font-[Ubuntu_Condensed]">Designed dashboards for Power BI.</li>
                  </ul>
                </div>

                {/* PwC - Frontend & Power Platform Developer */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#2a2a2a] border border-[#AABF94]" />
                  <h3 className="text-lg font-bold text-white font-[Ubuntu_Condensed]">Front-end & Power Platform Developer</h3>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Aug 2021 - Dec 2025</p>
                  <p className="text-[#AABF94] font-[Ubuntu_Condensed] font-bold text-sm mb-2">PwC Spain</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li className="font-[Ubuntu_Condensed]">Frontend development with Angular, TypeScript, Angular Material, and microfrontends (MFE) integration.</li>
                    <li className="font-[Ubuntu_Condensed]">Low-code development on Power Platform: Power Apps, Power Pages, Power Automate, and data modeling in Dataverse.</li>
                    <li className="font-[Ubuntu_Condensed]">Configured and administered Azure environments.</li>
                    <li className="font-[Ubuntu_Condensed]">Implemented accessibility best practices (WCAG).</li>
                    <li className="font-[Ubuntu_Condensed]">Actively participated in Agile (Scrum) ceremonies using Jira/Azure DevOps.</li>
                  </ul>
                </div>

                {/* TEALK */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#2a2a2a] border border-[#AABF94]" />
                  <h3 className="text-lg font-bold text-white font-[Ubuntu_Condensed]">UX/UI Designer</h3>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Feb 2023 - July 2023</p>
                  <p className="text-[#AABF94] font-[Ubuntu_Condensed] font-bold text-sm mb-2">TEALK</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li className="font-[Ubuntu_Condensed]">Focused entirely on User-Centered Design, conducting qualitative and quantitative UX Research.</li>
                    <li className="font-[Ubuntu_Condensed]">Developed User Personas, User Map Journeys, and Interaction Design specifications.</li>
                  </ul>
                </div>

                {/* MedWallet */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#2a2a2a] border border-[#AABF94]" />
                  <h3 className="text-lg font-bold text-white font-[Ubuntu_Condensed]">Full Stack Developer</h3>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">July 2021 - Aug 2021</p>
                  <p className="text-[#AABF94] font-[Ubuntu_Condensed] font-bold text-sm mb-2">MedWallet</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li className="font-[Ubuntu_Condensed]">Worked on Frontend (Angular, TypeScript, SASS) and Backend (NodeJS, Express, MySQL).</li>
                    <li className="font-[Ubuntu_Condensed]">Focus on fast development cycles and client communication within an Agile environment.</li>
                  </ul>
                </div>

                 {/* Content & Communication */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#2a2a2a] border border-[#AABF94]" />
                  <h3 className="text-lg font-bold text-white font-[Ubuntu_Condensed]">Content & Communication Roles</h3>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Feb 2014 - Feb 2021</p>
                  <p className="text-[#AABF94] font-[Ubuntu_Condensed] font-bold text-sm mb-2">Previous Experience</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li className="font-[Ubuntu_Condensed]">Served as a Redactor and Community Manager, specializing in web content and copywriting.</li>
                    <li className="font-[Ubuntu_Condensed]">Worked as a Copyeditor and Text Proofreader for private clients and in an internship at a public publishing house, demanding meticulous attention to linguistic structure and style.</li>
                    <li className="font-[Ubuntu_Condensed]">Performed English-Spanish translation for the Element4l videogame, applying linguistic rigor.</li>

                  </ul>
                </div>

              </div>
            </section>

            {/* Skills Grid */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-2">
                <Zap className="w-6 h-6 text-[#AABF94]" />
                <h2 className="text-2xl font-serif">Core Expertise</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#2a2a2a] p-4 rounded border border-white/5 hover:border-[#AABF94] transition-colors flex items-start gap-4">
                  <PenTool className="w-6 h-6 text-[#AABF94] mt-1" />
                  <div>
                    <p className="font-bold text-sm font-[Ubuntu_Condensed] text-white">Design & UX</p>
                    <p className="text-xs text-gray-400 font-[Ubuntu_Condensed] mt-1">User Research, Information Architecture, Wireframing (Figma/Miro), Design Systems.</p>
                  </div>
                </div>
                <div className="bg-[#2a2a2a] p-4 rounded border border-white/5 hover:border-[#AABF94] transition-colors flex items-start gap-4">
                  <Code2 className="w-6 h-6 text-[#AABF94] mt-1" />
                  <div>
                    <p className="font-bold text-sm font-[Ubuntu_Condensed] text-white">Frontend & Code</p>
                    <p className="text-xs text-gray-400 font-[Ubuntu_Condensed] mt-1">Angular, TypeScript, HTML/CSS, Microfrontends (MFE), Low-Code (Power Platform).</p>
                  </div>
                </div>
                <div className="bg-[#2a2a2a] p-4 rounded border border-white/5 hover:border-[#AABF94] transition-colors flex items-start gap-4">
                  <Eye className="w-6 h-6 text-[#AABF94] mt-1" />
                  <div>
                    <p className="font-bold text-sm font-[Ubuntu_Condensed] text-white">Accessibility</p>
                    <p className="text-xs text-gray-400 font-[Ubuntu_Condensed] mt-1">Strengthening Web Accessibility Guidelines (WCAG) and standards (UNE EN 301449).</p>
                  </div>
                </div>
                <div className="bg-[#2a2a2a] p-4 rounded border border-white/5 hover:border-[#AABF94] transition-colors flex items-start gap-4">
                  <Trello className="w-6 h-6 text-[#AABF94] mt-1" />
                  <div>
                    <p className="font-bold text-sm font-[Ubuntu_Condensed] text-white">Methodologies</p>
                    <p className="text-xs text-gray-400 font-[Ubuntu_Condensed] mt-1">Agile, Scrum (Scrum Master Certified), Azure DevOps, Jira.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Education, Certifications, Languages */}
          <div className="space-y-12">
            
            {/* Education */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-2">
                <GraduationCap className="w-6 h-6 text-[#AABF94]" />
                <h2 className="text-2xl font-serif">Education</h2>
              </div>
              <div className="space-y-6 font-[Ubuntu_Condensed]">
                <div>
                  <p className="font-bold text-white text-sm">Specialist in UX/UI</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Jan 2022 - Mar 2022</p>
                  <p className="text-gray-400 text-xs font-bold">SocraTech</p>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Bootcamp Full Stack Web Developer</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Mar 2021 - July 2021</p>
                  <p className="text-gray-400 text-xs font-bold">Codehouse Academy</p>
                </div>
                 <div>
                  <p className="font-bold text-white text-sm">Graphic Design Course</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">2018 - 2019</p>
                  <p className="text-gray-400 text-xs font-bold">CÁLAMO&CRAN</p>
                </div>
                 <div>
                  <p className="font-bold text-white text-sm">Master in Linguistic Management and Translation</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Oct 2016 - Dec 2017</p>
                  <p className="text-gray-400 text-xs font-bold">University of Málaga</p>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Degree in Translation and Interpretation</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">Sept 2010 - Sept 2014</p>
                  <p className="text-gray-400 text-xs font-bold">Universidad de Málaga</p>
                </div>
              </div>
            </section>

             {/* Certifications */}
             <section>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-2">
                <Award className="w-6 h-6 text-[#AABF94]" />
                <h2 className="text-2xl font-serif">Certifications</h2>
              </div>
              <div className="space-y-6 font-[Ubuntu_Condensed]">
                <div>
                  <p className="font-bold text-white text-sm">Retool Partner Technical Competency</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">2025</p>
                  <p className="text-gray-400 text-xs font-bold">Retool</p>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Application of the ICT Accessibility European Standard</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">2025</p>
                  <p className="text-gray-400 text-xs font-bold">UNED & Fundación ONCE</p>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Introduction to Web Accessibility</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">2025</p>
                  <p className="text-gray-400 text-xs font-bold">edX Verified Certificate</p>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Scrum Master</p>
                  <p className="text-gray-500 text-xs font-[Ubuntu_Condensed] mb-1">2021</p>
                  <p className="text-gray-400 text-xs font-bold">Scrum Manager</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-2">
                <Languages className="w-6 h-6 text-[#AABF94]" />
                <h2 className="text-2xl font-serif">Languages</h2>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between items-center font-[Ubuntu_Condensed]">
                  <span className="font-bold text-sm">Spanish</span>
                  <span className="text-gray-400 text-xs font-[Ubuntu_Condensed] font-bold">Native</span>
                </div>
                 <div className="flex justify-between items-center font-[Ubuntu_Condensed]">
                  <span className="font-bold text-sm">English</span>
                  <span className="text-gray-400 text-xs font-[Ubuntu_Condensed] font-bold">B2 Certified</span>
                </div>
                <div className="flex justify-between items-center font-[Ubuntu_Condensed]">
                  <span className="font-bold text-sm">French</span>
                  <span className="text-gray-400 text-xs font-[Ubuntu_Condensed] font-bold">Intermediate</span>
                </div>
                 <div className="flex justify-between items-center font-[Ubuntu_Condensed]">
                  <span className="font-bold text-sm">Italian</span>
                  <span className="text-gray-400 text-xs font-[Ubuntu_Condensed] font-bold">Basic</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}