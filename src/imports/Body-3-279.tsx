import svgPaths from "./svg-m9cz81nsk9";
import imgImage from "figma:asset/74b7602f61b65273d4415567a414fd40e4bf8501.png";

function Container3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Overlay">
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[22.5px] leading-[0] not-italic relative shrink-0 tracking-[-0.45px] w-[156.78px]" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center left-0 text-[18px] text-white top-[10.5px] w-[100.92px]">
        <p className="leading-[22.5px] whitespace-pre-wrap">{`IPO Tracker `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center left-[104.92px] text-[#64748b] text-[12px] top-[12.5px] w-[51.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Nov 2025</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Overlay />
      <Heading1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p2dbaedc0} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(30,41,59,0.5)] content-stretch flex h-full items-center justify-center pl-[16px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Overlay">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[11.5px] content-stretch flex flex-col items-start left-[8px] overflow-clip pr-[10.37px] top-[11.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[185.63px]">
        <p className="leading-[normal] whitespace-pre-wrap">Search KRX code or name...</p>
      </div>
    </div>
  );
}

function Container7() {
  return <div className="absolute bottom-[11.5px] left-[8px] top-[11.5px] w-[196px]" data-name="Container" />;
}

function Input() {
  return (
    <div className="bg-[rgba(30,41,59,0.5)] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative rounded-br-[8px] rounded-tr-[8px]" data-name="Input">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[8px] w-full" data-name="Container">
      <Overlay1 />
      <Input />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center max-w-[256px] min-w-[160px] relative shrink-0 w-[256px]" data-name="Label">
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
        <Container2 />
        <Label />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#137fec] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] w-[131.95px]">
        <p className="leading-[21px] whitespace-pre-wrap">High-Drop Analysis</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[103.42px]">
        <p className="leading-[21px] whitespace-pre-wrap">Upcoming IPOs</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[79.98px]">
        <p className="leading-[21px] whitespace-pre-wrap">Market Map</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2ab08e80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
      <Container10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(19,127,236,0.2)] content-stretch flex flex-col items-start p-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Image">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-end relative w-full">
        <Nav />
        <Container9 />
        <OverlayBorder />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(21,28,39,0.8)] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[40px] relative w-full">
          <Container1 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-[153.8px]">
        <p className="leading-[20px] whitespace-pre-wrap">High-Drop Stocks</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(244,63,94,0.1)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[10px] w-[28.73px]">
        <p className="leading-[15px] whitespace-pre-wrap">TOP 7</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Overlay2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-full">
        <p className="leading-[15px] whitespace-pre-wrap">Listed since 2025-11-01</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative w-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[103.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">에이아이로보틱스</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[115.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">482100.KQ | 2025-11-04</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[115.58px]" data-name="Container">
      <Heading2 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[46.63px]">
        <p className="leading-[16px] whitespace-pre-wrap">-42.8%</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[25.91px]">
          <p className="leading-[15px] whitespace-pre-wrap">D+24</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="opacity-80 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[56.59px]">
          <p className="leading-[15px] whitespace-pre-wrap">Cap: 1.2T ₩</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#137fec] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.2),0px_4px_6px_-4px_rgba(19,127,236,0.2)]" data-name="Button:shadow" />
        <Container15 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[77.28px]">
        <p className="leading-[20px] whitespace-pre-wrap">미래모빌리티</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[115.64px]">
        <p className="leading-[15px] whitespace-pre-wrap">550230.KS | 2025-11-08</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[115.64px]" data-name="Container">
      <Heading3 />
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container21 />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] w-[46.41px]">
          <p className="leading-[16px] whitespace-pre-wrap">-38.2%</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[25.91px]">
          <p className="leading-[15px] whitespace-pre-wrap">D+20</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[62.59px]">
          <p className="leading-[15px] whitespace-pre-wrap">Cap: 840B ₩</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative w-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <Container20 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[77.28px]">
        <p className="leading-[20px] whitespace-pre-wrap">케이바이오랩</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[112.61px]">
        <p className="leading-[15px] whitespace-pre-wrap">399120.KQ | 2025-11-12</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112.61px]" data-name="Container">
      <Heading4 />
      <Container27 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container26 />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] w-[46.02px]">
          <p className="leading-[16px] whitespace-pre-wrap">-35.5%</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[24.11px]">
          <p className="leading-[15px] whitespace-pre-wrap">D+16</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[62.5px]">
          <p className="leading-[15px] whitespace-pre-wrap">Cap: 420B ₩</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative w-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <Container25 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[64.41px]">
        <p className="leading-[20px] whitespace-pre-wrap">넥스트엔터</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[114.77px]">
        <p className="leading-[15px] whitespace-pre-wrap">088450.KQ | 2025-11-15</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114.77px]" data-name="Container">
      <Heading5 />
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container31 />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] w-[44.3px]">
          <p className="leading-[16px] whitespace-pre-wrap">-31.0%</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[24.08px]">
          <p className="leading-[15px] whitespace-pre-wrap">D+13</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[60.11px]">
          <p className="leading-[15px] whitespace-pre-wrap">Cap: 210B ₩</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative w-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <Container30 />
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[64.41px]">
        <p className="leading-[20px] whitespace-pre-wrap">스마트그린</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[111.75px]">
        <p className="leading-[15px] whitespace-pre-wrap">122900.KS | 2025-11-19</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[111.75px]" data-name="Container">
      <Heading6 />
      <Container37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container36 />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] w-[46.67px]">
          <p className="leading-[16px] whitespace-pre-wrap">-28.4%</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[20.05px]">
          <p className="leading-[15px] whitespace-pre-wrap">D+9</p>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[61.66px]">
          <p className="leading-[15px] whitespace-pre-wrap">Cap: 670B ₩</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative w-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <Container35 />
        <HorizontalBorder4 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[90.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">디지털시큐리티</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[112.78px]">
        <p className="leading-[15px] whitespace-pre-wrap">443120.KQ | 2025-11-21</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112.78px]" data-name="Container">
      <Heading7 />
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container41 />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] w-[42.47px]">
          <p className="leading-[16px] whitespace-pre-wrap">-24.1%</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[19.28px]">
          <p className="leading-[15px] whitespace-pre-wrap">D+7</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[60.19px]">
          <p className="leading-[15px] whitespace-pre-wrap">Cap: 310B ₩</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative w-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <Container40 />
        <HorizontalBorder5 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[14px] w-[103.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">클라우드네트웍스</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[116.28px]">
        <p className="leading-[15px] whitespace-pre-wrap">229800.KQ | 2025-11-25</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116.28px]" data-name="Container">
      <Heading8 />
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container46 />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] w-[43.59px]">
          <p className="leading-[16px] whitespace-pre-wrap">-19.5%</p>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-[19.91px]">
          <p className="leading-[15px] whitespace-pre-wrap">D+3</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] w-[59.95px]">
          <p className="leading-[15px] whitespace-pre-wrap">Cap: 150B ₩</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[9px] relative w-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <Container45 />
        <HorizontalBorder6 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[24px] px-[12px] relative size-full">
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
          <Button6 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="bg-[#0a0f16] content-stretch flex flex-col items-start min-w-[280px] pr-px relative self-stretch shrink-0 w-[280px]" data-name="Aside">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-r border-solid inset-0 pointer-events-none" />
      <Container11 />
      <Container14 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#334155] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] text-center w-[83.52px]">
          <p className="leading-[16px] whitespace-pre-wrap">3-Month View</p>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[91.75px]">
          <p className="leading-[16px] whitespace-pre-wrap">Detailed History</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#151c27] content-stretch flex items-start p-[5px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button8 />
      <Button9 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center pb-[9px] pt-[8px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#0a0f16] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[10px] text-center w-[18.41px]">
        <p className="leading-[15px] whitespace-pre-wrap">기관</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-[#334155] content-stretch flex items-center justify-center left-[-8px] pb-[9px] pt-[8px] px-[2px] rounded-[9999px] size-[32px] top-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#0a0f16] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[10px] text-center w-[18.41px]">
        <p className="leading-[15px] whitespace-pre-wrap">외인</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[24px]" data-name="Margin">
      <BackgroundBorder2 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <BackgroundBorder1 />
      <Margin1 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#137fec] content-stretch flex h-[40px] items-center justify-center pb-[10.5px] pt-[9.5px] px-[24px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] h-[40px] left-0 right-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.3),0px_4px_6px_-4px_rgba(19,127,236,0.3)] top-1/2" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[59.64px]">
        <p className="leading-[20px] whitespace-pre-wrap">Set Alert</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container52 />
      <Button10 />
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <BackgroundBorder />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container50 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Sans_KR:Black',sans-serif] font-black h-[40px] justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] w-[257.77px]">
        <p className="leading-[40px] whitespace-pre-wrap">에이아이로보틱스</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1e293b] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.7px] w-[81.92px]">
        <p className="leading-[20px] whitespace-pre-wrap">482100.KQ</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[152.47px]">
        <p className="leading-[16px] whitespace-pre-wrap">Listing Date: Nov 04, 2025</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[152.47000122070312px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[411.844px] relative w-full">
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Background />
      <Margin3 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[78px] justify-center leading-[26px] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-[763.08px] whitespace-pre-wrap">
        <p className="mb-0">AI-integrated industrial robotics solution provider. Despite a high demand during the IPO subscription</p>
        <p className="mb-0">phase, the stock has experienced significant downward pressure due to early venture capital exits</p>
        <p>and macro-sentiment shifts in the tech sector.</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container56 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container53 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[97.19px]">
        <p className="leading-[16px] whitespace-pre-wrap">Market Price</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex items-baseline left-[21px] right-[21px] top-[45px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[115.55px]">
        <p className="leading-[32px] whitespace-pre-wrap">₩74,400</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] w-[110.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">▼ ₩3,200 (4.12%)</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#151c27] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container58 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[63.83px]">
        <p className="leading-[16px] whitespace-pre-wrap">IPO Price</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex items-baseline left-[21px] right-[21px] top-[45px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[129.27px]">
        <p className="leading-[32px] whitespace-pre-wrap">₩130,000</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[117.3px]">
        <p className="leading-[16px] whitespace-pre-wrap">Subscription: 1,450:1</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#151c27] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container61 />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[81.59px]">
        <p className="leading-[16px] whitespace-pre-wrap">Total Drop</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex items-baseline left-[21px] right-[21px] top-[45px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[24px] w-[93.25px]">
        <p className="leading-[32px] whitespace-pre-wrap">-42.8%</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[93.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">From listing high</p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#151c27] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[86.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">Market Cap</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex items-baseline left-[21px] right-[21px] top-[45px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[94.97px]">
        <p className="leading-[32px] whitespace-pre-wrap">₩1.24T</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[127.81px]">
        <p className="leading-[16px] whitespace-pre-wrap">KOSDAQ Ranking: #28</p>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#151c27] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container67 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[16px] h-[118px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
      <BackgroundBorder6 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container57 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[20px] w-[316.67px]">
        <p className="leading-[28px] whitespace-pre-wrap">{`Price Volatility & Lock-up Impact`}</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[464.98px]">
        <p className="leading-[20px] whitespace-pre-wrap">Correlation between lock-up releases and institutional selling pressure</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[464.98px]" data-name="Container">
      <Heading10 />
      <Container72 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#137fec] relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(19,127,236,0.2)] size-[12px] top-1/2" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.6px] uppercase w-[84.19px]">
        <p className="leading-[16px] whitespace-pre-wrap">Closing Price</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.6px] uppercase w-[99.44px]">
        <p className="leading-[16px] whitespace-pre-wrap">Release Marker</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#f43f5e] h-[16px] rounded-[9999px] shrink-0 w-[4px]" data-name="Background" />
      <Container77 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[23.99px] items-center relative shrink-0" data-name="Container">
      <Container74 />
      <Container76 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container73 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[40px] right-[33px] top-[33px]" data-name="Margin">
      <Container70 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[47.16px]">
        <p className="leading-[15px] whitespace-pre-wrap">IPO Day</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[39.7px]">
        <p className="leading-[15px] whitespace-pre-wrap">Day 15</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[42.36px]">
        <p className="leading-[15px] whitespace-pre-wrap">Day 30</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[42.14px]">
        <p className="leading-[15px] whitespace-pre-wrap">Day 45</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[42.41px]">
        <p className="leading-[15px] whitespace-pre-wrap">Day 60</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[41.11px]">
        <p className="leading-[15px] whitespace-pre-wrap">Day 75</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[99.02px]">
        <p className="leading-[15px] whitespace-pre-wrap">Current (D+24)</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pl-[4px] pr-[4.04px] relative size-full">
        <Container79 />
        <Container80 />
        <Container81 />
        <Container82 />
        <Container83 />
        <Container84 />
        <Container85 />
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] pt-[24px] right-[33px] top-[428px]" data-name="Margin">
      <Container78 />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[269px] relative shrink-0 w-full" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[10%_0_11.67%_0]" data-name="Vector">
          <div className="absolute inset-[-1.04%_-0.26%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856.372 215.088">
              <path d={svgPaths.p9508700} id="Vector" stroke="var(--stroke-0, #137FEC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.37167" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[10%_0_0_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 852 242.1">
            <path d={svgPaths.p3e157f00} fill="url(#paint0_linear_1_295)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_295" x1="0" x2="0" y1="0" y2="242.1">
                <stop stopColor="#137FEC" stopOpacity="0.4" />
                <stop offset="1" stopColor="#137FEC" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[0_83.4%_0_16.6%]" data-name="Vector">
          <div className="absolute inset-[0_-0.87px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.74867 269">
              <g id="Vector" opacity="0.6">
                <path d="M0.874333 0V269V0" fill="var(--fill-0, black)" />
                <path d="M0.874333 0V269V0" stroke="var(--stroke-0, #F43F5E)" strokeDasharray="6.99 3.5" strokeWidth="1.74867" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[0_66.7%_0_33.3%]" data-name="Vector">
          <div className="absolute inset-[0_-0.87px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.74867 269">
              <g id="Vector" opacity="0.6">
                <path d="M0.874333 0V269V0" fill="var(--fill-0, black)" />
                <path d="M0.874333 0V269V0" stroke="var(--stroke-0, #F43F5E)" strokeDasharray="6.99 3.5" strokeWidth="1.74867" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-full right-0 top-0" data-name="Vector">
          <div className="absolute inset-[0_-0.87px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.74867 269">
              <g id="Vector" opacity="0.6">
                <path d="M0.874333 0V269V0" fill="var(--fill-0, black)" />
                <path d="M0.874333 0V269V0" stroke="var(--stroke-0, #F43F5E)" strokeDasharray="6.99 3.5" strokeWidth="1.74867" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f43f5e] relative rounded-[4px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(244,63,94,0.3),0px_4px_6px_-4px_rgba(244,63,94,0.3)]" data-name="Overlay+Shadow" />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-white w-[128.97px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">D+15 RELEASE (1.2M Shares)</p>
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute left-[8.49%] right-[75.14%] top-[25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Background2 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f43f5e] relative rounded-[4px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(244,63,94,0.3),0px_4px_6px_-4px_rgba(244,63,94,0.3)]" data-name="Overlay+Shadow" />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-white w-[133.24px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">D+30 RELEASE (2.8M Shares)</p>
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute left-[24.91%] right-[58.24%] top-[25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Background3 />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#64748b] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-white w-[81.72px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">D+90 PROJECTED</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute right-[-47.86px] top-[25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Background4 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute left-[0.11%] right-[98.53%] top-[35px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="bg-white relative rounded-[9999px] shrink-0 size-[12px]" data-name="Background+Border">
          <div aria-hidden="true" className="absolute border-2 border-[#137fec] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#0f172a] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.4)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[12px] w-[56.16px]">
            <p className="leading-[16px] whitespace-pre-wrap">₩88,400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute left-[44.01%] right-[45.13%] top-[166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <BackgroundBorder9 />
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#0f172a] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.4)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <div className="bg-[#f43f5e] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[12px] w-[54.78px]">
            <p className="leading-[16px] whitespace-pre-wrap">₩74,400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute left-[87.91%] right-[1.39%] top-[251px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <BackgroundBorder10 />
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[33px] p-[17px] right-[33px] rounded-[12px] top-[125px]" data-name="Background+Border" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 886 303\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(121.38 0 0 41.512 -41088 -14052)\\'><stop stop-color=\\'rgba(255,255,255,0.03)\\' offset=\\'0.011405\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.011405\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(30,41,59,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Svg />
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
      <Container90 />
      <Container91 />
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#151c27] h-[500px] min-h-[500px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Margin5 />
      <Margin6 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
        <g id="Container">
          <path d={svgPaths.p7555480} fill="var(--fill-0, #F43F5E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] w-[160.8px]">
        <p className="leading-[16px] whitespace-pre-wrap">Voluntary Lock-up Warning</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] w-[404.11px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Significant institutional float (4.2M shares) becoming tradable on 2025-12-04.</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-[404.11px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(244,63,94,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(244,63,94,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[17px] relative size-full">
          <Container93 />
          <Container94 />
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#1e293b] content-stretch flex flex-col items-center justify-center pb-[23.75px] pt-[22.75px] px-[32px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] text-center w-[145.16px]">
        <p className="leading-[20px] whitespace-pre-wrap">Download Full Report</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorder1 />
      <Button11 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container92 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#0a0f16] relative self-stretch shrink-0 w-[1000px]" data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Margin />
          <Margin2 />
          <Margin4 />
          <BackgroundBorder7 />
          <Margin7 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex h-[1023px] items-start overflow-clip relative shrink-0 w-full z-[1]" data-name="Main">
      <Aside />
      <Section />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col isolate items-start min-h-[1088px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Header />
      <Main />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#0a0f16] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Container />
    </div>
  );
}