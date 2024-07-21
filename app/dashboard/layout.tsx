//app/dashboard/layout.tsx
import Sidebar from "../../components/mainUI/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "Appointments", href: "/dashboard/appointments" },
    { name: "Profile", href: "/dashboard/profile" },
    { name: "Settings", href: "/dashboard/settings" },
    { name: "Reports", href: "/dashboard/help" },
  ];
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="sticky top-0 w-full md:w-64 bg-gray-800 text-white h-full">
        <Sidebar links={links} />
      </div>
      <div className="flex-grow p-6 overflow-y-auto">{children}</div>
    </div>
  );
}
