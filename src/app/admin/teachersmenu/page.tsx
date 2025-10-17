import TeacherProfileCard from "@/components/teachercomp/TeacherProfileCard";

export default function TeachersMenu() {
  return (
    <>
      <div className="min-h-lvh p-3 bg-hex-bg-gray md:ml-64 rounded-2xl">
        <div className="flex items-center justify-between mb-4 px-5">
          <h1 className="text-6xl font-bold text-hex-blue">Teachers</h1>
          <button
            type="button"
            aria-label="Add new teacher"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f47c2b] to-[#ffb86b] text-white font-semibold shadow-md hover:from-[#f36a21] hover:to-[#ff9f3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f47c2b] transition-colors"
          >
            + Add New Teacher
          </button>
        </div>
        {/* teacher profile card */}
        <TeacherProfileCard></TeacherProfileCard>
      </div>
    </>
  );
}
