import { IoHome } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const LeftNav = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex items-center bg-blue-800 text-white py-3 rounded-md px-5 mb-2 cursor-pointer">
          <IoHome />
          <p className="ml-3">Home</p>
        </div>
        <div className="flex items-center py-3 rounded-md px-5 mb-2 cursor-pointer">
          <FaPeopleGroup />
          <p className="ml-3">Family Members</p>
        </div>
        <div className="flex items-center py-3 rounded-md px-5 mb-2 cursor-pointer">
          <FaAddressCard />
          <p className="ml-3">Card Details</p>
        </div>
        <div className="flex items-center py-3 rounded-md px-5 mb-2 cursor-pointer">
          <FaShoppingCart />
          <p className="ml-3">Purchased Data</p>
        </div>
        <div className="flex items-center py-3 rounded-md px-5 mb-2 cursor-pointer">
          <IoMdHelpCircle />
          <p className="ml-3">Help</p>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
