"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Teacher } from "@/types/definitions";
import { JSX } from "react";
import Loading from "./loading";

export default function TeachersMenuPage(): JSX.Element {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async (): Promise<void> => {
      const { data, error } = await supabase.from("Teachers").select("*");
      if (!error && data) setTeachers(data as Teacher[]);
      // for loading
      setLoading(false);
    };
    void fetchTeachers();
  }, []);

  // for loading
  if (loading) return <Loading></Loading>; // <-- Let loading.tsx handle it

  const handleDelete = async (id: number): Promise<void> => {
    await supabase.from("Teacher_classes").delete().eq("teacher_id", id);
    await supabase.from("Teachers").delete().eq("id", id);
    setTeachers((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="min-h-lvh p-3 bg-hex-bg-gray md:ml-64 rounded-2xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between mb-4 px-5 gap-4">
          <h1 className="text-6xl font-bold text-hex-blue mb-4">Teachers</h1>
          <Link
            href="/admin/teachersmenu/new"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f47c2b] to-[#ffb86b] text-white font-semibold shadow-md hover:from-[#f36a21] hover:to-[#ff9f3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f47c2b] transition-colors"
          >
            + Add Teacher
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mb-10 p-5 rounded-2xl">
          {teachers.map((t) => (
            <div
              key={t.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-10 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            >
              {/* // = CARDS */}
              <div className="flex flex-col items-center pb-3 ">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg items-start"
                  src={"/window.svg"}
                  width={96}
                  height={96}
                  alt="Teacher Image"
                />
                {/* // = name */}
                <h5 className="mb-1 text-xl font-bold text-hex-orange dark:text-white">
                  {t.name}
                </h5>
                <div className="flex flex-col items-center gap-1 mt-4 md:mt-6">
                  {/* // = email */}
                  <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-hex-blue rounded-lg hover:font-bold">
                    {t.email}
                  </div>
                  {/* // = subjects */}
                  <div className="py-2 px-4 mb-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 text-center hover:font-bold">
                    {
                      // t.subject ||
                      "No class assigned"
                    }
                  </div>
                  <div className="flex flex-row items-center">
                    <Link
                      href={`/admin/teachersmenu/${t.id}`}
                      // Edit Button Styling
                      className="px-5 py-2 justify-start text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150 ease-in-out shadow-sm hover:font-bold"
                    >
                      <span>Edit</span>
                    </Link>
                    <button
                      onClick={() => void handleDelete(t.id)}
                      // Delete Button Styling
                      className="ml-3 px-5 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-150 ease-in-out shadow-sm hover:font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
