import AdminCard from "@/components/AdminCard";

export default function adminDashboard() {
  return (
    <>
      <div className="min-h-lvh p-3 bg-[#fdf9f2] md:ml-64 rounded-2xl">
        <h1 className="text-6xl font-bold ml-4 bg-gradient-to-r from-[#1e4b87] via-[#398efd] to-[#ffdca8] bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <AdminCard />
      </div>
    </>
  );
}
