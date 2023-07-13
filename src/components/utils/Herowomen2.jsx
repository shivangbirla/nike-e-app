import React from "react";
import { Link } from "react-router-dom";
import womenimage from "./women-image.jpg";

const Herowomen2 = () => {
  return (
    <>
      <div className="mt-[100px]   md:mt-[120px] nike-container">
        <div className="relative">
          <img src={womenimage} alt="nike/image" className="cursor-pointer" />
          <div className="absolute bottom-0 left-0">
            <h1 className="text-[48px] font-bold text-[#ffffff] ml-8 mb-4 md:text-[32px] xsm:text-[20px] xsm:mb-0 md:mb-1 xsm:ml-4">
              MINDFUL MOVES
            </h1>
            <p className="mx-auto text-[20px] text-[#ffffff] ml-8 mb-6 md:text-[18px] xsm:text-[13px] xsm:mb-2 xsm:ml-4 md:mb-3">
              <span className="block xsm:inline">
                Get centered and color your mood in a pair of supportive
              </span>
              <span className="block xsm:inline">
                Like Leggings and comfy Alate Bras.
              </span>
            </p>
            <Link to="/featured">
              <button className="bg-[#ffffff] text-[#111111] text-[20px] rounded-2xl font-medium px-4 mx-auto active:scale-90 transition-all duration-100 ease-in-out shadow-md ml-8 mb-8 md:text-[18px] xsm:text-[15px] xsm:mb-3 xsm:mt-0 xsm:ml-4 md:mb-5">
                Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herowomen2;
