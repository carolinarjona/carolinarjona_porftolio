import { useState } from 'react';
import Hello from './components/Hello';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact'; // Keeping this if needed for legacy or direct link, though Navigation removed it
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function App() {
  // Removing 'contact' from the main view state type since it's no longer in the nav, 
  // but keeping the string option valid in case internal links use it, or just map it to Home/Footer anchor?
  // Actually, the user removed "Contact" from nav. I'll simplify. 
  // If a user clicks "Get in touch" in Hello.tsx, it goes to mailto now or just scrolls?
  // The user said "Footer... Get in touch... mailto". So likely no dedicated Contact page needed.
  // However, let's keep the state clean.
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'projects'>('home');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleNavigate = (view: 'home' | 'about' | 'projects') => {
    setCurrentView(view);
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    // Optional: scroll to top or keep position? Scroll to top is safer.
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#e8eaed] font-[Satoshi] selection:bg-[#AABF94] selection:text-[#1e1e1e] flex flex-col cursor-default">
      
      <Navigation currentView={currentView} setCurrentView={handleNavigate} />

      {/* Main Content */}
      <main className="pt-20 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          {currentView === 'home' && <Hello onNavigate={handleNavigate} />}
          
          {currentView === 'about' && <AboutMe onNavigate={handleNavigate} />}
          
          {currentView === 'projects' && !selectedProject && (
            <Projects onProjectClick={handleProjectClick} />
          )}
          
          {currentView === 'projects' && selectedProject && (
            <ProjectDetail projectId={selectedProject} onBack={handleBackToProjects} />
          )}
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
