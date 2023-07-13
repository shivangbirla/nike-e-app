import React from "react";
import { Link } from "react-router-dom";
import kidsimage from "./nikekids.jpg";
const Herokids = () => {
  return (
    <>
      <div className="mt-[100px] xsm:mt-[60px] nike-container">
        <div className="flex items-center">
          <h1 className="text-[48px] xsm:text-[30px] font-bold mx-auto mt-2 mb-0">
            CHEERS ON IN STYLE
          </h1>
        </div>
        <div className="flex items-center">
          <p className="mx-auto text-[20px] xsm:text-[16px]">
            Kids National Team Collection
          </p>
        </div>
        <Link to="/featured">
          <div className="flex items-center">
            <button className="button-theme mx-auto mt-5 mb-6">Shop</button>
          </div>
        </Link>
        <img src={kidsimage} alt="nike/image" className="cursor-pointer" />
      </div>
    </>
  );
};

export default Herokids;
