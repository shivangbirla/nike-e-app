import React from "react";
import menimage from "./men.webp";
import { Link } from "react-router-dom";

const Heromen = () => {
  return (
    <>
      <div className="mt-[100px] md:mt-[120px] xsm:mt-[90px] nike-container">
        <img src={menimage} alt="nike/image" className="cursor-pointer" />
        <div className="flex items-center ">
          <h1 className="text-[48px] font-bold mx-auto mt-2 mb-0 xsm:text-[30px]">
            NIKE FREE METCON 5
          </h1>
        </div>
        <div className="flex items-center">
          <p className="mx-auto text-[20px] xsm:text-[16px]">
            The flexibility to adapt and the stability to hold strong.
          </p>
        </div>
        <Link to="/featured">
          <div className="flex items-center">
            <button className="button-theme mx-auto mt-5">Shop</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Heromen;
