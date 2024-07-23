import Link from 'next/link';

type SidebarProps = {
  links: { name: string; href: string; icon: string }[];
};

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <div className="py-4 px-2">
      <ul>
        {links.map((link) => (
          <li key={link.name} className="mb-4">
            <Link href={link.href} className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition duration-200 ease-in-out">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <use href={`#${link.icon}`} />
              </svg>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;