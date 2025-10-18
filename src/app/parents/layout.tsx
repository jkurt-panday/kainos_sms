// src/app/dashboard/layout.tsx

import Navbar from "@/components/layout/Navbar-Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Layout UI */}
      {/* Place children where you want to render a page or nested layout */}
      <main>
        <Navbar role="parent"></Navbar>
        {children}
      </main>
    </>
  );
}
