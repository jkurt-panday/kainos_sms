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
    const newClass: Class = {
      id: Date.now(),
      class_name: "",
      grade_level: 0,
    };
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

  // TODO how to get the teachers classes

  return (
    <form
      onSubmit={handleSubmit}
      // Updated form container style for a modern look
      className="space-y-6 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 max-w-lg mx-auto"
    >
      {/* Form Title (Optional, but helps professionalism) */}
      <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-4">
        Teacher Profile
      </h2>

      {/* Full Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("name", e.target.value)
          }
          // Modern input styling
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          required
          placeholder="Ex. John M. Smith"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("email", e.target.value)
          }
          // Modern input styling
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          required
          placeholder="Ex. johnsmith@mail.com"
        />
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="text" // Changed to type="password" for security
          value={formData.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("password", e.target.value)
          }
          // Modern input styling
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          required
        />
      </div>

      {/* Classes Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Classes
        </label>
        <div className="space-y-3">
          {formData.classes?.map((cls, index) => (
            <div
              key={cls.id}
              // Subtle background for repeater items
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <input
                type="text"
                placeholder="Class name"
                value={cls.class_name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleClassChange(index, "class_name", e.target.value)
                }
                // Input styling for repeater
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="number"
                placeholder="Grade"
                value={cls.grade_level}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleClassChange(
                    index,
                    "grade_level",
                    Number(e.target.value)
                  )
                }
                // Input styling for repeater - narrower width
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-24 text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                min={1}
                max={6}
                required
              />
              <button
                type="button"
                onClick={() => removeClass(index)}
                // Enhanced delete button with hover effect
                className="text-red-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition duration-150"
                title="Remove Class"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Add Class Button */}
        <button
          type="button"
          onClick={addClass}
          // Styled as a text link with a subtle margin
          className="mt-3 text-blue-600 text-sm font-semibold hover:text-blue-700 flex items-center gap-1 transition duration-150"
        >
          + Add Class
        </button>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        // Submit button styling - full width, slightly larger
        className="w-full bg-blue-600 text-white font-semibold px-4 py-3 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 mt-6"
      >
        Save Changes
      </button>
    </form>
  );
}

// teacher deatils specialization, degree
// change table with surname, first name middle name
