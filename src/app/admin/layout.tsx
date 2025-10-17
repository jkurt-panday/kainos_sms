

// src/app/dashboard/layout.tsx
import Navbar from "@/components/layout/Navbar-Sidebar";

// import Sidebar from "@/components/layout/sidenav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>
          <Navbar role="admin">
          </Navbar>

          {/* <Sidebar></Sidebar> */}

          {children}
        </main>
      </body>
    </html>
  )
}
