"use client";

import { useParams } from "next/navigation";
import TeacherForm from "@/components/forms/TeacherForm";
import { useEffect, useState } from "react";
import { Teachers } from "@/types/Teachers";

export default function EditTeacherPage() {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState<Teachers | null>(null);

  useEffect(() => {
    // fetch teacher data from your DB or API
    setTeacher({
      id: Number(teacherId),
      name: teacher?.name || "",
      email: teacher?.email || "",
      password: teacher?.password || "",
      subjects: teacher?.subjects || "",
    });
  }, [teacherId]);

  const handleUpdate = (data: Teachers) => {
    console.log("Updated teacher:", data);
    // update DB logic here
  };

  if (!teacher) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto mt-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Teacher</h1>
      <TeacherForm initialData={teacher} onSubmit={handleUpdate} />
    </div>
  );
}
