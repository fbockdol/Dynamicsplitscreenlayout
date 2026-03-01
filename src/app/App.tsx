import { useState } from 'react';
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import svgPaths from "../imports/svg-m9cz81nsk9";
import imgImage from "figma:asset/74b7602f61b65273d4415567a414fd40e4bf8501.png";

// 종목 데이터 타입 정의
interface StockData {
  id: number;
  nameKR: string;
  code: string;
  listingDate: string;
  dropPercent: number;
  daysAfterIPO: string;
  marketCap: string;
  marketPrice: string;
  marketPriceChange: string;
  marketPriceChangePercent: string;
  ipoPrice: string;
  subscription: string;
  totalDrop: number;
  kosdaq: string;
  description: string;
  warning?: string;
  chartData: Array<{ day: number; price: number; label: string }>;
  releaseMarkers?: Array<{ day: number; shares: string }>;
}

// 종목 데이터
const stocksData: StockData[] = [
  {
    id: 1,
    nameKR: "에이아이로보틱스",
    code: "482100.KQ",
    listingDate: "2025-11-04",
    dropPercent: -42.8,
    daysAfterIPO: "D+24",
    marketCap: "1.2T",
    marketPrice: "₩74,400",
    marketPriceChange: "▼ ₩3,200",
    marketPriceChangePercent: "(4.12%)",
    ipoPrice: "₩130,000",
    subscription: "1,450:1",
    totalDrop: -42.8,
    kosdaq: "#28",
    description: "AI-integrated industrial robotics solution provider. Despite a high demand during the IPO subscription phase, the stock has experienced significant downward pressure due to early venture capital exits and macro-sentiment shifts in the tech sector.",
    warning: "Significant institutional float (4.2M shares) becoming tradable on 2025-12-04.",
    chartData: [
      { day: 0, price: 130000, label: 'IPO DAY' },
      { day: 15, price: 120000, label: 'DAY 15' },
      { day: 30, price: 95000, label: 'DAY 30' },
      { day: 45, price: 88400, label: 'DAY 45' },
      { day: 60, price: 82000, label: 'DAY 60' },
      { day: 75, price: 78000, label: 'DAY 75' },
      { day: 24, price: 74400, label: 'CURRENT (D+24)' }
    ],
    releaseMarkers: [
      { day: 15, shares: '1.2M Shares' },
      { day: 30, shares: '2.8M Shares' }
    ]
  },
  {
    id: 2,
    nameKR: "미래모빌리티",
    code: "550230.KS",
    listingDate: "2025-11-08",
    dropPercent: -38.2,
    daysAfterIPO: "D+20",
    marketCap: "840B",
    marketPrice: "₩92,800",
    marketPriceChange: "▼ ₩2,100",
    marketPriceChangePercent: "(2.21%)",
    ipoPrice: "₩150,000",
    subscription: "1,280:1",
    totalDrop: -38.2,
    kosdaq: "#42",
    description: "Next-generation electric vehicle technology company. The stock faced selling pressure from institutional investors rotating out of EV stocks amid broader market concerns about the sector's valuation.",
    warning: "Major lock-up period ending on 2025-12-15 with 3.8M shares.",
    chartData: [
      { day: 0, price: 150000, label: 'IPO DAY' },
      { day: 15, price: 138000, label: 'DAY 15' },
      { day: 30, price: 115000, label: 'DAY 30' },
      { day: 45, price: 105000, label: 'DAY 45' },
      { day: 60, price: 98000, label: 'DAY 60' },
      { day: 75, price: 95000, label: 'DAY 75' },
      { day: 20, price: 92800, label: 'CURRENT (D+20)' }
    ],
    releaseMarkers: [
      { day: 15, shares: '1.5M Shares' },
      { day: 30, shares: '3.2M Shares' }
    ]
  },
  {
    id: 3,
    nameKR: "케이바이오랩",
    code: "399120.KQ",
    listingDate: "2025-11-12",
    dropPercent: -35.5,
    daysAfterIPO: "D+16",
    marketCap: "420B",
    marketPrice: "₩64,500",
    marketPriceChange: "▼ ₩1,800",
    marketPriceChangePercent: "(2.71%)",
    ipoPrice: "₩100,000",
    subscription: "980:1",
    totalDrop: -35.5,
    kosdaq: "#68",
    description: "Biopharmaceutical research and development company specializing in cancer treatments. Early investors have been taking profits amid uncertainty in clinical trial outcomes.",
    chartData: [
      { day: 0, price: 100000, label: 'IPO DAY' },
      { day: 15, price: 88000, label: 'DAY 15' },
      { day: 30, price: 78000, label: 'DAY 30' },
      { day: 45, price: 72000, label: 'DAY 45' },
      { day: 60, price: 68000, label: 'DAY 60' },
      { day: 75, price: 66000, label: 'DAY 75' },
      { day: 16, price: 64500, label: 'CURRENT (D+16)' }
    ],
    releaseMarkers: [
      { day: 15, shares: '0.8M Shares' },
      { day: 30, shares: '1.9M Shares' }
    ]
  },
  {
    id: 4,
    nameKR: "넥스트엔터",
    code: "088450.KQ",
    listingDate: "2025-11-15",
    dropPercent: -31.0,
    daysAfterIPO: "D+13",
    marketCap: "210B",
    marketPrice: "₩41,400",
    marketPriceChange: "▼ ₩900",
    marketPriceChangePercent: "(2.13%)",
    ipoPrice: "₩60,000",
    subscription: "720:1",
    totalDrop: -31.0,
    kosdaq: "#95",
    description: "Entertainment and media platform provider. The stock has seen downward pressure from profit-taking and concerns over user growth metrics in the highly competitive streaming market.",
    chartData: [
      { day: 0, price: 60000, label: 'IPO DAY' },
      { day: 15, price: 52000, label: 'DAY 15' },
      { day: 30, price: 48000, label: 'DAY 30' },
      { day: 45, price: 45000, label: 'DAY 45' },
      { day: 60, price: 43000, label: 'DAY 60' },
      { day: 75, price: 42000, label: 'DAY 75' },
      { day: 13, price: 41400, label: 'CURRENT (D+13)' }
    ],
    releaseMarkers: [
      { day: 15, shares: '0.5M Shares' },
      { day: 30, shares: '1.2M Shares' }
    ]
  },
  {
    id: 5,
    nameKR: "스마트그린",
    code: "122900.KS",
    listingDate: "2025-11-19",
    dropPercent: -28.4,
    daysAfterIPO: "D+9",
    marketCap: "670B",
    marketPrice: "₩53,700",
    marketPriceChange: "▼ ₩1,400",
    marketPriceChangePercent: "(2.54%)",
    ipoPrice: "₩75,000",
    subscription: "850:1",
    totalDrop: -28.4,
    kosdaq: "#51",
    description: "Renewable energy solutions and ESG technology company. Despite strong fundamentals, the stock experienced selling pressure from early-stage venture capital exits.",
    chartData: [
      { day: 0, price: 75000, label: 'IPO DAY' },
      { day: 15, price: 68000, label: 'DAY 15' },
      { day: 30, price: 62000, label: 'DAY 30' },
      { day: 45, price: 58000, label: 'DAY 45' },
      { day: 60, price: 56000, label: 'DAY 60' },
      { day: 75, price: 54500, label: 'DAY 75' },
      { day: 9, price: 53700, label: 'CURRENT (D+9)' }
    ],
    releaseMarkers: [
      { day: 15, shares: '1.0M Shares' },
      { day: 30, shares: '2.3M Shares' }
    ]
  },
  {
    id: 6,
    nameKR: "디지털시큐리티",
    code: "443120.KQ",
    listingDate: "2025-11-21",
    dropPercent: -24.1,
    daysAfterIPO: "D+7",
    marketCap: "310B",
    marketPrice: "₩37,950",
    marketPriceChange: "▼ ₩750",
    marketPriceChangePercent: "(1.94%)",
    ipoPrice: "₩50,000",
    subscription: "640:1",
    totalDrop: -24.1,
    kosdaq: "#78",
    description: "Cybersecurity and blockchain infrastructure provider. The stock faced headwinds from broader tech sector volatility and initial profit-taking by institutional investors.",
    chartData: [
      { day: 0, price: 50000, label: 'IPO DAY' },
      { day: 15, price: 46000, label: 'DAY 15' },
      { day: 30, price: 42000, label: 'DAY 30' },
      { day: 45, price: 40000, label: 'DAY 45' },
      { day: 60, price: 39000, label: 'DAY 60' },
      { day: 75, price: 38500, label: 'DAY 75' },
      { day: 7, price: 37950, label: 'CURRENT (D+7)' }
    ],
    releaseMarkers: [
      { day: 15, shares: '0.6M Shares' },
      { day: 30, shares: '1.5M Shares' }
    ]
  },
  {
    id: 7,
    nameKR: "클라우드네트웍스",
    code: "229800.KQ",
    listingDate: "2025-11-25",
    dropPercent: -19.5,
    daysAfterIPO: "D+3",
    marketCap: "150B",
    marketPrice: "₩40,250",
    marketPriceChange: "▼ ₩500",
    marketPriceChangePercent: "(1.23%)",
    ipoPrice: "₩50,000",
    subscription: "580:1",
    totalDrop: -19.5,
    kosdaq: "#112",
    description: "Cloud computing and network infrastructure services. Recently listed with moderate downward pressure from early profit-taking and market consolidation.",
    chartData: [
      { day: 0, price: 50000, label: 'IPO DAY' },
      { day: 15, price: 47000, label: 'DAY 15' },
      { day: 30, price: 44000, label: 'DAY 30' },
      { day: 45, price: 42500, label: 'DAY 45' },
      { day: 60, price: 41500, label: 'DAY 60' },
      { day: 75, price: 41000, label: 'DAY 75' },
      { day: 3, price: 40250, label: 'CURRENT (D+3)' }
    ],
    releaseMarkers: [
      { day: 15, shares: '0.4M Shares' },
      { day: 30, shares: '1.0M Shares' }
    ]
  }
];

// 차트 데이터를 정렬하는 함수
const getSortedChartData = (data: Array<{ day: number; price: number; label: string }>) => {
  return [...data].sort((a, b) => a.day - b.day);
};

// 커스텀 툴팁
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f172a] border border-[rgba(19,127,236,0.4)] rounded-[8px] px-[13px] py-[7px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[#f1f5f9] text-[12px]">
          ₩{payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function App() {
  const [selectedStock, setSelectedStock] = useState<StockData>(stocksData[0]);
  const sortedChartData = getSortedChartData(selectedStock.chartData);

  return (
    <div className="bg-[#0a0f16] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <div className="content-stretch flex flex-col isolate items-start min-h-[1088px] overflow-clip relative shrink-0 w-full" data-name="Container">
        {/* Header */}
        <div className="backdrop-blur-[6px] bg-[rgba(21,28,39,0.8)] relative shrink-0 w-full z-[2]" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#1e293b] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[40px] relative w-full">
              {/* Logo and Search */}
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
                  {/* Logo */}
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
                    <div className="bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Overlay">
                      <div className="relative shrink-0 size-[18px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g id="Container">
                            <path d={svgPaths.p4c2b800} fill="var(--fill-0, #137FEC)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="h-[22.5px] leading-[0] not-italic relative shrink-0 tracking-[-0.45px] w-[156.78px]" data-name="Heading 2">
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center left-0 text-[18px] text-white top-[10.5px] w-[100.92px]">
                        <p className="leading-[22.5px] whitespace-pre-wrap">{`IPO Tracker `}</p>
                      </div>
                      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center left-[104.92px] text-[#64748b] text-[12px] top-[12.5px] w-[51.86px]">
                        <p className="leading-[16px] whitespace-pre-wrap">Nov 2025</p>
                      </div>
                    </div>
                  </div>
                  {/* Search */}
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[8px] w-full" data-name="Container">
                    <div className="bg-[rgba(30,41,59,0.5)] content-stretch flex h-full items-center justify-center pl-[16px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Overlay">
                      <div className="relative shrink-0 size-[15px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                          <g id="Container">
                            <path d={svgPaths.p2dbaedc0} fill="var(--fill-0, #94A3B8)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="bg-[rgba(30,41,59,0.5)] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative rounded-br-[8px] rounded-tr-[8px]" data-name="Input">
                      <div className="absolute bottom-[11.5px] content-stretch flex flex-col items-start left-[8px] overflow-clip pr-[10.37px] top-[11.5px]" data-name="Container">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[185.63px]">
                          <p className="leading-[normal] whitespace-pre-wrap">Search KRX code or name...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nav */}
              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-end relative w-full">
                  <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
                    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
                      <div aria-hidden="true" className="absolute border-[#137fec] border-b-2 border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] w-[131.95px]">
                        <p className="leading-[21px] whitespace-pre-wrap">High-Drop Analysis</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[103.42px]">
                        <p className="leading-[21px] whitespace-pre-wrap">Upcoming IPOs</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[79.98px]">
                        <p className="leading-[21px] whitespace-pre-wrap">Market Map</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
                    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
                      <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
                          <g id="Container">
                            <path d={svgPaths.p2ab08e80} fill="var(--fill-0, white)" id="Icon" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(19,127,236,0.2)] content-stretch flex flex-col items-start p-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
                    <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Image">
                      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-stretch flex h-[1023px] items-start overflow-clip relative shrink-0 w-full z-[1]" data-name="Main">
          {/* Left Sidebar (Aside) */}
          <div className="bg-[#0a0f16] content-stretch flex flex-col items-start min-w-[280px] pr-px relative self-stretch shrink-0 w-[280px]" data-name="Aside">
            <div aria-hidden="true" className="absolute border-[#1e293b] border-r border-solid inset-0 pointer-events-none" />
            {/* Header */}
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[24px] relative w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-[153.8px]">
                      <p className="leading-[20px] whitespace-pre-wrap">High-Drop Stocks</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(244,63,94,0.1)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[10px] w-[28.73px]">
                      <p className="leading-[15px] whitespace-pre-wrap">TOP 7</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] w-full">
                    <p className="leading-[15px] whitespace-pre-wrap">Listed since 2025-11-01</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Stock List */}
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[24px] px-[12px] relative size-full">
                  {stocksData.map((stock, index) => (
                    <button
                      key={stock.id}
                      onClick={() => setSelectedStock(stock)}
                      className={`relative rounded-[12px] shrink-0 w-full transition-all ${
                        selectedStock.id === stock.id ? 'bg-[#137fec]' : ''
                      }`}
                    >
                      {selectedStock.id === stock.id && (
                        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.2),0px_4px_6px_-4px_rgba(19,127,236,0.2)]" />
                      )}
                      <div aria-hidden="true" className={`absolute border ${selectedStock.id === stock.id ? 'border-[rgba(0,0,0,0)]' : 'border-[rgba(0,0,0,0)]'} border-solid inset-0 pointer-events-none rounded-[12px]`} />
                      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                          <div className={`content-stretch flex flex-col items-start relative shrink-0`}>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <div className={`flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] ${selectedStock.id === stock.id ? 'text-white' : 'text-[#cbd5e1]'}`}>
                                <p className="leading-[20px] whitespace-pre-wrap">{stock.nameKR}</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] ${selectedStock.id === stock.id ? 'text-white opacity-80' : 'text-[#64748b]'}`}>
                                <p className="leading-[15px] whitespace-pre-wrap">{stock.code} | {stock.listingDate}</p>
                              </div>
                            </div>
                          </div>
                          <div className={`flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] ${selectedStock.id === stock.id ? 'text-white' : 'text-[#f43f5e]'}`}>
                            <p className="leading-[16px] whitespace-pre-wrap">{stock.dropPercent}%</p>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-between pt-[9px] relative shrink-0 w-full">
                          <div aria-hidden="true" className={`absolute border-solid border-t inset-0 pointer-events-none ${selectedStock.id === stock.id ? 'border-[rgba(255,255,255,0.2)]' : 'border-[#1e293b]'}`} />
                          <div className="relative shrink-0">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
                              <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] ${selectedStock.id === stock.id ? 'text-white' : 'text-[#94a3b8]'}`}>
                                <p className="leading-[15px] whitespace-pre-wrap">{stock.daysAfterIPO}</p>
                              </div>
                            </div>
                          </div>
                          <div className={`relative shrink-0 ${selectedStock.id === stock.id ? '' : 'opacity-80'}`}>
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
                              <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] ${selectedStock.id === stock.id ? 'text-white' : 'text-[#64748b]'}`}>
                                <p className="leading-[15px] whitespace-pre-wrap">Cap: {stock.marketCap} ₩</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Stock Details */}
          <div className="bg-[#0a0f16] relative self-stretch shrink-0 w-[1000px]" data-name="Section">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
                {/* Top Controls */}
                <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between relative w-full">
                        <div className="bg-[#151c27] content-stretch flex items-start p-[5px] relative rounded-[8px] shrink-0">
                          <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="bg-[#334155] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative">
                              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] text-center w-[83.52px]">
                                <p className="leading-[16px] whitespace-pre-wrap">3-Month View</p>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative">
                              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[91.75px]">
                                <p className="leading-[16px] whitespace-pre-wrap">Detailed History</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="bg-[#1e293b] content-stretch flex items-center justify-center pb-[9px] pt-[8px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]">
                              <div aria-hidden="true" className="absolute border-2 border-[#0a0f16] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                              <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[10px] text-center w-[18.41px]">
                                <p className="leading-[15px] whitespace-pre-wrap">기관</p>
                              </div>
                            </div>
                            <div className="h-[32px] relative shrink-0 w-[24px]">
                              <div className="absolute bg-[#334155] content-stretch flex items-center justify-center left-[-8px] pb-[9px] pt-[8px] px-[2px] rounded-[9999px] size-[32px] top-0">
                                <div aria-hidden="true" className="absolute border-2 border-[#0a0f16] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                                <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#f1f5f9] text-[10px] text-center w-[18.41px]">
                                  <p className="leading-[15px] whitespace-pre-wrap">외인</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#137fec] content-stretch flex h-[40px] items-center justify-center pb-[10.5px] pt-[9.5px] px-[24px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#1168d4] transition-colors">
                            <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] h-[40px] left-0 right-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(19,127,236,0.3),0px_4px_6px_-4px_rgba(19,127,236,0.3)] top-1/2" />
                            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[59.64px]">
                              <p className="leading-[20px] whitespace-pre-wrap">Set Alert</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stock Title */}
                <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="flex flex-col font-['Noto_Sans_KR:Black',sans-serif] font-black h-[40px] justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px]">
                          <p className="leading-[40px] whitespace-pre-wrap">{selectedStock.nameKR}</p>
                        </div>
                      </div>
                      <div className="bg-[#1e293b] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[8px] shrink-0">
                        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.7px]">
                          <p className="leading-[20px] whitespace-pre-wrap">{selectedStock.code}</p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative">
                        <div className="flex flex-col items-end min-w-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-end min-w-[inherit] relative w-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0">
                              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px]">
                                <p className="leading-[16px] whitespace-pre-wrap">Listing Date: {new Date(selectedStock.listingDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-[768px]">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-full">
                        <p className="leading-[26px]">{selectedStock.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[16px] h-[118px] items-start justify-center relative shrink-0 w-full">
                    {/* Market Price */}
                    <div className="bg-[#151c27] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch">
                      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[97.19px]">
                          <p className="leading-[16px] whitespace-pre-wrap">Market Price</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex items-baseline left-[21px] right-[21px] top-[45px]">
                        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white">
                          <p className="leading-[32px] whitespace-pre-wrap">{selectedStock.marketPrice}</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex items-center gap-[4px] left-[21px] right-[21px] top-[81px]">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px]">
                          <p className="leading-[16px] whitespace-pre-wrap">{selectedStock.marketPriceChange}</p>
                        </div>
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px]">
                          <p className="leading-[16px] whitespace-pre-wrap">{selectedStock.marketPriceChangePercent}</p>
                        </div>
                      </div>
                    </div>
                    {/* IPO Price */}
                    <div className="bg-[#151c27] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch">
                      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[63.83px]">
                          <p className="leading-[16px] whitespace-pre-wrap">IPO Price</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex items-baseline left-[21px] right-[21px] top-[45px]">
                        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white">
                          <p className="leading-[32px] whitespace-pre-wrap">{selectedStock.ipoPrice}</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[81px]">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="leading-[16px] whitespace-pre-wrap">Subscription: {selectedStock.subscription}</p>
                        </div>
                      </div>
                    </div>
                    {/* Total Drop */}
                    <div className="bg-[#151c27] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch">
                      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[81.59px]">
                          <p className="leading-[16px] whitespace-pre-wrap">Total Drop</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex items-baseline left-[21px] right-[21px] top-[45px]">
                        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[24px]">
                          <p className="leading-[32px] whitespace-pre-wrap">{selectedStock.totalDrop}%</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[81px]">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="leading-[16px] whitespace-pre-wrap">From listing high</p>
                        </div>
                      </div>
                    </div>
                    {/* Market Cap */}
                    <div className="bg-[#151c27] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch">
                      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[21px]">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[86.08px]">
                          <p className="leading-[16px] whitespace-pre-wrap">Market Cap</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex items-baseline left-[21px] right-[21px] top-[45px]">
                        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white">
                          <p className="leading-[32px] whitespace-pre-wrap">₩{selectedStock.marketCap}</p>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col items-start left-[21px] right-[21px] top-[81px]">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px]">
                          <p className="leading-[16px] whitespace-pre-wrap">KOSDAQ Ranking: {selectedStock.kosdaq}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-[#151c27] h-[500px] min-h-[500px] relative rounded-[16px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  
                  {/* Chart Header */}
                  <div className="absolute content-stretch flex flex-col items-start left-[33px] pb-[40px] right-[33px] top-[33px]">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[20px]">
                            <p className="leading-[28px] whitespace-pre-wrap">{`Price Volatility & Lock-up Impact`}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px]">
                            <p className="leading-[20px] whitespace-pre-wrap">Correlation between lock-up releases and institutional selling pressure</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[23.99px] items-center relative shrink-0">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="bg-[#137fec] relative rounded-[9999px] shrink-0 size-[12px]">
                            <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(19,127,236,0.2)] size-[12px] top-1/2" />
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.6px] uppercase">
                              <p className="leading-[16px] whitespace-pre-wrap">Closing Price</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="bg-[#f43f5e] h-[16px] rounded-[9999px] shrink-0 w-[4px]" />
                          <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.6px] uppercase">
                              <p className="leading-[16px] whitespace-pre-wrap">Release Marker</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Container */}
                  <div className="absolute left-[33px] right-[33px] top-[125px] bottom-[50px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sortedChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <defs>
                          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#137FEC" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#137FEC" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="0" stroke="transparent" />
                        <XAxis 
                          dataKey="day" 
                          tick={false}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis 
                          tick={false}
                          axisLine={false}
                          tickLine={false}
                          domain={['dataMin - 10000', 'dataMax + 10000']}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        
                        {/* Release Markers */}
                        {selectedStock.releaseMarkers?.map((marker, idx) => (
                          <ReferenceLine
                            key={idx}
                            x={marker.day}
                            stroke="#F43F5E"
                            strokeDasharray="6.99 3.5"
                            strokeWidth={1.75}
                            opacity={0.6}
                            label={{
                              value: `D+${marker.day} RELEASE (${marker.shares})`,
                              position: 'top',
                              fill: '#FFFFFF',
                              fontSize: 9,
                              fontWeight: 900,
                              offset: 10,
                              content: (props: any) => {
                                const { viewBox } = props;
                                return (
                                  <g>
                                    <rect
                                      x={viewBox.x - 65}
                                      y={viewBox.y - 35}
                                      width={130}
                                      height={22}
                                      fill="#F43F5E"
                                      rx={4}
                                    />
                                    <text
                                      x={viewBox.x}
                                      y={viewBox.y - 22}
                                      textAnchor="middle"
                                      fill="white"
                                      fontSize={9}
                                      fontWeight={900}
                                      fontFamily="Inter"
                                    >
                                      {`D+${marker.day} RELEASE (${marker.shares})`}
                                    </text>
                                  </g>
                                );
                              }
                            }}
                          />
                        ))}
                        
                        {/* D+90 Projected Line */}
                        <ReferenceLine
                          x={90}
                          stroke="#F43F5E"
                          strokeDasharray="6.99 3.5"
                          strokeWidth={1.75}
                          opacity={0.6}
                          label={{
                            value: 'D+90 PROJECTED',
                            position: 'top',
                            fill: '#FFFFFF',
                            fontSize: 9,
                            fontWeight: 900,
                            offset: 10,
                            content: (props: any) => {
                              const { viewBox } = props;
                              return (
                                <g>
                                  <rect
                                    x={viewBox.x - 42}
                                    y={viewBox.y - 35}
                                    width={84}
                                    height={22}
                                    fill="#64748B"
                                    rx={4}
                                  />
                                  <text
                                    x={viewBox.x}
                                    y={viewBox.y - 22}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize={9}
                                    fontWeight={900}
                                    fontFamily="Inter"
                                  >
                                    D+90 PROJECTED
                                  </text>
                                </g>
                              );
                            }
                          }}
                        />
                        
                        <Area
                          type="monotone"
                          dataKey="price"
                          stroke="none"
                          fillOpacity={1}
                          fill="url(#colorPrice)"
                        />
                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke="#137FEC"
                          strokeWidth={4}
                          dot={{ fill: '#137FEC', r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="absolute left-[33px] right-[33px] bottom-[24px]">
                    <div className="flex items-start justify-between px-[4px]">
                      {['IPO DAY', 'DAY 15', 'DAY 30', 'DAY 45', 'DAY 60', 'DAY 75', `CURRENT (${selectedStock.daysAfterIPO})`].map((label, idx) => (
                        <div key={idx} className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase">
                          <p className="leading-[15px] whitespace-pre-wrap">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Warning Section */}
                {selectedStock.warning && (
                  <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                      <div className="bg-[rgba(244,63,94,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch">
                        <div aria-hidden="true" className="absolute border border-[rgba(244,63,94,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[16px] items-center p-[17px] relative size-full">
                            <div className="h-[19px] relative shrink-0 w-[22px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
                                <g id="Container">
                                  <path d={svgPaths.p7555480} fill="var(--fill-0, #F43F5E)" id="Icon" />
                                </g>
                              </svg>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px]">
                                    <p className="leading-[16px] whitespace-pre-wrap">Voluntary Lock-up Warning</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px]">
                                    <p className="leading-[16.5px] whitespace-pre-wrap">{selectedStock.warning}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#1e293b] content-stretch flex flex-col items-center justify-center pb-[23.75px] pt-[22.75px] px-[32px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#2a3951] transition-colors">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] text-center">
                          <p className="leading-[20px] whitespace-pre-wrap">Download Full Report</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
