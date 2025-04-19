import Link from "next/link";
import React from "react";

const People_login = () => {
  return (
    <>
      <div className=" w-[350px]">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter you mobile number"
            className="border-1 border-gray-500 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="mb-2 font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="border-1 border-gray-500 p-2 rounded-md"
          />
        </div>
        <Link href="/people/dashboard">
          <button className="bg-blue-700 text-white w-full mt-3 rounded-md py-2 cursor-pointer">
            Login
          </button>
        </Link>
        <div className="flex items-center mt-2">
          <p>Don't have an account? </p>
          <Link href="/people/people_register" className="text-blue-800 ml-2">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default People_login;
