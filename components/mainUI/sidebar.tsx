'use client';
import { useState, FC } from 'react';
import Link from 'next/link';

type LinkType = { href: string; name: string; };
type SidebarProps = { links?: LinkType[]; };

const Sidebar: FC<SidebarProps> = ({ links }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <aside className={`md:w-64 w-full md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <nav className="bg-gray-800 text-white h-full">
                    <ul>
                        {links && links.map((link) => (
                            <li className="p-4" key={link.href}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="flex-grow p-4">
                <button className="md:hidden p-2 bg-blue-500 text-white" onClick={toggleSidebar}>
                    Toggle Sidebar
                </button>
                {/* Content of the selected page will appear here */}
            </main>
        </div>
    );
};

export default Sidebar;
