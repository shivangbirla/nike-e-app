import React, { useEffect, useState } from "react";

const Column = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 1000) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <div
        className={
          navState
            ? "flex flex-col fixed mt-10 text-[18px] ml-2 md:ml-1 md:text-[15px] h-[62vh] sm:h-[38vh] overflow-y-auto sm:w-[15vh] md:h-[45.5vh] md:w-[19vh] xsm:w-[10vh] xsm:ml-1.5"
            : "flex flex-col fixed h-[70vh] overflow-y-auto w-[20vw] mt-[106px] text-[17px] md:text-[15px] ml-2 md:ml-1 xsm:ml-1.5"
        }
      >
        <div className="border-b">
          <h1 className="font-medium mb-2 hover:text-[#757575] hover:underline cursor-pointer">
            NEW IN
          </h1>
        </div>
        <div className="font-medium border-b mb-2 cursor-pointer">
          <h2 className="hover:underline hover:text-[#757575]">Mens</h2>
          <h2 className="hover:underline hover:text-[#757575]">Womens</h2>
          <h2 className="hover:underline hover:text-[#757575]">Kids</h2>
        </div>
        <div className="flex flex-col border-b mb-2">
          <label
            for="my-select"
            className="mb-2 font-medium cursor-pointer hover:underline hover:text-[#757575]"
          >
            Brand
          </label>
          <select
            id="my-select"
            className="px-4 py-2 sm:px-2 sm:py-0 rounded-xl cursor-pointer"
          >
            <option value="option1">Jordan</option>
            <option value="option2">Nike Pro</option>
            <option value="option3">Nike Sportswear</option>
          </select>
        </div>
        <div className="border-b mb-2 cursor-pointer">
          <h2 className="font-medium hover:underline hover:text-[#757575]">
            Clothing Size
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <button className="sm:w-20">XS</button>
            <button className="sm:w-20">S</button>
            <button className="sm:w-20">M</button>
            <button className="sm:w-20">L</button>
            <button className="sm:w-20">XL</button>
            <button className="sm:w-20">XXL</button>
            <button className="sm:w-20">XXXL</button>
            <button className="sm:w-20">3-7 Y</button>
            <button className="sm:w-20">8-15 Y</button>
          </div>
        </div>
        <div className="flex flex-col border-b mb-2">
          <label
            for="my-select"
            className="mb-3 font-medium cursor-pointer hover:underline hover:text-[#757575]"
          >
            Gender
          </label>
          <select
            id="my-select"
            className="px-4 py-2 rounded-xl cursor-pointer"
          >
            <option value="option1">Kids</option>
            <option value="option2">Men</option>
            <option value="option3">Unisex</option>
            <option value="option4">Women</option>
          </select>
        </div>
        <div className={navState ? "invisible" : "flex flex-col border-b mb-2"}>
          <label
            for="my-select"
            className="mb-2 font-medium cursor-pointer hover:underline hover:text-[#757575]"
          >
            Icon
          </label>
          <select
            id="my-select"
            className="px-4 py-2 rounded-xl cursor-pointer"
          >
            <option value="option1">Air Force 1</option>
            <option value="option2">Air Max</option>
            <option value="option3">Blazer</option>
            <option value="option4">Jordan Editions</option>
          </select>
        </div>
        <div className={navState ? "invisible" : "flex flex-col border-b mb-2"}>
          <label
            for="my-select"
            className="mb-4 font-medium cursor-pointer hover:underline hover:text-[#757575]"
          >
            Sport
          </label>
          <select
            id="my-select"
            className="px-4 py-2 rounded-xl cursor-pointer"
          >
            <option value="option1">Football</option>
            <option value="option2">Tennis</option>
            <option value="option3">Basketball</option>
            <option value="option4">Running</option>
          </select>
        </div>
        <div className={navState ? "invisible" : "flex flex-col border-b mb-2"}>
          <label
            for="my-select"
            className="mb-4 font-medium cursor-pointer hover:underline hover:text-[#757575]"
          >
            Fit
          </label>
          <select
            id="my-select"
            className="px-4 py-2 rounded-xl cursor-pointer"
          >
            <option value="option1">Loose</option>
            <option value="option2">Slim</option>
            <option value="option3">Standard</option>
            <option value="option4">Tight</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Column;
