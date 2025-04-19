import Link from "next/link";
import { MdLogout } from "react-icons/md";

const TopNav = () => {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <h2 className="text-3xl font-bold">TNPDS</h2>
        <Link href="/">
          <button className="bg-blue-800 text-white px-5 py-2 rounded-md flex items-center">
            <MdLogout />
            Logout
          </button>
        </Link>
      </div>
    </>
  );
};

export default TopNav;
