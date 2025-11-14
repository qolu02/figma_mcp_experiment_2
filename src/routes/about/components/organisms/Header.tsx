export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-28 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-newsreader font-medium text-[32px] text-[#426b1f] leading-none tracking-[-0.32px]">
          World Peas
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <button className="text-base text-black hover:text-[#426b1f] transition-colors">
            Shop
          </button>
          <button className="text-base text-black hover:text-[#426b1f] transition-colors">
            Newstand
          </button>
          <button className="text-base text-black hover:text-[#426b1f] transition-colors">
            Who we are
          </button>
          <button className="text-base text-black hover:text-[#426b1f] transition-colors">
            My profile
          </button>
        </nav>

        {/* Cart Button */}
        <button className="bg-[#426b1f] text-white px-6 h-12 rounded-lg font-semibold text-base hover:bg-[#355717] transition-colors">
          Basket (3)
        </button>
      </div>
    </header>
  );
};
