/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-900 to-red-600 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-white flex items-center space-x-2"
        >
          <SunIcon className="h-7 w-7 text-yellow-400 animate-pulse" />
          <span>SoulBuddy</span>
        </Link>

        {/* Menu Items (Desktop) - Only visible if signed in */}
        <SignedIn>
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/dashboard" text="Dashboard" Icon={HomeIcon} />
            <NavLink href="/kundali" text="Kundali" Icon={UserCircleIcon} />
            <NavLink href="/recommendations" text="Recommendations" Icon={SunIcon} />
            <UserButton />
          </div>
        </SignedIn>

        {/* Authentication Buttons (Desktop) */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-yellow-400 text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu - Only visible if signed in */}
        <SignedIn>
          <div
            className={`absolute top-16 left-0 w-full bg-gradient-to-r from-red-600 to-red-700 shadow-md z-10 md:hidden transform ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col items-center space-y-6 py-6 px-4">
              <NavLink href="/dashboard" text="Dashboard" Icon={HomeIcon} closeMenu={() => setIsMenuOpen(false)} />
              <NavLink href="/kundali" text="Kundali" Icon={UserCircleIcon} closeMenu={() => setIsMenuOpen(false)} />
              <NavLink href="/recommendations" text="Recommendations" Icon={SunIcon} closeMenu={() => setIsMenuOpen(false)} />
              <UserButton />
            </div>
          </div>
        </SignedIn>
      </nav>
    </header>
  );
};

// Reusable NavLink Component
const NavLink: React.FC<{
  href: string;
  text: string;
  Icon: React.FC<any>;
  closeMenu?: () => void;
}> = ({ href, text, Icon, closeMenu }) => (
  <Link
    href={href}
    onClick={closeMenu}
    className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-300 transform hover:scale-105"
  >
    <Icon className="h-5 w-5" />
    <span>{text}</span>
  </Link>
);

export default Navbar;
