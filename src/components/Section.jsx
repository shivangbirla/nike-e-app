import React from "react";
import { Link } from "react-router-dom";

const Section = ({ endpoint: { title, items } }) => {
  return (
    <>
      <div className="mt-10 mx-[32px]">
        <div className="mb-2">
          <h1 className="text-[24px] font-medium">{title}</h1>
        </div>
        <div className="relative flex flex-row space-x-4 md:space-x-2">
          {items.map((val, i) => (
            <div key={i} className="relative">
              <div className="flex items-end">
                <img src={val.img} alt="img/section" className="" />
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h2 className="text-[#ffffff] text-[18px] mb-1.5 hover:underline cursor-pointer">
                  {val.text}
                </h2>
                <Link to={`/${val.text}`}>
                  <button className="rounded-2xl active:scale-90 transition-all duration-100 ease-in-out shadow-md bg-white text-black font-medium py-1 px-4 text-[16px] md:px-2 md:py-0">
                    Shop
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section;
