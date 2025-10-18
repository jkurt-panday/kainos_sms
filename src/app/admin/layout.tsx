// src/app/dashboard/layout.tsx
import Navbar from "@/components/layout/Navbar-Sidebar";

// import Sidebar from "@/components/layout/sidenav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar role="admin"></Navbar>

      {children}
    </main>
  );
}

{
  /* <html lang="en" id="admin-html">
      <body>
        {/* Layout UI */
}
{
  /* Place children where you want to render a page or nested layout */
}
<main></main>;
//   </body>
// </html>
