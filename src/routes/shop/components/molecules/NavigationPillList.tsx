interface NavigationPillListProps {
  items: string[];
}

export const NavigationPillList: React.FC<NavigationPillListProps> = ({ items }) => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};
