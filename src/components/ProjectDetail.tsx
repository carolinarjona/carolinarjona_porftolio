import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const projectsData = {
    6: {
      title: 'Internal Tools & Power Platform Strategy',
      sector: 'Public Agency',
      subtitle: 'Led technical consulting and project management for the development of internal tools at a public Agency. Orchestrated communication between cross-functional teams, ensuring alignment between technical implementation, user needs and stakeholder requirements.',
      approach: {
        title: 'Approach',
        intro: 'As a PMO with a UX/UI and development background, my approach focused on aligning technical execution with user needs and business goals while coordinating a cross-cultural team:',
        items: [
          {
            title: 'Technical consulting on Microsoft Power Platform',
            description: 'Provided specialized guidance on Power Apps, Power BI, Power Pages, Power Automate, and Dataverse, including development logic and best practices.',
          },
          {
            title: 'UX/UI strategy for high adoption',
            description: 'Ensured solutions were intuitive and user-centered from the start, applying UX research principles to guarantee adoption by internal teams.',
          },
          {
            title: 'Cross-functional coordination (English-speaking team)',
            description: 'Facilitated communication between technical teams, functional teams, and stakeholders, ensuring clarity in requirements and alignment across all parties in English.',
          },
          {
            title: 'Comprehensive documentation',
            description: 'Developed technical and functional documentation to support development, testing and future maintenance.',
          },
        ],
      },
      solution: {
        title: 'Solution',
        intro: 'My dual role as PMO and technical consultant ensured that the internal tools were not only technically robust but also perfectly aligned with user expectations and strategic goals:',
        items: [
          {
            title: 'End-to-end project oversight',
            subitems: [
              'Monitored project performance and presented regular progress reports to the client, ensuring transparency and alignment with expectations.',
              'Managed risks by proactively identifying issues, developing mitigation strategies, and presenting alternatives to stakeholders.',
            ],
          },
          {
            title: 'Quality assurance and testing',
            subitems: [
              'Supported testing tasks to verify that developed solutions matched functional documentation and user needs.',
              'Ensured accessibility and usability standards were met throughout the development process.',
            ],
          },
          {
            title: 'Technical implementation support',
            subitems: [
              'Provided ongoing consulting on Power Platform development, including programming logic, data modeling in Dataverse, and integration with external services.',
              'Ensured that technical decisions were always aligned with the broader project strategy and user requirements.',
            ],
          },
        ],
      },
      conclusion: {
        title: 'Conclusions and Learnings',
        content: 'This project reinforced the value of a hybrid PMO profile. My ability to understand both the technical depths of Power Platform and the nuances of UX/UI design allowed me to orchestrate a solution that truly served its users while meeting strict stakeholder requirements. Coordinating an international team in English highlighted the importance of clear communication in cross-cultural projects. The internal tools developed are now used daily by agency staff, with high adoption rates and positive feedback on their intuitiveness and efficiency.',
      },
    },
    1: {
      title: 'Investment Management Platform',
      sector: 'Financial Sector',
      subtitle: 'Designed and implemented a platform to manage sensitive client data in the investment sector. The key challenge was ensuring that every interaction, especially in form validation, was impeccable and accessible, given the crucial nature of the information.',
      approach: {
        title: 'Approach',
        intro: 'I integrated accessibility from the start with user-centered design (UCD):',
        items: [
          {
            title: 'Analysis and prototyping in Figma',
            description: 'Solid foundation for usability and accessibility on low-code platforms (Power Apps and Power Pages), allowing rapid iteration on flows and interaction.',
          },
          {
            title: 'Dual decisions (design and development)',
            description: 'My dual role ensured technical feasibility and correct implementation.',
          },
          {
            title: 'Emphasis on form validations',
            description: 'Clear and accessible communication of errors, vital to avoid frustrations with sensitive financial data.',
          },
        ],
      },
      solution: {
        title: 'Solution',
        intro: 'My proposals focused on clarity and usability, applying inclusive design principles:',
        items: [
          {
            title: 'Color system, contrast and typography',
            subitems: [
              'Exhaustive study to adapt the brand palette, ensuring high contrasts (e.g. #FFFFFF or #F7F7F7 with #333333).',
              'Highlighted interactive elements (#8F1812).',
              'Links with underline and WCAG AA contrast.',
              'Segoe UI selected for its legibility, with responsive typographic scale.',
            ],
          },
          {
            title: 'Semantic structure',
            subitems: [
              'Hierarchical HTML (<h1>, <nav>, <main>) for logical and accessible navigation (screen readers).',
              'Use of WAVE and WAI-ARIA attributes (aria-label) when native HTML was not sufficient.',
            ],
          },
          {
            title: 'Accessible form validation',
            subitems: [
              'Real-time validations with immediate and contextual feedback.',
              'Descriptive error messages (e.g. "the IBAN pattern is ES followed by 22 numbers"), not relying on color alone.',
              'Clear visual indicators and disabled submit button to guide the user.',
            ],
          },
          {
            title: 'Modal management',
            subitems: [
              'Visible keyboard focus confined to the modal.',
              'Esc key closure.',
            ],
          },
          {
            title: 'Interaction and best practices',
            subitems: [
              'Descriptive links (e.g. "Continue reading the article on emerging markets").',
              'Clear status messages after actions (success, error or sending).',
            ],
          },
        ],
      },
      conclusion: {
        title: 'Conclusions and Learnings',
        content: 'As a frontend developer, I was fundamental in the implementation on Power Apps and Power Pages, ensuring that each accessibility decision was translated into code (accessibility with JavaScript, Bootstrap documentation). This project reaffirmed the importance of early accessibility. Users managed sensitive data with confidence. I learned the relevance of my dual role for making comprehensive decisions, preparing me for future design and development projects with a focus on inclusive experience and quality.',
      },
    },
    2: {
      title: 'Tracking Dashboard Design',
      sector: 'Retail Sector',
      subtitle: 'Designed dashboards for data analysis in supermarkets, offering clear and actionable information. The challenge was to transform large volumes of data into comprehensible and accessible visualizations for everyone, including users with visual or cognitive impairments.',
      approach: {
        title: 'Approach',
        intro: 'As a UX/UI designer, my methodology focused on empathy and visual clarity:',
        items: [
          {
            title: 'Research and benchmarking',
            description: 'Meetings with stakeholders and analysis of existing dashboards to identify needs and best practices.',
          },
          {
            title: 'Strategic chart selection',
            description: 'I chose appropriate chart types, considering their potential for accessible interpretation and inherent clarity.',
          },
          {
            title: 'Navigation design and storytelling',
            description: 'I organized information logically and sequentially, guiding the user to facilitate comprehension.',
          },
          {
            title: 'Realistic prototyping',
            description: 'I developed high-fidelity prototypes in Figma to present intuitive and effective proposals, validating design decisions.',
          },
        ],
      },
      solution: {
        title: 'Solution',
        intro: 'My solutions focused on legibility, inclusion and optimizing the user experience in data visualization:',
        items: [
          {
            title: 'Accessible charts from conception',
            subitems: [
              'Integrated data labels eliminated dependence on external legends (avoiding hover), reducing cognitive load.',
              'Strategic white space delimited sections in donut/pie charts, improving visual association.',
              'For multiple visual differentiators, I combined color with shapes (circles, squares, triangles) in complex charts, ensuring legibility for color deficiencies.',
            ],
          },
          {
            title: 'Superior contrast and legibility',
            subitems: [
              'Rigorous contrast analysis to exceed minimum WCAG ratios.',
              'Grayscale testing to confirm hierarchy and data distinction without relying on color.',
              'Appropriate font sizes to guarantee legibility without zoom.',
            ],
          },
          {
            title: 'User experience optimization',
            subitems: [
              'I proposed improvements in organization and simplification of charts.',
              'I added useful and logical filters that facilitated reading and fluid navigation, allowing users to customize their view.',
            ],
          },
        ],
      },
      conclusion: {
        title: 'Conclusions and Learnings',
        content: 'This project demonstrated how careful design centered on accessibility transforms complex data into comprehensible and actionable information, prioritizing visual clarity. My experience was key to deepening how information is consumed and how design decisions impact interpretation. I learned to manage visualizations of large volumes with an inclusive perspective and the importance of a consistent design system. The ideal next step would be to conduct exhaustive user testing in Power BI to validate effectiveness and continue iterating.',
      },
    },
    3: {
      title: 'Accessibility Guidelines',
      sector: 'Insurance Sector',
      subtitle: 'Developed an accessibility guide for an insurance company, preparing their digital platforms for new European regulations, and ensuring that design and development adhered to inclusive standards and the information was easily comprehensible.',
      approach: {
        title: 'Approach',
        intro: 'My role was fundamental in translating complex audit findings into clear and actionable guidelines. My methodology was based on a research and strategic communication process:',
        items: [
          {
            title: 'Direct meeting with the client',
            description: 'I understood their specific needs, internal culture and state of their platforms, contextualizing the guide to be as relevant as possible for their operation.',
          },
          {
            title: 'Exhaustive audit analysis',
            description: 'I reviewed the accessibility audit and design system components to identify barriers, analyzing both existing problems and their root causes.',
          },
          {
            title: 'Creation of specialized guides',
            description: 'I developed two basic guides (UX/UI designers and frontend developers), based on WCAG 2.1 level AA and UNE EN 301449:2022, guaranteeing their relevance and regulatory compliance.',
          },
        ],
      },
      solution: {
        title: 'Solution',
        intro: 'My solutions materialized in a clear, pragmatic document that was easy for teams to adopt:',
        items: [
          {
            title: 'Clear and organized writing',
            subitems: [
              'Manual designed for easy comprehension, structuring errors and providing direct technical solutions and best practices.',
              'Excessive jargon was avoided to facilitate reading and assimilation of concepts.',
            ],
          },
          {
            title: 'Practical and visual examples',
            subitems: [
              'Specific guidelines (e.g. alt on images) and proposals for design systems that avoided exclusive use of color.',
              'Screenshots or descriptions of real scenarios were included for better understanding.',
            ],
          },
          {
            title: 'Collaborative iterations',
            subitems: [
              'I worked with the client, collecting their feedback until achieving a manual adjusted to their operational needs.',
              'This co-creation ensured relevance and high probability of internal adoption.',
            ],
          },
          {
            title: 'Focus on WCAG AA requirements',
            subitems: [
              'Selected criteria based on relevant WCAG 2.1 recommendations, with examples applicable to web platforms and different media.',
              'Ensured comprehensive coverage.',
            ],
          },
        ],
      },
      conclusion: {
        title: 'Conclusions and Learnings',
        content: 'As an accessibility consultant / expert in UX/UI guidelines and accessible development, I was key in the research, writing and structuring of a technical manual that would impact future designs and developments. I applied my UX Writing skills to translate complex accessibility concepts into clear and executable guidelines. This project was a crucial UX Writing exercise and an invaluable opportunity to deepen my understanding and practical application of WCAG 2.1 and UNE EN 301449:2022. It demonstrated my ability to analyze, synthesize and communicate accessibility technical guidelines effectively. The implementation of these guidelines in the insurance company marked a significant milestone in their digital strategy, reinforcing my unwavering commitment to inclusive design and the creation of equitable, high-impact digital products.',
      },
    },
    4: {
      title: 'Public Data Management Platform',
      sector: 'Energy Sector',
      subtitle: 'Created a platform to organize and efficiently manage public information from official bulletins. The challenge was transforming large volumes of heterogeneous data into an intuitive and easy-to-use interface, optimizing user capacity to find, process and save relevant information from the energy sector.',
      approach: {
        title: 'Approach',
        intro: 'As a UX/UI designer and frontend developer, my methodology focused on information organization, workflow efficiency and interface adaptability:',
        items: [
          {
            title: 'Requirements gathering',
            description: 'Meticulous process with users and stakeholders to understand their search and data management patterns, identifying pain points and opportunities.',
          },
          {
            title: 'Iterative design in Figma',
            description: 'Creation of wireframes and prototypes to visualize and validate interaction flows, allowing quick adjustments based on feedback.',
          },
          {
            title: 'Continuous iterations and feedback',
            description: 'Essential to adapt the platform to evolving needs, adjusting functionalities and interface in an agile and collaborative manner.',
          },
        ],
      },
      solution: {
        title: 'Solution',
        intro: 'My design solutions focused on user efficiency and interface clarity, making data complexity manageable:',
        items: [
          {
            title: 'Intuitive interface for data management',
            subitems: [
              'Designed logical navigation and clear visual elements (filters, advanced search) that facilitated interaction and management of public information.',
              'Enabled users to process complex data with greater speed and autonomy.',
              'Search results were presented in an organized manner for quick reading.',
            ],
          },
          {
            title: 'Effective visualization in dashboards',
            subitems: [
              'My experience guaranteed a clear, legible, attractive and easy-to-interpret presentation of key information, crucial for decision-making.',
              'Appropriate charts were used to represent trends and information volumes.',
            ],
          },
          {
            title: 'Adaptability and design evolution',
            subitems: [
              'The platform was designed to be robust and flexible (modular approach).',
              'Allowed easy incorporation of new functionalities (alerts, integration) and continuous improvements based on real use and changing client needs.',
            ],
          },
        ],
      },
      conclusion: {
        title: 'Conclusions and Learnings',
        content: 'My role as a frontend developer was crucial to bring designs and functionalities to life. I was responsible for the SQL database connection and developing the main interface functionality: visualization of extracted information (filtered by AI) and master database management. My capacity to implement iterations and new functionalities was fundamental for the project\'s success and evolution. This project highlighted my ability to design and develop solutions that handle large volumes of information, transforming complexity into efficiency. The positive and constant user feedback validated the good adaptation, a very valuable learning about the impact of user-centered design. The platform\'s flexibility allowed rapid adoption and high user satisfaction, which underscores my capacity to create solutions that not only solve technical problems, but also improve teams\' daily productivity.',
      },
    },
    5: {
      title: 'Consulting Data Management Platform',
      sector: 'Consulting Sector',
      subtitle: 'The objective was to design a platform that would allow a consulting firm to ingest, clean and map large datasets (CSV, Excel, TXT). The challenge was creating an intuitive interface for complex processes (joins, new rows, aggregations) and chart visualization, optimizing the workflow for analysts and consultants.',
      approach: {
        title: 'Approach',
        intro: 'As a UX/UI designer and frontend developer, my methodology focused on international collaboration and technical innovation:',
        items: [
          {
            title: 'Collaboration with Product Owner (USA)',
            description: 'Direct meetings to understand global requirements and ensure a unified vision, key to aligning expectations and results.',
          },
          {
            title: 'Design in Figma and frontend development in Angular',
            description: 'Detailed prototypes and user flows translated into robust and scalable frontend development in Angular, enabling a high-performance and efficiently maintained application.',
          },
          {
            title: 'Implementation of advanced technologies',
            description: 'Worked with Microfrontends (MFEs) for modularity and scalability. Implemented WebSockets for bidirectional real-time communication, essential for instantaneous data and a fluid experience.',
          },
          {
            title: 'Design system integration',
            description: 'Utilized the firm\'s proprietary design system, ensuring visual and functional coherence, which optimized development and user experience with reusable components.',
          },
          {
            title: 'Unit testing',
            description: 'Contributed to the creation and maintenance of unit tests for frontend components to ensure code quality, functionality stability and facilitate maintenance.',
          },
        ],
      },
      solution: {
        title: 'Solution',
        intro: 'My design solutions focused on efficiency and user experience for data management, transforming technical processes into intuitive and controllable interactions:',
        items: [
          {
            title: 'Intuitive workflows',
            subitems: [
              'Designed a step-by-step flow for data ingestion, cleaning and mapping, guiding the user clearly and logically, simplifying complex processes.',
              'Each stage was clearly defined, reducing the learning curve and errors.',
            ],
          },
          {
            title: 'Clear process visualization',
            subitems: [
              'The interface allowed users to understand the state of their data at each phase (loading, cleaning, transformation and mapping).',
              'Included progress indicators and real-time feedback, improving transparency and control.',
            ],
          },
          {
            title: 'Adaptability to diverse data formats',
            subitems: [
              'The design contemplated the ease of handling multiple file formats (CSV, Excel, TXT).',
              'Offered great flexibility to users when importing their datasets and ensuring compatibility.',
            ],
          },
        ],
      },
      conclusion: {
        title: 'Conclusions and Learnings',
        content: 'My role as a frontend developer in Angular was significant. I implemented designs with precision, worked effectively with MFEs and WebSockets. This project was a design-development tandem, where my vision impacted the frontend architecture. This challenge allowed me to grow, learning to manage and contribute in a complex technical environment with these technologies and to work in international collaboration. The experience taught me to simplify technical workflows for the end user.',
      },
    },
  };

  // @ts-ignore
  const project = projectsData[projectId];

  if (!project) return null;

  return (
    <div className="flex-1 h-screen overflow-y-auto bg-[#1e1e1e] font-[Ubuntu_Condensed] scrollbar-hide">
      <div className="max-w-4xl mx-auto p-8 lg:p-16 pb-32">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-[#AABF94] transition-colors mb-12 font-[Ubuntu_Condensed] font-bold text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </button>

        <div className="space-y-8">
          {/* Header */}
          <div>
            <p className="text-sm text-gray-400 mb-2 font-[Ubuntu_Condensed] font-bold uppercase tracking-wider">{project.sector}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight text-[#e8eaed]">
              {project.title}
            </h1>
            <div className="h-0.5 w-12 bg-[#AABF94] mb-6" />
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.subtitle}
            </p>
          </div>

          {/* Approach */}
          <section className="pt-8">
            <h2 className="font-serif text-2xl mb-4 tracking-tight text-[#e8eaed]">
              {project.approach.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {project.approach.intro}
            </p>
            <ul className="space-y-4">
              {project.approach.items.map((item: any, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#AABF94] mt-1">·</span>
                  <div>
                    <span className="font-bold text-[#e8eaed]">{item.title}</span>
                    <span className="text-gray-300">: {item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Solution */}
          <section className="pt-8">
            <h2 className="font-serif text-2xl mb-4 tracking-tight text-[#e8eaed]">
              {project.solution.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {project.solution.intro}
            </p>
            <div className="space-y-6">
              {project.solution.items.map((item: any, index: number) => (
                <div key={index}>
                  <p className="font-bold mb-2 text-[#e8eaed]">· {item.title}</p>
                  <ul className="space-y-2 ml-6">
                    {item.subitems.map((subitem: string, subIndex: number) => (
                      <li key={subIndex} className="flex gap-2 text-gray-300">
                        <span className="text-[#AABF94]">·</span>
                        <span>{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="pt-8">
            <h2 className="font-serif text-2xl mb-4 tracking-tight text-[#e8eaed]">
              {project.conclusion.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.conclusion.content}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}