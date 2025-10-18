// "use client";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
// import { useEffect } from "react";
// import { $ } from "../lib/datatables"; // Import jQuery with DataTables attached

export default function StudentTable() {
  const sampleStudents = [
    {
      student_id: 1,
      name: "Ethan Miller",
      email: "ethan.miller@example.com",
      contact_number: "555-1234",
      grade_level: "Grade 5",
    },
    {
      student_id: 2,
      name: "Maya Thompson",
      email: "maya.thompson@example.com",
      contact_number: "555-5678",
      grade_level: "Grade 6",
    },
    {
      student_id: 3,
      name: "Liam Nguyen",
      email: "liam.nguyen@example.com",
      contact_number: "555-9012",
      grade_level: "Grade 5",
    },
  ];

  // TODO revert back using reflog

  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   // Initialize DataTable
  //   const table = $("#studentsTable").DataTable({
  //     paging: true,
  //     searching: true,
  //     info: true,
  //     lengthChange: true,
  //     pageLength: 5,
  //     columnDefs: [
  //       { targets: 0, searchable: false }, // ID column
  //       { targets: 5, searchable: false }, // Actions column
  //     ],
      
  //   });

  //   // Cleanup when navigating away
  //   return () => {
  //     table.destroy();
  //   };
  // }, []);

  return (
    <>
      <div className="overflow-x-auto ">
        <table
          className="min-w-full table-auto bg-hex-bg-gray"
          id="studentsTable"
        >
          <thead className="bg-hex-orange text-white ">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
                ID
              </th>
              <th className="text-left px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
                Name
              </th>
              <th className="text-left px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
                Email
              </th>
              <th className="text-left px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
                Contact
              </th>
              <th className="text-left px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
                Grade Level
              </th>
              <th className="text-center px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {sampleStudents.map((student) => (
              <tr
                key={student.student_id}
                className="hover:bg-gray-300 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                  {student.student_id}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-hex-orange flex items-center justify-center text-white font-semibold">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
                      </div>
                      <div className="text-xs text-gray-500">Student</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {student.email}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {student.contact_number}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {student.grade_level}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <div className="inline-flex items-center space-x-2">
                    <button
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-md shadow-sm"
                      aria-label={`Edit ${student.name}`}
                    >
                      <FiEdit2 className="w-3.5 h-3.5" aria-hidden />
                      <span>Edit</span>
                    </button>

                    <button
                      className="flex items-center gap-2 px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs rounded-md"
                      aria-label={`Delete ${student.name}`}
                    >
                      <FiTrash2 className="w-3.5 h-3.5" aria-hidden />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
