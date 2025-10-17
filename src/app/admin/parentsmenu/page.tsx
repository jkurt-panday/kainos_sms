import ParentCard from "@/components/ParentCard";

export default function ParentsMenu() {
  return (
    <>
      {/* TODO change the layout of this page  */}
      <div className="min-h-lvh p-3 bg-hex-bg-gray md:ml-64 rounded-2xl">
        <h1 className="text-6xl font-bold text-hex-blue mb-4">Parents</h1>
        <ParentCard></ParentCard>
      </div>
    </>
  );
}
