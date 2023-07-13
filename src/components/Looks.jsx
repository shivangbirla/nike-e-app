import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Looks = ({ endpoint: { title, items } }) => {
  const splideOptions = {
    perPage: 3,
    perMove: 1,
    type: "slide",
    loop: false,
    rewind: false,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      767: { perPage: 2 },
      550: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <div className="Nike-container mt-10">
        <div className="ml-8 mb-2">
          <h1 className="text-[24px] md:text[22px] sm:text-[20px] font-medium">
            {title}
          </h1>
        </div>
        <div className="">
          <Splide options={splideOptions}>
            {items.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="">
                  <div>
                    <img src={val.img} alt="img" className="cursor-pointer" />
                  </div>
                  <div>
                    <h1 className="text-[20px] md:text-[18px] sm:text-[17px] mt-4 cursor-pointer hover:text-[#757575] hover:underline">
                      {val.text}
                    </h1>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Looks;
