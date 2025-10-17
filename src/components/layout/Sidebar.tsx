"use client";

import { useState } from "react";
import Link from "next/link";

type SidebarProps = {
  role: "admin" | "teacher" | "parent";
};

export default function Sidebar({ role }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = {
    admin: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/users", label: "Manage Users" },
      { href: "/settings", label: "Settings" },
    ],
    teacher: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/classes", label: "My Classes" },
      { href: "/assignments", label: "Assignments" },
    ],
    parent: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/children", label: "My Children" },
      { href: "/reports", label: "Reports" },
    ],
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 min-h-lvh w-64 bg-red-300 shadow-md transform transition-transform duration-0
        ${isOpen ? "translate-x-0" : "-translate-x-48 md:translate-x-0"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 bg-amber-300 shadow">
          <h2 className="text-xl font-bold text-gray-900">My App</h2>

          {/* Hamburger button */}
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-3">
          {navLinks[role].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-lg text-gray-800 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`
          flex-1 p-0 transition-all
          md:-ml-4 // push content to the right of sidebar on desktop
        `}
      >
        {/* Page content goes here */}
      </main>

    </div>
  );
}
