import React from 'react';


const categories = Array(10).fill('');

const Category = () => {
  return (
    <div className="flex flex-warp items-center gap-4 px-4 py-2 overflow-x-auto">
      {categories.map((cat, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <p className="text-sm">{cat}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
