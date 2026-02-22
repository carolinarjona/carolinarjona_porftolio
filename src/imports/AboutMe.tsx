import imgGameController from "figma:asset/90f4bd5d00668e1d1cfdb2d194cb2a449c530c06.png";
import imgIronMan from "figma:asset/fdec6baf64cd00e53ac3f9838a5b059b6cd117b2.png";
import imgWalking from "figma:asset/4802b44ea04e17623c9c08ff83a0ece1e5176757.png";
import imgBook from "figma:asset/e0e7eb018fa2362d0a97fd4f9d4df0cc721074cd.png";
import imgVegetarianFood from "figma:asset/e34beda5e663f4c8fdf99c8cfc13d91950756fe6.png";
import imgGlobe from "figma:asset/2f13d03f088b328f87ed7aa68d9c31bde5995469.png";
import imgDownloadSinFondo2 from "figma:asset/1e4980f7fbe8d328f30d699512cf4594b470c438.png";
import imgDesign from "figma:asset/52bcf1ee6d06ac4c507774c3c14b6897ccc2c9c2.png";
import imgPicture from "figma:asset/73685c9176ba83d48f7692a621aec1e0ba0c1a1c.png";
import imgCode from "figma:asset/7f0508917677103d1de2afedde50482c73fd8697.png";
import imgTasklist from "figma:asset/cbbdbf681f263d7f5a25e096a41433fab03c38c0.png";
import imgDoubleDown from "figma:asset/5b9ab790852d613a01dc06b1843f876360d51b9a.png";
import { imgDownloadSinFondo1 } from "./svg-90rhf";

function Frame8() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[4px] relative w-full">
          <p className="font-['Fira_Code:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[gainsboro] text-nowrap text-right whitespace-pre">LANGUAGES</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-center leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] not-italic relative shrink-0 w-full">Spain</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0 w-full">Mother Language</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-center text-nowrap w-full whitespace-pre">
      <p className="font-['Fira_Code:Bold',sans-serif] not-italic relative shrink-0">English</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0">Fluent</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-center text-nowrap w-full whitespace-pre">
      <p className="font-['Fira_Code:Bold',sans-serif] not-italic relative shrink-0">French</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0">Basic</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] min-w-full not-italic relative shrink-0 w-[min-content]">Italian</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0 text-center text-nowrap whitespace-pre">Basic</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[8px] pt-0 px-[16px] relative w-full">
          <Frame18 />
          <Frame19 />
          <Frame20 />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[882px] top-[655px] w-[234px]">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[4px] relative w-full">
          <p className="font-['Fira_Code:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[gainsboro] text-nowrap text-right whitespace-pre">INTERESTS</p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Game Controller">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgGameController} />
      </div>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre">Videogames</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Iron Man">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgIronMan} />
      </div>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre">Marvel comics</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Walking">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgWalking} />
      </div>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre">Walking</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Book">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBook} />
      </div>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre">Sci-fi stories</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]" data-name="Vegetarian Food">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgVegetarianFood} />
      </div>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre">Healthy cooking</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[239px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[239px] items-start justify-center pb-[8px] pt-0 px-[16px] relative w-full">
          <Frame25 />
          <Frame26 />
          <Frame33 />
          <Frame34 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[281px] items-start left-[1152px] top-[655px] w-[234px]">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[4px] relative w-full">
          <p className="font-['Fira_Code:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[gainsboro] text-nowrap text-right whitespace-pre">EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] w-full">{`UX/UI Designer & Frontend Developer`}</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[16px] w-full">PwC Spain, August 2021 - Present</p>
      <ul className="block font-['Fira_Code:Retina',sans-serif] font-[450] leading-[0] relative shrink-0 text-[14px] w-full">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Designed internal app prototypes & data dashboards (research, ideation, testing).`}</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Specialized in Angular, TypeScript & microfrontends.`}</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Experience with Scrum, Jira & Azure DevOps.`}</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[normal]">Developing low-code solutions with Microsoft tools.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] w-full">UX/UI Designer</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[16px] w-full">Tealk, February 2023 - July 2023</p>
      <ul className="block font-['Fira_Code:Retina',sans-serif] font-[450] leading-[0] relative shrink-0 text-[14px] w-full">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Designed a digital communicator for people with ASD.</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Qualitative and quantitative research, user personas, journey maps & testing.`}</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[normal]">{`Defined interaction & information architecture.`}</span>
        </li>
      </ul>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] w-full">UX/UI Designer</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[16px] w-full">Recicla App, February 2023 - July 2023</p>
      <ul className="block font-['Fira_Code:Retina',sans-serif] font-[450] leading-[0] relative shrink-0 text-[14px] w-full">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Designed a recycling app with user-centered research.</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">{`Created user personas, journey maps & interaction design.`}</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[normal]">{`Built information architecture & tested prototypes.`}</span>
        </li>
      </ul>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] w-full">Full-Stack Developer</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[16px] w-full">Recicla App, February 2023 - July 2023</p>
      <ul className="block font-['Fira_Code:Retina',sans-serif] font-[450] leading-[0] relative shrink-0 text-[14px] w-full">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Developed a pharmacy web app.</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[normal]">{`Built frontend with Angular & a CRUD API with NodeJS.`}</span>
        </li>
      </ul>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[8px] pt-0 px-[16px] relative w-full">
          <Frame35 />
          <Frame36 />
          <Frame37 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[112px] top-[255px] w-[734px]">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[285px] px-[16px] py-[8px] top-[107px] w-[661px]">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-dashed inset-0 pointer-events-none" />
      <p className="basis-0 font-['Fira_Code:Retina',sans-serif] font-[450] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[14px]">
        <span>{`Hi! I'm Carol, a UX/UI developer and designer. Passionate about `}</span>
        <span className="font-['Fira_Code:SemiBold',sans-serif] not-italic">continuous learning</span>
        <span>{`. I love crafting intuitive and engaging `}</span>
        <span className="font-['Fira_Code:SemiBold',sans-serif] not-italic">digital solutions</span>. With a strong interest in linguistics, I want to explore how language enhances UX writing to create more natural and seamless experiences.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end px-[8px] py-[4px] relative w-full">
          <p className="font-['Fira_Code:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[gainsboro] text-nowrap text-right whitespace-pre">{`UX/UI DEVELOPER & DESIGNER`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-end left-[1083px] top-[107px]">
      <p className="font-['Fira_Code:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-nowrap text-right whitespace-pre">Carolina Arjona Soler</p>
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1647px] top-[32px]">
      <p className="absolute font-['Fira_Mono:Medium',sans-serif] leading-[normal] left-[1647px] not-italic text-[16px] text-[gainsboro] text-nowrap top-[80px] whitespace-pre">CAROL UNIVERSE</p>
      <div className="absolute left-[1695px] size-[40px] top-[32px]" data-name="Globe">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgGlobe} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[40px] relative shrink-0 text-[24px] text-[gainsboro] text-nowrap whitespace-pre">01. home</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[gainsboro] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[40px] relative shrink-0 text-[#1e1e1e] text-[24px] text-nowrap whitespace-pre">02. about me</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative w-full">
          <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[40px] relative shrink-0 text-[24px] text-[gainsboro] text-nowrap whitespace-pre">03. portfolio</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[40px] relative shrink-0 text-[24px] text-[gainsboro] text-nowrap whitespace-pre">04. contact</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[1589px] top-[209px] w-[211px]">
      <Frame2 />
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[112px] top-[80px]" data-name="Mask group">
      <div className="absolute h-[203px] left-[104px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_15px] mask-size-[142px_142px] top-[65px] w-[172px]" data-name="DownloadSinFondo 1" style={{ maskImage: `url('${imgDownloadSinFondo1}')` }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
            <img alt="" className="absolute h-[116.16%] left-[-22.98%] max-w-none top-[-16.16%] w-[137.22%]" src={imgDownloadSinFondo2} />
          </div>
          <div className="absolute bg-[#1e1e1e] inset-0 mix-blend-lighten" />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[4px] relative w-full">
          <p className="font-['Fira_Code:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[gainsboro] text-nowrap text-right whitespace-pre">EDUCATION</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-center leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] not-italic relative shrink-0 w-full">UX/UI Specialist Course</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0 w-full">SocraTech, 2022</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-center text-nowrap w-full whitespace-pre">
      <p className="font-['Fira_Code:Bold',sans-serif] not-italic relative shrink-0">Bootcamp Full Stack Web Developer</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0">Codehouse Academy, 2021</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] text-center text-nowrap w-full whitespace-pre">
      <p className="font-['Fira_Code:Bold',sans-serif] not-italic relative shrink-0">Graphic Design Course</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0">{`Cálamo & Cran, 2018-2019`}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] min-w-full not-italic relative shrink-0 w-[min-content]">Master’s Degree in Spanish Linguistic and Literary Heritage Management</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0 text-center text-nowrap whitespace-pre">University of Málaga, 2016-2017</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 text-[#1e1e1e] text-[16px] w-full">
      <p className="font-['Fira_Code:Bold',sans-serif] min-w-full not-italic relative shrink-0 w-[min-content]">Bachelor’s Degree in Translation and Interpreting</p>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] relative shrink-0 text-center text-nowrap whitespace-pre">University of Málaga, 2010-2014</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[8px] pt-0 px-[16px] relative w-full">
          <Frame39 />
          <Frame40 />
          <Frame41 />
          <Frame42 />
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[882px] top-[255px] w-[504px]">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[4px] relative w-full">
          <p className="font-['Fira_Code:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[gainsboro] text-nowrap text-right whitespace-pre">{`SKILLS & TOOLS`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="relative shrink-0 size-[36px]" data-name="Design">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgDesign} />
      </div>
      <div className="basis-0 flex flex-col font-['Fira_Code:Retina',sans-serif] font-[450] grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[14px]">
        <p className="leading-[normal]">{`Figma, Miro & Invision`}</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="relative shrink-0 size-[36px]" data-name="Picture">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPicture} />
      </div>
      <div className="basis-0 flex flex-col font-['Fira_Code:Retina',sans-serif] font-[450] grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[14px]">
        <p className="leading-[normal]">{`UI Design, Research & UX writing`}</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="relative shrink-0 size-[36px]" data-name="Code">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCode} />
      </div>
      <div className="basis-0 flex flex-col font-['Fira_Code:Retina',sans-serif] font-[450] grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[14px]">
        <p className="leading-[normal]">{`Low Code, Frontend (VSC) & Git`}</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="relative shrink-0 size-[36px]" data-name="Tasklist">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgTasklist} />
      </div>
      <div className="basis-0 flex flex-col font-['Fira_Code:Retina',sans-serif] font-[450] grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1e1e1e] text-[14px]">
        <p className="leading-[normal]">{`Jira, Azure DevOps & Trello`}</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame31 />
      <Frame30 />
      <Frame29 />
      <Frame32 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[8px] pt-0 px-[16px] relative size-full">
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[131px] items-start left-[112px] top-[805px] w-[734px]">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="bg-[gainsboro] relative size-full" data-name="About Me">
      <Frame27 />
      <Frame28 />
      <Frame24 />
      <div className="absolute bg-[#1e1e1e] h-[1080px] left-0 top-0 w-[24px]" />
      <Frame7 />
      <div className="absolute left-[737px] size-[32px] top-[1020px]" data-name="Double Down">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgDoubleDown} />
      </div>
      <Frame6 />
      <div className="absolute bg-[#1e1e1e] h-[1080px] left-[1510px] top-0 w-[410px]" />
      <Group />
      <Frame5 />
      <div className="absolute left-[112px] size-[142px] top-[80px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 142">
          <circle cx="71" cy="71" fill="var(--fill-0, #EAEAEA)" id="Ellipse 2" r="71" />
        </svg>
      </div>
      <MaskGroup />
      <Frame23 />
      <Frame45 />
    </div>
  );
}