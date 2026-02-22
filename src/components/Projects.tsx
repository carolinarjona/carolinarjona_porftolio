import { ArrowRight, Globe } from 'lucide-react';

interface ProjectsProps {
  onProjectClick: (projectId: number) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const projects = [
    {
      id: 6,
      title: 'Internal Tools & Power Platform Strategy',
      sector: 'Public Agency',
      description: 'Led technical consulting and project management for the development of internal tools at a public Agency. Orchestrated communication between cross-functional teams, ensuring alignment between technical implementation, user needs and stakeholder requirements.',
      tags: ['Project Management (PMO)', 'Power Platform', 'Technical Consulting', 'UX Strategy', 'Cross-functional Coordination'],
      color: '#AABF94',
    },
    {
      id: 1,
      title: 'Investment Management Platform',
      sector: 'Financial Sector',
      description: 'Designed and implemented a platform to manage sensitive client data in the investment sector, with emphasis on impeccable and accessible form validation.',
      tags: ['UX/UI Design', 'Power Apps', 'Power Pages', 'Power Automate'],
      color: '#AABF94',
    },
    {
      id: 2,
      title: 'Tracking Dashboard Design',
      sector: 'Retail Sector',
      description: 'Created accessible dashboards for data analysis in supermarkets, transforming large volumes of data into comprehensible visualizations for all users.',
      tags: ['UX/UI Design', 'Data Visualization', 'Accessibility', 'Power BI'],
      color: '#AABF94',
    },
    {
      id: 3,
      title: 'Accessibility Guidelines',
      sector: 'Insurance Sector',
      description: 'Developed comprehensive accessibility guidelines for an insurance company, preparing their digital platforms for new European regulations.',
      tags: ['Accessibility Consulting', 'UX Writing', 'WCAG 2.1', 'Documentation'],
      color: '#AABF94',
    },
    {
      id: 4,
      title: 'Public Data Management Platform',
      sector: 'Energy Sector',
      description: 'Created a platform to organize and efficiently manage public information from official bulletins, transforming large volumes of heterogeneous data into an intuitive and easy-to-use interface.',
      tags: ['UX/UI Design', 'Power Apps', 'Data Management', 'SQL'],
      color: '#AABF94',
    },
    {
      id: 5,
      title: 'Consulting Data Management Platform',
      sector: 'Consulting Sector',
      description: 'Designed a platform enabling consultants to ingest, clean, and map large datasets (CSV, Excel, TXT), optimizing the workflow for analysts with intuitive interfaces for complex processes.',
      tags: ['UX/UI Design', 'Angular', 'Microfrontends', 'WebSockets'],
      color: '#AABF94',
    },
  ];

  return (
    <div className="flex-1 bg-[#1e1e1e] font-[Satoshi] animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto p-8 lg:p-16 pb-32">
        
        <div className="mb-16 mt-12 lg:mt-0">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight text-[#e8eaed]">
            Selected Projects
          </h1>
          <div className="h-1 w-16 bg-[#AABF94]" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group text-left border border-white/10 rounded-lg p-8 hover:border-[#AABF94] transition-all duration-300 hover:shadow-[0_0_20px_rgba(170,191,148,0.1)] bg-[#2a2a2a] cursor-pointer"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2 font-[Ubuntu_Condensed] font-bold uppercase tracking-wider">{project.sector}</p>
                  <h2 className="font-serif text-2xl mb-3 tracking-tight text-[#e8eaed]">
                    {project.title}
                  </h2>
                  <div
                    className="h-0.5 w-12 mb-4 transition-all duration-300 group-hover:w-24"
                    style={{ backgroundColor: project.color }}
                  />
                </div>

                <p className="text-gray-300 leading-relaxed font-[Ubuntu_Condensed]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#1e1e1e] border border-white/5 text-xs text-gray-300 rounded-full font-[Ubuntu_Condensed]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-[#AABF94] transition-colors pt-2 font-[Ubuntu_Condensed] font-bold">
                  <span>View project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}