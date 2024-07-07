'use client'

import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <Image src="/images/logo-transparent.png" alt="Logo" width={120} height={60} />
            </div>
          </div>

          {/* Navigation Links */}
          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="/services" className="text-gray-400 hover:text-white transition">Services</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div> */}

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link className='hover:text-yellow-300' href="/contact">
            Contact Me</Link>
            {/* <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-white transition">
              <FaFacebook size={24} />
            </a> */}
            {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-white transition">
              <FaTwitter size={24} />
            </a> */}
            <Link href="https://www.instagram.com/osvaldythebarber/?locale=us&hl=am-et" target="_blank" rel="noreferrer" className="text-white hover:text-white transition">
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>

        <Separator className="my-6 bg-white" />

        <div className="text-center text-white">
          &copy; {new Date().getFullYear()} ruizTechServices<span className='animate-pulse'>|</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}