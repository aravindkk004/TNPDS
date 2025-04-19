import Link from "next/link";
import React from "react";

const Login_layout = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-[100vh]">
        <div className="w-1/2 flex items-center justify-center bg-[#e8f4f8] h-[100vh]">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl text-blue-800 mb-2">
              Centralized Login
            </h2>
            <p className="w-[60%] text-center text-lg">
              Welcome back, Log in to access powerful tools designed to
              streamline your hiring process
            </p>
            <button className="bg-[#0d6efd] text-white px-10 py-3 rounded-md my-3">
              <Link href="/centralized/login" className="text-lg font-bold">
                Login
              </Link>{" "}
            </button>
            <p>
              Not registered yet?{" "}
              <span className="text-[#0d6efd]">
                <Link href="/centralized/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-[#f5f5f5] h-[100vh]">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl text-blue-800 mb-2">People Login</h2>
            <p className="w-[60%] text-center text-lg">
              Welcome back, Log in to access powerful tools designed to
              streamline your hiring process
            </p>
            <button className="bg-[#0d6efd] text-white px-10 py-3 rounded-md my-3">
              <Link href="/people/people_login" className="text-lg font-bold">
                Login
              </Link>{" "}
            </button>
            <p>
              Not registered yet?{" "}
              <span className="text-[#0d6efd]">
                <Link href="/people/people_register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_layout;
