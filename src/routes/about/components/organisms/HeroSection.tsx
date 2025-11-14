import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Hero Heading */}
        <h2 className="font-newsreader text-4xl md:text-5xl lg:text-[64px] leading-[1.2] tracking-[-1.28px] text-black text-center max-w-[1020px] mx-auto mb-12">
          <span>We're </span>
          <span className="italic">farmers</span>
          <span>, </span>
          <span className="italic">purveyors</span>
          <span>, and </span>
          <span className="italic">eaters</span>
          <span> of organically grown food.</span>
        </h2>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button className="bg-[#426b1f] text-white px-8 h-16 rounded-lg font-inter font-semibold text-xl hover:bg-[#355717]">
            Browse our shop
          </Button>
        </div>
      </div>
    </section>
  );
};
