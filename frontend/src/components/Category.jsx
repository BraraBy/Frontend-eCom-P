
import React from 'react';

const categories = [
  { name: "Snack", color: "bg-blue-100" },
  { name: "Drink", color: "bg-green-100" },
  { name: "Household", color: "bg-red-100" },
  { name: "Stationery", color: "bg-yellow-100" },
];

const Category = () => {
  return (
    <div className="flex justify-center gap-4 py-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`w-20 h-20 ${cat.color} rounded-full flex items-center justify-center text-sm font-medium text-gray-700 shadow`}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
