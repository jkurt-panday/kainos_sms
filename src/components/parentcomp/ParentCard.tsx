import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function ParentCard() {
  const sampleParents = [
    {
      parent_id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      contact_number: "555-1234",
      password: "password123",
    },
    {
      parent_id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      contact_number: "555-5678",
      password: "securepass456",
    },
    {
      parent_id: 3,
      name: "Carol Lee",
      email: "carol.lee@example.com",
      contact_number: "555-9012",
      password: "mysecret789",
    },
  ];

  return (
    <>
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"></div>
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-3"></div>
        <span className="text-sm text-gray-600">
          Total:{" "}
          <span className="font-medium text-gray-900">
            {sampleParents.length}
          </span>
        </span>
        <div className="relative"></div>
        <input
          type="search"
          placeholder="Search name or email"
          className="w-64 pl-10 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400  border"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-hex-orange text-white">
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
                Password
              </th>
              <th className="text-center px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {sampleParents.map((parent, index) => (
              <tr key={index} className="hover:bg-amber-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                  {parent.parent_id}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-hex-orange flex items-center justify-center text-white font-semibold">
                      {parent.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {parent.name}
                      </div>
                      <div className="text-xs text-gray-500">Parent</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {parent.email}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {parent.contact_number}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600 tracking-wide">
                    Hidden
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <div className="inline-flex items-center space-x-2">
                    <button
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-md shadow-sm"
                      aria-label={`Edit ${parent.name}`}
                    >
                      <FiEdit2 className="w-3.5 h-3.5" aria-hidden />
                      <span>Edit</span>
                    </button>

                    <button
                      className="flex items-center gap-2 px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs rounded-md"
                      aria-label={`Delete ${parent.name}`}
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
