import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default async function TeacherProfileCard() {
  // Fetch teachers directly on the server
  const { data: teachers, error } = await supabase.from("Teachers").select("*");

  if (error) {
    console.error(error);
    return <div className="text-red-500 p-4">Error loading teachers.</div>;
  }

  if (!teachers || teachers.length === 0) {
    return <div className="p-4 text-gray-500">No teachers found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mb-10 p-5 rounded-2xl">
      {teachers.map((teacher) => (
        <div
          key={teacher.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-10 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
        >
          <div className="flex flex-col items-center pb-3">
            <Image
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={"/globe.svg"}
              width={96}
              height={96}
              alt="Teacher Image"
            />
            <h5 className="mb-1 text-xl font-bold text-hex-orange dark:text-white">
              {teacher.name}
            </h5>
            <div className="flex flex-col items-center gap-1 mt-4 md:mt-6">
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-hex-blue rounded-lg">
                {teacher.email}
              </span>
              <span className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
                {teacher.subject || "No subject assigned"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


// fetching data
  // const { data, error } = await supabase.from("Teachers").select("*");

  // checks if there is no data
  // if (!data || data.length === 0) {
  //   return <div>No teachers found.</div>;
  // }

  // checks if connection is established
  // if (error) {
  //   console.error(error);
  //   return <div>Error loading teachers.</div>;
  // }

// {/* <div className="flex justify-end px-4 pt-4">
//                     <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
//                         <span className="sr-only">Open dropdown</span>
//                         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
//                             <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
//                         </svg>
//                     </button>

//                     <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
//                         <ul className="py-2" aria-labelledby="dropdownButton">
//                         <li>
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
//                         </li>
//                         <li>
//                             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
//                         </li>
//                         <li>
//                             <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
//                         </li>
//                         </ul>
//                     </div>
//                 </div> */}
