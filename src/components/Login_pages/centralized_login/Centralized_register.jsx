import React from "react";
import Link from "next/link";

const Centralized_register = () => {
  return (
    <>
      <div className=" w-[350px]">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Login Id</label>
          <input
            type="text"
            placeholder="Enter you Login Id"
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
        <Link href="/centralized/Centralized_login">
          <button className="bg-blue-700 text-white w-full mt-3 rounded-md py-2 cursor-pointer">
            Register
          </button>
        </Link>
        <div className="flex items-center mt-2">
          <p>Already have an account? </p>
          <Link href="/people/people_login" className="text-blue-800 ml-2">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Centralized_register;
