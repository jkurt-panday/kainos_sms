// src/components/TeacherForm.tsx
"use client";

import React, { useState, FormEvent } from "react";
import { Teachers } from "@/types/definitions";

interface TeacherFormProps {
  initialData?: Teachers; // for edit mode
  onSubmit: (data: Teachers) => void;
}

const TeacherForm: React.FC<TeacherFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Teachers>(
    initialData || {
      id: 0,
      name: "",
      email: "",
      password: "",
      subjects: [],
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setFormData((prev) => ({ ...prev, subjects: selected }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md md:ml-64"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 w-full border rounded-lg px-3 py-2"
        />
      </div>

      {!initialData && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 w-full border rounded-lg px-3 py-2"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Subjects / Classes
        </label>
        <select
          multiple
          name="subjects"
          value={formData.classes}
          onChange={handleSubjectsChange}
          className="mt-1 w-full border rounded-lg px-3 py-2"
        >
          <option value="Math 5">Math 5</option>
          <option value="Math 6">Math 6</option>
          <option value="Science 4">Science 4</option>
          <option value="English 5">English 5</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Hold Ctrl (Windows) or Cmd (Mac) to select multiple
        </p>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
      >
        {initialData ? "Update Teacher" : "Add Teacher"}
      </button>
    </form>
  );
};

export default TeacherForm;
