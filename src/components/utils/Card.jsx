import React from "react";

const Card = ({ id, img, text, subtext, color, price }) => {
  return (
    <>
      <div className="nike-container mb-[80px] mt-[100px]">
        <div className="grid items-center grid-cols-3 gap-2 md:grid-cols-2">
          <div className="sm:h-80 sm:w-50 mb-2">
            <div>
              <img src={img} className="bg-[#f5f5f5] cursor-pointer" />
            </div>
            <div className="text-[15px] sm:text-[13px] font-medium">
              <h1 className="text-[#111111] mt-2.5 cursor-pointer hover:underline hover:text-[#757575]">
                {text}
              </h1>

              <h1 className="text-[#757575]">{subtext}</h1>
              <h1 className="text-[#757575]">{color}</h1>
              <h1 className="text-[#111111] mt-3 mb-2">AED {price}.00</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
