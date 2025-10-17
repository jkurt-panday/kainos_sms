import StudentTables from "@/components/StudentTables";

export default function StudentsMenu() {
  return (
    <>
      <div className="min-h-lvh p-3 bg-hex-bg-gray md:ml-64 rounded-2xl">
        <h1 className="text-6xl font-bold text-hex-blue mb-4">Students</h1>
        <StudentTables></StudentTables>
      </div>
    </>
  );
}
