import React from "react";

const SearchHeader = () => {
  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between relative">
      <div className="bg-green-500 text-white px-3 py-1 rounded">
      <h1 className="text-white absolute top-2 right-2">Explore</h1>
        Filter
      </div>
      <input
        type="text"
        className="p-2 border rounded w-full ml-4"
        placeholder="Search..."
      />
    </header>
  );
};

export default SearchHeader;
