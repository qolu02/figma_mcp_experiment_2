const imgImage42 = "https://www.figma.com/api/mcp/asset/fb207721-8027-41f7-930e-d3bf4ed5615d";
const imgFigmaLogo1 = "https://www.figma.com/api/mcp/asset/630076f9-a036-4b60-aaff-20c3d3d038e0";
const imgUnion = "https://www.figma.com/api/mcp/asset/22d63441-50dd-4721-ba7b-3351fc732a4b";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-[#161616] overflow-hidden">
      {/* Figma Logo Background - Colorful Circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-[45%] -translate-y-1/2 w-[126vw] h-[126vw] max-w-[2025px] max-h-[2025px] pointer-events-none opacity-95">
        <div className="absolute left-[20.83%] right-[20.83%] top-[6.25%] bottom-[6.25%]">
          <img
            src={imgFigmaLogo1}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full">
        <div className="h-full w-full max-w-[1600px] mx-auto px-4 md:px-0 relative">
          {/* Left Content - Prevent overlap with max-width */}
          <div className="absolute left-4 md:left-[8.75%] top-[13.33%] max-w-[35%] md:max-w-[40%] flex flex-col gap-4 md:gap-6 lg:gap-8">
            {/* FREE Badge */}
            <div className="inline-block w-fit">
              <div className="bg-white border-[6px] md:border-[10px] lg:border-[13px] border-[#161616] rounded-2xl lg:rounded-[17px] px-4 md:px-5 lg:px-6 py-1 lg:py-0.5">
                <span className="text-[#161616] text-3xl md:text-[42px] lg:text-[52px] font-bold leading-tight lg:leading-[1.5]">
                  FREE
                </span>
              </div>
            </div>

            {/* Figma Kit Title - Each word on its own line, no breaking */}
            <h1 className="text-white font-bold leading-[0.9] md:leading-[0.95] lg:leading-none">
              <div className="text-[clamp(60px,8vw,157px)] whitespace-nowrap">Figma</div>
              <div className="text-[clamp(60px,8vw,157px)] whitespace-nowrap">Kit</div>
            </h1>
          </div>

          {/* Relume Logo */}
          <div className="absolute left-4 md:left-[8.75%] bottom-[10%] md:bottom-[12%] lg:bottom-[10.75%]">
            <div className="w-28 md:w-36 lg:w-[212px] h-auto">
              <img
                src={imgUnion}
                alt="Relume Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Image - Mockups - Start further right to avoid overlap */}
          <div className="absolute left-[55%] md:left-[45%] lg:left-[40%] top-0 bottom-0 right-0 hidden sm:block overflow-hidden">
            <div className="relative h-full w-full">
              <img
                src={imgImage42}
                alt="Figma Kit Mockups"
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[240%] w-auto object-cover object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
