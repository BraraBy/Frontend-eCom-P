
import React from 'react';

const categories = [
  { name: "Shirts", color: "bg-blue-100" },
  { name: "Jeans", color: "bg-green-100" },
  { name: "Hoodies", color: "bg-red-100" },
  { name: "Accessories", color: "bg-yellow-100" },
];

const Category = () => {
  return (
    <div className="flex justify-center gap-4 py-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center text-sm font-medium text-gray-700 shadow`}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
