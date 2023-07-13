import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Row = ({ endpoint: { title, items } }) => {
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
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <div className="nike-conatiner mt-10">
        <div className="ml-8 mb-3">
          <h1 className="text-[24px] font-medium hover:underline hover:text-[#757575] cursor-pointer">
            {title}
          </h1>
        </div>
        <div className="">
          <Splide options={splideOptions}>
            {items.map((val, i) => (
              <SplideSlide key={i}>
                <div>
                  <div>
                    <img
                      src={val.img}
                      alt="img/item"
                      className="bg-[#f5f5f5] mb-3 cursor-pointer"
                    />
                  </div>
                  <div className="mb-6">
                    <h1 className="text-[19px] mt-2 font-medium cursor-pointer hover:underline hover:text-[#757575]">
                      {val.heading}
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

export default Row;
