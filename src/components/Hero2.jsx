import React from "react";
import { Link } from "react-router-dom";
import nikeimage from "../assets/nike-image-1.jpg";

const Hero2 = () => {
  return (
    <>
      <div className="mt-[3vh] nike-container">
        <img src={nikeimage} alt="nike/image" className="cursor-pointer" />
        <div className="flex items-center ">
          <h1 className="text-[48px] font-bold mx-auto mt-2 mb-0">
            <span className="block">NEVER BEFORE.</span>
            <span className="block">FOREVER AFTER.</span>
          </h1>
        </div>
        <div className="flex items-center">
          <p className="mx-auto text-[20px]">
            <span className="block text-center">
              Match day or any day, show up for your team in style
            </span>
            <span className="block text-center">
              with the 2023 Nike National Team Collections.
            </span>
          </p>
        </div>
        <Link to="/women">
          <div className="flex items-center">
            <button className="button-theme mx-auto mt-5">Shop</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Hero2;
