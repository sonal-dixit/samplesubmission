import React from "react";

const AddItemHeader = () => {
  return (
    <header className="bg-lavender p-4 flex items-center justify-between relative">
      <div className="bg-green-500 text-white px-3 py-1 rounded relative top-2 left-200">
        Filter
      </div>
      <input
        type="text"
        className="p-2 border rounded w-full ml-24"
        placeholder="Search..."
      />
    </header>
  );
};

export default AddItemHeader;
