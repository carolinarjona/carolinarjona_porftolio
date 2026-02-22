function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 font-['Fira_Code:Retina',sans-serif] font-[450] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[0px]">
        <p className="font-['SF_Pro_Display:Bold',sans-serif] mb-0 text-[36px]">Carolina Arjona Soler</p>
        <p className="font-['SF_Pro_Display:Regular',sans-serif] text-[24px]">UX/UI Designer | Frontend Developer</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Fira_Code:Retina',sans-serif] font-['SF_Pro_Display:Regular',sans-serif] font-[450] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[0px] text-[20px] text-nowrap whitespace-pre">
        <span>{`📍 Málaga, Spain | 📧 `}</span>
        <a className="[text-underline-position:from-font] cursor-pointer decoration-solid underline" href="mailto:carolinarjona@gmail.com">
          <span className="[text-underline-position:from-font] decoration-solid font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px]" href="mailto:carolinarjona@gmail.com">
            carolinarjona@gmail.com
          </span>
        </a>
        <span>{`  | `}</span>
        <span>{`🔗 `}</span>
        <a className="[text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.linkedin.com/in/carolinarjona">
          <span className="[text-underline-position:from-font] decoration-solid font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px]" href="https://www.linkedin.com/in/carolinarjona">
            LinkedIn
          </span>
        </a>
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center px-[80px] py-0 relative w-full">
          <Frame23 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[32px] text-nowrap text-right whitespace-pre">About</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[0px] text-[20px] text-justify w-full">
        <span className="font-['SF_Pro_Display:Bold',sans-serif]">UX/UI Designer</span>
        <span>{` with 3+ years of experience, specializing in creating accessible, intuitive, and user-centered interfaces. My background in `}</span>
        <span className="font-['SF_Pro_Display:Bold',sans-serif]">frontend development</span>
        <span>{` (both framework-based and low-code) allows me to bridge the gap between design and implementation, ensuring seamless digital experiences. Passionate about research, documentation, and optimizing digital products.`}</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[32px] text-nowrap text-right whitespace-pre">Education</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full">
        <span>{`UNED, Real Patronato sobre Discapacidad & Fundación ONCE`}</span>
        <span>{` | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">2025</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[20px] w-full">Application of the European ICT Accessibility Standard (9th ed. 2025)</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full">
        W3Cx by edX<span>{` | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">2025</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[20px] w-full">Introduction to Web Accessibility</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full">
        <span>{`SocraTech | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">2022</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[20px] w-full">UX/UI Specialist Course</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full">
        <span>{`Scrum Manager | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">2021</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[20px] w-full">Certified Scrum Master</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-center text-nowrap w-full whitespace-pre">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px]">
        <span>{`Codehouse Academy | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">2021</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[20px]">Bootcamp Full Stack Web Developer</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-center text-nowrap w-full whitespace-pre">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px]">
        <span>{`Cálamo & Cran | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">2018-2019</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 text-[20px]">Graphic Design Course</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        University of Málaga |<span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">{` 2016-2017`}</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] min-w-full relative shrink-0 text-[20px] w-[min-content]">Master’s Degree in Spanish Linguistic and Literary Heritage Management</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] text-center text-nowrap whitespace-pre">
        University of Málaga |<span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">{` 2010-2014`}</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] min-w-full relative shrink-0 text-[20px] w-[min-content]">Bachelor’s Degree in Translation and Interpreting</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <Frame17 />
      <Frame16 />
      <Frame18 />
      <Frame14 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start justify-center relative shrink-0 w-[402px]">
      <Frame15 />
      <Frame30 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[32px] text-nowrap text-right whitespace-pre">Experience</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[16px] w-full">
        <span>{`PwC Spain | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">August 2021 - Present</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[20px] w-full">{`UX/UI Designer & Frontend Developer`}</p>
      <ul className="block font-['SF_Pro_Display:Regular',sans-serif] leading-[0] relative shrink-0 text-[20px] text-justify w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Implemented accessibility best practices (WCAG) to ensure inclusive user experiences.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Designed wireframes, prototypes, and interaction flows for internal applications.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Conducted user research and product analysis to improve usability.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Developed low-code solutions using Power Platform (Power Apps, Power Pages, Power Automate).</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Created data visualization dashboards for Power BI.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Developed responsive interfaces using Angular, TypeScript, HTML and CSS.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Integrated microfrontends (MFE) for scalable applications.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Collaborated in Agile teams using Jira and Azure DevOps.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.4]">Created comprehensive documentation and user manuals to support development and onboarding.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[16px] w-full">
        <span>{`Tealk | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">February 2023 - July 2023</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[20px] w-full">UX/UI Designer</p>
      <ul className="block font-['SF_Pro_Display:Regular',sans-serif] leading-[0] relative shrink-0 text-[20px] text-justify w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Designed a digital communicator for people with ASD.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">{`Qualitative and quantitative research, user personas, journey maps & testing.`}</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.4]">{`Defined interaction & information architecture.`}</span>
        </li>
      </ul>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[16px] w-full">
        Recicla App |<span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">{` January 2022 - Match 2022`}</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[20px] w-full">UX/UI Designer</p>
      <ul className="block font-['SF_Pro_Display:Regular',sans-serif] leading-[0] relative shrink-0 text-[20px] text-justify w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Designed a recycling app with user-centered research.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">{`Created personas, journey maps & interaction design.`}</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.4]">{`Built information architecture & tested prototypes.`}</span>
        </li>
      </ul>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[16px] w-full">
        MedWallet<span>{` | `}</span>
        <span className="font-['SF_Pro_Display:Light_Italic',sans-serif] italic">July 2021 - August 2021</span>
      </p>
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[20px] w-full">Full-Stack Developer</p>
      <ul className="block font-['SF_Pro_Display:Regular',sans-serif] leading-[0] relative shrink-0 text-[20px] text-justify w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.4]">Developed a pharmacy web app.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.4]">{`Built frontend with Angular & a CRUD API with NodeJS.`}</span>
        </li>
      </ul>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[36px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0 w-full">
      <Frame40 />
      <Frame38 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['SF_Pro_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[32px] text-nowrap text-right whitespace-pre">{`Skills & Tools`}</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] w-[457px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 w-full">UX/UI Design</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 w-full">UX: User Research, Usability Testing, Accessibility (ARIA, WAVE), UX Writing, Information Architecture.</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 w-full">UI: Wireframing, Prototyping, Interaction Design, Design Systems, Visual Design.</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[20px]">
      <p className="font-['SF_Pro_Display:Bold',sans-serif] relative shrink-0 w-full">Development</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 w-full">Frontend Development: HTML, CSS, JavaScript, Angular, TypeScript, Git.</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 w-full">Low-code: Power Apps, Power Pages, Power Automate, Dataverse, Sharepoint.</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[36px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-0 border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <Frame8 />
      <Frame41 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame42 />
      <Frame39 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center px-[80px] py-0 relative w-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame36 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[54px] h-[1452px] items-center justify-center left-0 top-0 w-[1110px]">
      <Frame35 />
    </div>
  );
}

export default function Cv() {
  return (
    <div className="bg-[#eaeaea] relative size-full" data-name="CV 9">
      <Frame24 />
    </div>
  );
}