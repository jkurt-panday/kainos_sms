"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Teacher, Class } from "@/types/definitions";

interface TeacherFormProps {
  initialData?: Teacher;
  onSubmit: (data: Teacher) => void;
}

export default function TeacherForm({
  initialData,
  onSubmit,
}: TeacherFormProps) {
  const [formData, setFormData] = useState<Teacher>(
    initialData ?? { id: 0, name: "", email: "", password: "", classes: [] }
  );

  // handle teacher field change
  const handleChange = (field: keyof Teacher, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // handle change in specific class entry
  const handleClassChange = (
    index: number,
    field: keyof Class,
    value: string | number
  ): void => {
    const updatedClasses = formData.classes ? [...formData.classes] : [];
    updatedClasses[index] = { ...updatedClasses[index], [field]: value };
    setFormData((prev) => ({ ...prev, classes: updatedClasses }));
  };

  const addClass = (): void => {
    const newClass: Class = { id: Date.now(), class_name: "", grade_level: 0 };
    setFormData((prev) => ({
      ...prev,
      classes: [...(prev.classes ?? []), newClass],
    }));
  };

  const removeClass = (index: number): void => {
    const updatedClasses = formData.classes ? [...formData.classes] : [];
    updatedClasses.splice(index, 1);
    setFormData((prev) => ({ ...prev, classes: updatedClasses }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-5 rounded-xl shadow-md"
    >
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("name", e.target.value)
          }
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("email", e.target.value)
          }
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="text"
          value={formData.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("password", e.target.value)
          }
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Classes</label>
        {formData.classes?.map((cls, index) => (
          <div key={cls.id} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              placeholder="Class name"
              value={cls.class_name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleClassChange(index, "class_name", e.target.value)
              }
              className="border rounded-lg px-3 py-2 flex-1"
              required
            />
            <input
              type="number"
              placeholder="Grade level"
              value={cls.grade_level}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleClassChange(index, "grade_level", Number(e.target.value))
              }
              className="border rounded-lg px-3 py-2 w-32"
              min={1}
              max={6}
              required
            />
            <button
              type="button"
              onClick={() => removeClass(index)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addClass}
          className="text-blue-600 text-sm font-medium"
        >
          + Add Class
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
