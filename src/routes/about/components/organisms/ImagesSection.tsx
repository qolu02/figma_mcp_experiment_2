const imgLeftImage = "https://www.figma.com/api/mcp/asset/f38fdd04-260f-41fc-aef9-cf2ffb5427b5";
const imgRightImage = "https://www.figma.com/api/mcp/asset/ca68cebc-c1ea-4a72-a40b-c056633163f7";

export const ImagesSection: React.FC = () => {
  return (
    <section className="w-full bg-white pb-12 md:pb-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Left Image - Leafy Greens */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[504/693] rounded-2xl overflow-hidden">
              <img
                src={imgLeftImage}
                alt="Fresh leafy greens"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Image and Caption */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            <div className="w-full aspect-[780/480] rounded-2xl overflow-hidden">
              <img
                src={imgRightImage}
                alt="Artistic vegetable arrangement"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Caption */}
            <p className="font-inter text-sm tracking-[-0.14px] leading-relaxed text-black">
              <span className="font-medium">Central California</span>
              <span className="font-light">
                {' '}— The person who grew these was located in Central California and, er, hopefully very well-compensated.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
