// src/app/admin/teachers/new/page.tsx
"use client";

import { useRouter } from "next/navigation";
import TeacherForm from "@/components/forms/TeacherForm";
import { supabase } from "@/lib/supabaseClient";
import { Teacher } from "@/types/definitions";

export default function NewTeacherPage() {
  const router = useRouter();

  const handleSubmit = async (formData: Teacher) => {
    const { error } = await supabase.from("Teachers").insert([formData]);
    if (!error) router.push("/admin/teachersmenu");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Teacher</h1>
      <TeacherForm onSubmit={handleSubmit} />
    </div>
  );
}
