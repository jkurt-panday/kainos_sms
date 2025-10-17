"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";

// import your config files
import { adminLinks } from "@/components/config/links-admin";
import { teacherLinks } from "@/components/config/links-teacher";
import { parentLinks } from "@/components/config/links-parent";

type Role = "admin" | "teacher" | "parent";

type NavbarProps = {
  role: Role;
};

const Navbar: React.FC<NavbarProps> = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);

  // pick which links to use based on role
  const sideList =
    role === "admin"
      ? adminLinks
      : role === "teacher"
      ? teacherLinks
      : parentLinks;

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // handle ESC + scroll lock
  useEffect(() => {
    const handleEscKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 h-16 bg-white border-b border-gray-200 z-40">
        {/* Left: Logo + Hamburger (only show hamburger on mobile) */}
        <div className="flex items-center">
          <button
            className="mr-2 md:hidden" // only visible on mobile
            aria-label="Open Menu"
            onClick={handleDrawer}
          >
            <GiHamburgerMenu className="text-3xl" />
          </button>

          <Image src={"/globe.svg"} width={32} height={32} alt="Logo" />
          <h1 className="ml-3 font-semibold text-lg">My App</h1>
        </div>
      </nav>

      {/* Overlay (only mobile/tablet) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40
          transform transition-transform duration-300
          md:translate-x-0  /* always visible on md+ */
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center p-4 border-b h-16">
          <Image src={"/globe.svg"} alt="Logo 2" width={32} height={32} />
          <h1 className="ml-4 font-semibold">My App</h1>
        </div>

        {/* Sidebar links */}
        <nav className="flex flex-col mt-4">
          {sideList.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 text-gray-700 hover:bg-[#f47c2b] hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 p-4 bg-blue-500 text-white hover:bg-blue-600"
          >
            <BiLogOut className="text-2xl" />
            <span>Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main content wrapper (adds margin when sidebar is visible on desktop) */}
      <div className="pt-16 md:ml-64">
        {/* Your page content should go here in layout or parent component */}
      </div>
    </>
  );
};

export default Navbar;
