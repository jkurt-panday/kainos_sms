"use client";

import TeacherForm from "@/components/forms/TeacherForm";
import { supabase } from "@/lib/supabaseClient";
import { Teacher } from "@/types/definitions";
import { JSX } from "react";

export default function NewTeacherPage(): JSX.Element {
  const handleCreate = async (data: Teacher): Promise<void> => {
    // insert teacher
    const { data: newTeacher, error } = await supabase
      .from("Teachers")
      .insert([{ name: data.name, email: data.email, password: data.password }])
      .select()
      .single();

    if (error) {
      console.error(error);
      return;
    }

    // insert related classes
    if (data.classes && newTeacher) {
      const classRows = data.classes.map((cls) => ({
        teacher_id: newTeacher.id,
        class_name: cls.class_name,
        grade_level: cls.grade_level,
      }));

      const { error: classError } = await supabase
        .from("Teacher_classes")
        .insert(classRows);

      if (classError) console.error(classError);
    }

    alert("Teacher created successfully!");
  };

  return (
    <div className="max-w-lg mx-auto mt-6">
      <h1 className="text-2xl font-semibold mb-4">Add New Teacher</h1>
      <TeacherForm onSubmit={handleCreate} />
    </div>
  );
}
