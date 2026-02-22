import imgFolder from "figma:asset/df9c4cbf7ca06754b8653b26fdb30b55c0d28fe9.png";
import imgInscription from "figma:asset/3e7822ce8ce4556f52f22e479b4fa8f7ee3bc4f8.png";
import imgCat from "figma:asset/9c58c40d2804f67cd59bedd8874f89e02da2fa15.png";
import imgPicture from "figma:asset/73685c9176ba83d48f7692a621aec1e0ba0c1a1c.png";
import imgGlobe from "figma:asset/2f13d03f088b328f87ed7aa68d9c31bde5995469.png";
import imgDownloadSinFondo1 from "figma:asset/1e4980f7fbe8d328f30d699512cf4594b470c438.png";
import imgDoubleDown from "figma:asset/5b9ab790852d613a01dc06b1843f876360d51b9a.png";

function Frame() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Folder">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgFolder} />
      </div>
      <p className="font-['Fira_Code:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[20px] text-[gainsboro] text-nowrap whitespace-pre">{`> portfolio`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative w-full">
          <div className="relative shrink-0 size-[20px]" data-name="Inscription">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgInscription} />
          </div>
          <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[32px] relative shrink-0 text-[#1e1e1e] text-[20px] text-nowrap whitespace-pre">written content</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Cat">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgCat} />
      </div>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[32px] relative shrink-0 text-[#1e1e1e] text-[20px] text-nowrap whitespace-pre">cat pictures</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Picture">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPicture} />
      </div>
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[32px] relative shrink-0 text-[#1e1e1e] text-[20px] text-nowrap whitespace-pre">memes</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[691px] top-[433px] w-[231px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#1e1e1e] box-border content-stretch flex gap-[10px] items-center justify-center left-[238px] px-[8px] py-[4px] top-[291px]">
      <p className="font-['Fira_Code:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[gainsboro] text-nowrap whitespace-pre">{`UX/UI DEVELOPER & DESIGNER`}</p>
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

function Group1() {
  return (
    <div className="absolute contents left-[238px] top-[329px]">
      <div className="absolute h-[411px] left-[238px] top-[329px] w-[424px]">
        <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-dashed inset-0 pointer-events-none" />
      </div>
      <div className="absolute h-[365px] left-[309px] top-[375px] w-[309px]" data-name="DownloadSinFondo 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
            <img alt="" className="absolute h-[116.16%] left-[-22.98%] max-w-none top-[-16.16%] w-[137.22%]" src={imgDownloadSinFondo1} />
          </div>
          <div className="absolute bg-[#1e1e1e] inset-0 mix-blend-lighten" />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[gainsboro] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[40px] relative shrink-0 text-[#1e1e1e] text-[24px] text-nowrap whitespace-pre">01. home</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[40px] relative shrink-0 text-[24px] text-[gainsboro] text-nowrap whitespace-pre">02. about me</p>
    </div>
  );
}

function Frame8() {
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

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <p className="font-['Fira_Code:Retina',sans-serif] font-[450] leading-[40px] relative shrink-0 text-[24px] text-[gainsboro] text-nowrap whitespace-pre">04. contact</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[1589px] top-[209px] w-[211px]">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

export default function Hello() {
  return (
    <div className="bg-[gainsboro] relative size-full" data-name="Hello">
      <div className="absolute bg-[#1e1e1e] h-[1080px] left-0 top-0 w-[24px]" />
      <p className="absolute font-['Fira_Code:Bold',sans-serif] leading-[normal] left-[238px] not-italic text-[#1e1e1e] text-[36px] text-nowrap top-[244px] whitespace-pre">CAROL</p>
      <div className="absolute font-['Fira_Code:Retina',sans-serif] font-[450] leading-[normal] left-[691px] text-[#1e1e1e] text-[20px] text-nowrap top-[329px] whitespace-pre">
        <p className="mb-0">{`“Hello, traveler! I'm Carol.`}</p>
        <p className="mb-0">{`UX/UI Developer & Designer.`}</p>
        <p className="mb-0">What can I offer you today?”</p>
        <p>&nbsp;</p>
      </div>
      <Frame4 />
      <div className="absolute left-[737px] size-[32px] top-[1020px]" data-name="Double Down">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgDoubleDown} />
      </div>
      <p className="absolute font-['Fira_Code:Retina',sans-serif] font-[450] leading-[32px] left-[691px] text-[#1e1e1e] text-[24px] text-nowrap top-[988px] whitespace-pre">CONTINUE</p>
      <Frame5 />
      <div className="absolute bg-[#1e1e1e] h-[1080px] left-[1510px] top-0 w-[410px]" />
      <Group />
      <Group1 />
      <Frame10 />
    </div>
  );
}