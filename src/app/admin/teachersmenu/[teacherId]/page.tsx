"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import TeacherForm from "@/components/forms/TeacherForm";
import { Teacher, Class } from "@/types/definitions";
import { JSX } from "react";
import { useRouter } from "next/navigation";

export default function EditTeacherPage(): JSX.Element {
  const { teacherId } = useParams<{ teacherId: string }>();
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTeacher = async (): Promise<void> => {
      const { data: teacherData } = await supabase
        .from("Teachers")
        .select("*")
        .eq("id", teacherId)
        .single();

      const { data: classData } = await supabase
        .from("Teacher_classes")
        .select("*")
        .eq("teacher_id", teacherId);

      if (teacherData) {
        const formattedTeacher: Teacher = {
          ...teacherData,
          classes: (classData ?? []).map((c) => ({
            id: c.id,
            class_name: c.class_name,
            grade_level: c.grade_level,
          })) as Class[],
        };
        setTeacher(formattedTeacher);
      }
    };

    void fetchTeacher();
  }, [teacherId]);

  // TODO how to get the classes of a teacher from Teacher_classes

  const handleUpdate = async (data: Teacher): Promise<void> => {
    await supabase
      .from("Teachers")
      .update({
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .eq("id", teacherId);

    await supabase.from("Teacher_classes").delete().eq("teacher_id", teacherId);

    if (data.classes) {
      const newClasses = data.classes.map((cls) => ({
        teacher_id: Number(teacherId),
        class_name: cls.class_name,
        grade_level: cls.grade_level,
      }));
      await supabase.from("Teacher_classes").insert(newClasses);
    }

    alert("Teacher updated successfully!");
    // after successful create or update
    router.push("/admin/teachersmenu");
  };

  if (!teacher) return <p>Loading...</p>;

  return (
    <div className="min-h-lvh p-3 bg-hex-bg-gray md:ml-64 rounded-2xl">
      <h1 className="text-3xl font-bold text-hex-blue mb-4">Edit Teacher</h1>
      <TeacherForm initialData={teacher} onSubmit={handleUpdate} />
    </div>
  );
}
