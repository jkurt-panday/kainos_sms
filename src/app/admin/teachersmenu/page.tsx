"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Teacher } from "@/types/definitions";
import { JSX } from "react";

export default function TeachersMenuPage(): JSX.Element {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const fetchTeachers = async (): Promise<void> => {
      const { data, error } = await supabase.from("Teachers").select("*");
      if (!error && data) setTeachers(data as Teacher[]);
    };
    void fetchTeachers();
  }, []);

  const handleDelete = async (id: number): Promise<void> => {
    await supabase.from("Teacher_classes").delete().eq("teacher_id", id);
    await supabase.from("Teachers").delete().eq("id", id);
    setTeachers((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="p-5 md:ml-64">
      <h1 className="text-2xl font-semibold mb-4">Teachers</h1>
      <Link href="/admin/teachersmenu/new" className="text-blue-600 underline">
        + Add Teacher
      </Link>

      <ul className="mt-4 space-y-2">
        {teachers.map((t) => (
          <li key={t.id} className="border p-3 rounded-lg">
            <p>{t.name}</p>
            <Link
              href={`/admin/teachersmenu/${t.id}`}
              className="text-sm text-blue-500 hover:underline"
            >
              Edit
            </Link>
            <button
              onClick={() => void handleDelete(t.id)}
              className="ml-3 text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
