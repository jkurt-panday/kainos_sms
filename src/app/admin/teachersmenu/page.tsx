import TeacherProfileCard from "@/components/TeacherProfileCard";

export default function TeachersMenu() {
  return (
    <>
      <div className="min-h-lvh p-3 bg-hex-bg-gray md:ml-64 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between mb-4 px-5 gap-4">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h1 className="text-6xl text-left font-bold text-hex-blue">
              Teachers
            </h1>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <button
              type="button"
              aria-label="Add new teacher"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f47c2b] to-[#ffb86b] text-white font-semibold shadow-md hover:from-[#f36a21] hover:to-[#ff9f3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f47c2b] transition-colors"
            >
              + Add New Teacher
            </button>
          </div>
        </div>
        {/* teacher profile card */}
        <TeacherProfileCard></TeacherProfileCard>
      </div>
    </>
  );
}
