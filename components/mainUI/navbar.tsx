// components/mainUI/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { User, RealtimeChannel } from "@supabase/supabase-js";

async function getUser(): Promise<User | null> {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}

const BurgerNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    let authChannel: RealtimeChannel;

    const setupAuthListener = async () => {
      const initialUser = await getUser();
      setIsLoggedIn(!!initialUser);
      setIsAdmin(initialUser?.email === "giosterr44@gmail.com");

      authChannel = supabase.channel("auth");
      authChannel
        .on("broadcast", { event: "auth-state-change" }, (payload) => {
          const user = payload.payload as User | null;
          setIsLoggedIn(!!user);
          setIsAdmin(user?.email === "giosterr44@gmail.com");
        })
        .subscribe((status) => {
          if (status === "SUBSCRIBED") {
            console.log("Subscribed to auth channel");
          }
        });
    };

    setupAuthListener();

    return () => {
      if (authChannel) {
        supabase.removeChannel(authChannel);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      const authChannel = supabase.channel("auth");
      authChannel.send({
        type: "broadcast",
        event: "auth-state-change",
        payload: null,
      });

      closeMenu();
      // You might want to redirect to home page or login page after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="rounded-full w-fit h-fit text-white absolute top-10 left-[300px] md:top-0 md:left-[1200px] z-20">
      <div className="flex justify-between items-center p-4 ">
        <button
          onClick={toggleMenu}
          className="focus:outline-none menu-button md:w-10 md:h-10 w-6 h-6"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-gray-800 text-white flex flex-col justify-center items-center z-50 overflow-hidden transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Link href="/" className="mb-4 text-xl" onClick={closeMenu}>
          Home
        </Link>
        {isHomePage && (
          <>
            <Link
              href="#prices-section"
              className="mb-4 text-xl"
              onClick={closeMenu}
            >
              Prices
            </Link>
            <Link href="#gallery" className="mb-4 text-xl" onClick={closeMenu}>
              Gallery
            </Link>
          </>
        )}
        {!isLoggedIn ? (
          <Link
            href="/login_register"
            className="mb-4 text-xl"
            onClick={closeMenu}
          >
            Login/Register
          </Link>
        ) : (
          <>
            {!isAdmin ? (
              <Link
                href="/dashboard"
                className="mb-4 text-xl"
                onClick={closeMenu}
              >
                Dashboard
              </Link>
            ) : (
              <Link href="/admin" className="mb-4 text-xl" onClick={closeMenu}>
                Admin
              </Link>
            )}
            <button onClick={handleLogout} className="mb-4 text-xl">
              Logout
            </button>
          </>
        )}
        <div className="">
          <div className="w-[250px] text-2xl font-bold">
            <Image
              src="/images/logo-transparent.png"
              alt="Logo"
              width={250}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BurgerNavbar;
