//components/mainUI/navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Changed from 'next/navigation' which is incorrect
import { supabase } from '@/lib/supabase/client';

async function getUser() {
    try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        return data.user;
    } catch (error) {
        console.error("Error getting user:", error);
        return null;
    }
}

async function handleLogout() {
    try {
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
    } catch (error) {
        console.error("Error signing out:", error);
    }
}

const BurgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getUser();
      setIsLoggedIn(!!user);
      if (user && user.email === 'giosterr44@gmail.com') {
        setIsAdmin(true);
        // router.push('/admin'); // Navigation to admin page if needed
      } else {
        setIsAdmin(false);
      }
    };

    checkAuth();

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription;
  }, [router]); // Added dependency array with router

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="rounded-full w-fit h-fit border-2 text-white absolute top-10 left-[300px] md:top-0 md:left-[1200px] z-20">
      <div className="flex justify-between items-center p-4">
        <div className="flex">
          <button onClick={toggleMenu} className="focus:outline-none menu-button" aria-expanded={isOpen} aria-label="Toggle menu">
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              {/* Icons for menu toggle */}
            </div>
          </button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-[300px] h-screen bg-gray-800 text-white flex flex-col justify-center items-center z-50 overflow-hidden transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Link href="/" className="mb-4 text-xl" onClick={closeMenu}>Home</Link>
        {isHomePage && <>
            <Link href="#prices-section" className="mb-4 text-xl" onClick={closeMenu}>Prices</Link>
            <Link href="#gallery" className="mb-4 text-xl" onClick={closeMenu}>Gallery</Link>
          </>
        }
        {!isLoggedIn ? (
          <Link href="/login_register" className="mb-4 text-xl" onClick={closeMenu}>Login/Register</Link>
        ) : (
          <>
            {!isAdmin ? (<Link href="/dashboard" className="mb-4 text-xl" onClick={closeMenu}>user</Link>) : (<Link href="/admin" className="mb-4 text-xl" onClick={closeMenu}>admin</Link>)}
            
            <button onClick={handleLogout} className="mb-4 text-xl">Logout</button>
          </>
        )}
        <div className="">
          <div className="w-[250px] text-2xl font-bold">
            <Image src="/images/logo-transparent.png" alt="Logo" width={250} height={100} layout="responsive" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BurgerNavbar;
