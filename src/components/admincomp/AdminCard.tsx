import React from "react";

// if your are using interface
// interface CardProps {
//     count: number;
//     desc: string;
// }

// const AdminCard: React.FC<CardProps> = ( {count, desc} ) => {

const cards = [
  { title: "No. of Admin", value: 2 },
  { title: "No. of Teachers", value: 10 },
  { title: "No. of Parents", value: 101 },
  { title: "No. of Students", value: 120 },
  { title: "No. of Classes", value: 10 },
];

export default function AdminCard() {
  return (
    // cards component
    <div className="h-1/2  mx-auto p-4 ">
      {/* card container */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
        {cards.map((card, index) => (
          // cards creation
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl border 
                                border-gray-100 hover:border-gray-600
                                hover:scale-105 transition-transform duration-300"
          >
            <h4 className="text-[#f47c2b] text-xl">{card.title}</h4>
            <p className="text-5xl font-semibold text-gray-800 mt-2">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
