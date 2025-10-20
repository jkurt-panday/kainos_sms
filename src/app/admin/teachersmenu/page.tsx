// src/app/admin/teachers/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Teacher } from "@/types/definitions";

export default function TeachersMenu() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  // Load all teachers on mount
  useEffect(() => {
    const fetchTeachers = async () => {
      const { data, error } = await supabase.from("Teachers").select("*");
      if (!error) setTeachers(data);
    };
    fetchTeachers();
  }, []);

  return (
    <>
      <div className="min-h-lvh p-3 bg-hex-bg-gray md:ml-64 rounded-2xl relative">
        {/* Header + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 px-5 gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-6xl font-bold text-hex-blue">Teachers</h1>
          </div>

          <Link
            href="/admin/teachersmenu/new"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2 rounded-lg 
                       bg-gradient-to-r from-[#f47c2b] to-[#ffb86b] text-white font-semibold shadow-md 
                       hover:from-[#f36a21] hover:to-[#ff9f3d] focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-[#f47c2b] transition-colors"
          >
            + Add New Teacher
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mb-10 p-5 rounded-2xl">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-10 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            >
              <div className="flex flex-col items-center pb-3">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={"/globe.svg"}
                  width={96}
                  height={96}
                  alt="Teacher Image"
                />
                <h5 className="mb-1 text-xl font-bold text-hex-orange dark:text-white">
                  {teacher.name}
                </h5>
                <div className="flex flex-col items-center gap-1 mt-4 md:mt-6">
                  <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-hex-blue rounded-lg">
                    {teacher.email}
                  </span>
                  <span className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
                    {teacher.password || "No subject assigned"}
                  </span>
                  {/* clicking this passes the teacherId in the URL */}
                  <Link
                    href={`/admin/teachersmenu/${teacher.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// {showModal && (
//           <div className="fixed inset-0 bg-black/50 bg-opacity-25 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//               >
//                 ✕
//               </button>

//               <h2 className="text-2xl font-semibold mb-4  text-hex-blue">
//                 Add New Teacher
//               </h2>

//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   alert("Submit handler here — you can connect to Supabase later");
//                   setShowModal(false);
//                 }}
//                 className="space-y-4"
//               >
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full border rounded-md p-2"
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full border rounded-md p-2"
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full border rounded-md p-2"
//                   required
//                 />

//                 <button
//                   type="submit"
//                   className="w-full py-2 bg-hex-blue text-white rounded-md font-semibold hover:bg-blue-700 transition"
//                 >
//                   Add Teacher
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
