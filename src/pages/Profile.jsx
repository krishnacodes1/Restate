import React from "react";
import { useSelector } from "react-redux";
// import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export default function () {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-7 ">Profile</h1>
      <form className=" flex flex-col gap-3 w-auto">
        <img
          className="rounded-full h-25 w-20 m-auto cursor-pointer mt-2"
          src={currentUser.avatar}
          alt="profile"
          srcset=""
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700  rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className=" text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
