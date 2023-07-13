import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { BsPinMap } from "react-icons/bs";

const Menudropdown = ({ isMenuOpen }) => {
  // console.log(isMenuOpen);

  return (
    <nav
      className={`${
        isMenuOpen ? "lg:left-0 md:left-0" : "hidden"
      }  opacity-100 z-[200] blur-effect-theme flex flex-col gap-3 absolute top-0 py-2 px-5 transition-all duration-500 w-[40%] h-[100vh] items-center text-[18px]`}
    >
      <div>
        <h2 className="text-[20px] cursor-pointer border-b-2 border-[#757575]">
          Browse
        </h2>
      </div>
      <div className="mt-4 hover:underline cursor-pointer xsm:ml-5">
        <Link to="/featured">New & Featured</Link>
      </div>
      <div className="hover:underline cursor-pointer">
        <Link to="/men">Men</Link>
      </div>
      <div className="hover:underline cursor-pointer">
        <Link to="/women">Women</Link>
      </div>
      <div className="hover:underline cursor-pointer">
        <Link to="/kids">kids</Link>
      </div>
      <div className="hover:underline cursor-pointer">Login Here</div>

      <div className="hover:underline flex items-center cursor-pointer gap-2 mt-2">
        <HiOutlineShoppingBag />
        <span>Bag</span>
      </div>
      <div className="hover:underline flex items-center cursor-pointer gap-2 xsm:ml-4 xsm:gap-2.5">
        <BsPinMap />
        <span>Track Order</span>
      </div>
      <div className="hover:underline flex items-center cursor-pointer gap-2">
        <BiHelpCircle />
        <span>Help</span>
      </div>
    </nav>
  );
};

export default Menudropdown;
