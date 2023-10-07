import React from "react";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">krish</span>
          <span className="text-slate-500">Estate</span>
        </h1>
        <form className="bg-slate-300 p-3 rounded-lg ">
          <input
            type="text"
            placeholder="Search...."
            className="bg-transparent "
          />
          <FaSearch
        </form>
      </div>
    </header>
  );
}

export default Header;
