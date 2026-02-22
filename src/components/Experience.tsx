import { Briefcase, GraduationCap, Award, FileText } from 'lucide-react';

export default function Experience() {
  const workExperience = [
    {
      title: 'UX/UI Designer',
      company: 'PwC Spain',
      period: 'January 2023 - Present',
      description: '',
      responsibilities: [
        'Plan and execute user research and product analysis.',
        'Identify insights and patterns.',
        'Define information architecture and interaction flows.',
        'Create low and high-fidelity prototypes.',
        'Proficiency in tools like Figma and Miro.',
        'Use and contribute to Design System.',
        'Manage tasks with Azure DevOps.',
        'Create dashboard designs for Power BI.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'PwC Spain',
      period: 'August 2021 - Present',
      description: '',
      responsibilities: [
        'Frontend with Angular, TypeScript, Angular Material and various libraries.',
        'Knowledge of scrum practices, agile philosophy and experience in different ceremonies.',
        'Use of Jira for tracking and task management.',
        'Participation in brainstorming sessions regarding application design and usability.',
        'Management of tools like Zeplin and Invision for mockups of different functionalities.',
        'Knowledge in microfrontends (MFE) integration.',
        'Implemented accessibility best practices (WCAG) to ensure inclusive user experiences.',
        'Developed low-code solutions using Power Platform (Power Apps, Power Pages, Power Automate).',
      ],
    },
    {
      title: 'UX/UI Designer',
      company: 'Tealk',
      period: 'February 2023 - July 2023',
      description: '',
      responsibilities: [
        'User-centered design.',
        'UX Research (qualitative and quantitative research).',
        'Creation of user personas and user journey maps.',
        'Interaction design.',
        'Information architecture.',
        'User flows and interaction patterns.',
        'Design System.',
        'User testing.',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'MedWallet',
      period: 'July 2021 - August 2021',
      description: '',
      responsibilities: [
        'Frontend with Angular, working with TypeScript and SASS.',
        'Backend with NodeJS, Express and configuration packages to create an API with CRUD function.',
        'MySQL management.',
        'First knowledge in agile technologies with Azure DevOps application.',
        'Figma management.',
        'Dailies with the scrum master.',
        'Direct communication with the client.',
        'Remote team work and communication.',
      ],
    },
    {
      title: 'Editor',
      company: 'eMonkeyz eSports Club',
      period: 'February 2019 - August 2021',
      description: '',
      responsibilities: [
        'Web content writing: chronicles, interviews and news with club novelties.',
        'Sending press releases to esports and video game media.',
        'Copywriting for creativities and LinkedIn publications.',
        'Support in creating video scripts.',
        'Necessary texts for internal documents such as the club\'s style manual.',
      ],
    },
    {
      title: 'Text Proofreader',
      company: 'Centro de Ediciones de la Diputación de Málaga (CEDMA)',
      period: 'May 2017 (1 month)',
      description: '',
      responsibilities: [
        'Research and study of followers to perform specific actions.',
        'Knowledge of how a public publishing house works and its areas (reception of originals, proofreading and revision, layout, printing, distribution, promotion and dissemination).',
        'Skills related to editorial management.',
        'Style and spelling correction, both on paper and in computer.',
        'Use of online tools such as RAE or Fundeu.',
      ],
    },
    {
      title: 'Community Manager',
      company: 'EL PUENTE PUBLICIDAD',
      period: 'September 2015 - January 2016 (5 months)',
      description: '',
      responsibilities: [
        'Teamwork in an advertising agency.',
        'Content management and planning for Twitter, Instagram and Facebook for clients from diverse fields (hospitality, clothing stores, wellness centers, etc.).',
        'Copywriting with content creation for own networks and small advertising campaigns.',
      ],
    },
    {
      title: 'Community Manager',
      company: 'Over Gaming',
      period: 'March 2015 - January 2016 (11 months)',
      description: '',
      responsibilities: [
        'Content planning for social networks.',
        'Creation and management of publications for Twitter and Facebook.',
        'Article writing for the web with match summaries, club news and interviews.',
      ],
    },
    {
      title: 'Community Manager',
      company: 'OGSeries',
      period: 'February 2015 - October 2015 (9 months)',
      description: '',
      responsibilities: [
        'Content management and planning for Twitter.',
        'Article writing for the website.',
        'Support for doubts and suggestions raised by users.',
        'Assembly and management of OGSeries in-person events at CC Aqua de Valencia, Granada Gaming in Granada or Gamepolis in Málaga.',
      ],
    },
    {
      title: 'Community Manager',
      company: 'eMonkeyz eSports Club',
      period: 'January 2018 - January 2019',
      description: '',
      responsibilities: [
        'Knowledge of the esports and video game sector.',
        'Content planning for Twitter and Facebook.',
        'Creation of publications, memes and other types of content for social networks.',
        'Live match tracking.',
      ],
    },
    {
      title: 'Community Manager',
      company: 'Kronte',
      period: 'December 2020 - February 2021',
      description: '',
      responsibilities: [
        'Content creation for Twitter, Facebook and Instagram.',
        'Discord user community management.',
        'Newsletter writing for users.',
        'Graphic design for social networks.',
        'Actions to increase engagement.',
      ],
    },
    {
      title: 'Community Manager',
      company: 'Esportia',
      period: 'January 2019 - March 2020',
      description: '',
      responsibilities: [
        'Content planning for Twitter, Facebook and Instagram.',
        'Creation and proposal of publications for social networks.',
        'Live esports match tracking.',
      ],
    },
    {
      title: 'Community Manager',
      company: 'Online Champion',
      period: 'October 2017 - July 2019',
      description: '',
      responsibilities: [
        'Content planning for Twitter, Facebook and Instagram.',
        'Publication creation for social networks.',
        'Graphic design for social network creativities.',
      ],
    },
    {
      title: 'Translator (English-Spanish)',
      company: 'I-Illusions',
      period: 'February 2014 (1 month)',
      description: '',
      responsibilities: [
        'English to Spanish translation of the Element4l video game for Element4l platforms.',
        'Use of tools such as dictionaries, glossaries and documentation about video games.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Application of the European ICT Accessibility Standard (9th ed. 2025)',
      institution: 'UNED, Real Patronato sobre Discapacidad & Fundación ONCE',
      period: '2025',
      description: '',
    },
    {
      degree: 'Introduction to Web Accessibility',
      institution: 'W3Cx by edX',
      period: '2025',
      description: '',
    },
    {
      degree: 'UX/UI Specialist Course',
      institution: 'SocraTech',
      period: '2022',
      description: '',
    },
    {
      degree: 'Certified Scrum Master',
      institution: 'Scrum Manager',
      period: '2021',
      description: '',
    },
    {
      degree: 'Bootcamp Full Stack Web Developer',
      institution: 'Codehouse Academy',
      period: '2021',
      description: '',
    },
    {
      degree: 'Rctool Partner Technical Competency',
      institution: 'Rctool',
      period: '2021',
      description: '',
    },
    {
      degree: 'B2 English Certificate',
      institution: '',
      period: '2019',
      description: '',
    },
    {
      degree: 'Graphic Design Course',
      institution: 'Cálamo & Cran',
      period: '2018-2019',
      description: '',
    },
    {
      degree: 'Master\'s Degree in Spanish Linguistic and Literary Heritage Management',
      institution: 'University of Málaga',
      period: '2016-2017',
      description: '',
    },
    {
      degree: 'Bachelor\'s Degree in Translation and Interpreting',
      institution: 'University of Málaga',
      period: '2010-2014',
      description: '',
    },
  ];

  const certifications = [
    'Web Accessibility Guidelines',
    'Web Accessibility Information Technology',
    'WCAG 2.1 Level AA',
    'UNE EN 301449:2022',
    'User-Centered Design (UCD)',
    'Introduction to Web Accessibility (W3Cx)',
    'Advanced UX Experience',
    'Certified Scrum Master',
    'B2 English Certificate',
    'Rctool Partner Technical Competency',
  ];

  const publications = [
    {
      title: 'Fansubs and video game localization practice: traducological analysis of the Spanish version of To The Moon',
      year: '2018',
      description: 'Analysis of fan translation practices in video games.',
    },
    {
      title: 'Lexical study of alien names in science fiction',
      year: '2017',
      description: 'Linguistic analysis of naming conventions in sci-fi literature.',
    },
  ];

  const skills = {
    'UX Design': ['User Research', 'Usability Testing', 'Accessibility (ARIA, WAVE)', 'UX Writing', 'Information Architecture'],
    'UI Design': ['Wireframing', 'Prototyping', 'Interaction Design', 'Design Systems', 'Visual Design', 'Figma', 'Miro'],
    'Frontend Development': ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'Angular Material', 'Git', 'Responsive Design'],
    'Low-code Development': ['Power Apps', 'Power Pages', 'Power Automate', 'Dataverse', 'SharePoint'],
    'Languages & Linguistics': ['Spanish (Native)', 'English (Fluent - B2)', 'Italian (Intermediate)', 'French (Intermediate)', 'Translation', 'Proofreading', 'Copywriting'],
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {/* Work Experience */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-[#6366f1]" />
              <h2 className="font-['Source_Serif_Pro',serif] text-3xl tracking-tight text-[#e8eaed]">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="border-l-2 border-[#6366f1] pl-6">
                  <h3 className="font-medium text-xl mb-1 text-[#e8eaed]">{job.title}</h3>
                  <p className="text-gray-400 mb-3">{job.company} · {job.period}</p>
                  {job.description && <p className="text-gray-300 leading-relaxed mb-3">{job.description}</p>}
                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start leading-relaxed">
                          <span className="mr-2 text-[#6366f1]">·</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-[#6366f1]" />
              <h2 className="font-['Source_Serif_Pro',serif] text-3xl tracking-tight text-[#e8eaed]">Education & Certifications</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-[#6366f1] pl-6">
                  <h3 className="font-medium text-lg mb-1 text-[#e8eaed]">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution && `${edu.institution} · `}{edu.period}</p>
                  {edu.description && <p className="text-gray-300 leading-relaxed mt-2">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-[#6366f1]" />
              <h2 className="font-['Source_Serif_Pro',serif] text-3xl tracking-tight text-[#e8eaed]">Publications</h2>
            </div>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border-l-2 border-[#6366f1] pl-6">
                  <h3 className="font-medium text-lg mb-1 text-[#e8eaed]">{pub.title}</h3>
                  <p className="text-gray-400 mb-2">{pub.year}</p>
                  <p className="text-gray-300 leading-relaxed">{pub.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-[#6366f1]" />
              <h2 className="font-['Source_Serif_Pro',serif] text-3xl tracking-tight text-[#e8eaed]">Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-medium text-lg mb-3 text-[#6366f1]">{category}</h3>
                  <ul className="space-y-2">
                    {skillList.map((skill, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="mr-2">·</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
