"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Correct hook
import { IoHome } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";

const LeftNav = () => {
  const currentRoute = usePathname(); // ✅ usePathname gives string path
  console.log(currentRoute);

  return (
    <div className="p-4">
      <Link href="/centralized/dashboard">
        <div
          className={`flex items-center py-3 rounded-md px-5 mb-2 cursor-pointer ${
            currentRoute === "/centralized/dashboard" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <IoHome />
          <p className="ml-3">Home</p>
        </div>
      </Link>

      <Link href="/centralized/shops">
        <div
          className={`flex items-center py-3 rounded-md px-5 mb-2 cursor-pointer ${
            currentRoute === "/centralized/shops" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <FaShopify />
          <p className="ml-3">Shops</p>
        </div>
      </Link>

      <Link href="/centralized/stocks">
        <div
          className={`flex items-center py-3 rounded-md px-5 mb-2 cursor-pointer ${
            currentRoute === "/centralized/stocks" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <AiOutlineStock />
          <p className="ml-3">Stocks</p>
        </div>
      </Link>

      <Link href="/centralized/help">
        <div
          className={`flex items-center py-3 rounded-md px-5 mb-2 cursor-pointer ${
            currentRoute === "/centralized/help" ? "bg-blue-800 text-white" : ""
          }`}
        >
          <IoMdHelpCircle />
          <p className="ml-3">Help</p>
        </div>
      </Link>
    </div>
  );
};

export default LeftNav;
