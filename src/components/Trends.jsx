import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Trends = ({ endpoint: { title, items } }) => {
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
      <div className="nike-conatiner mt-10">
        <div className="ml-8 mb-3">
          <h1 className="text-[24px] md:text[22px] sm:text-[20px] font-medium cursor-pointer hover:underline hover:text-[#757575]">
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
                  <div>
                    <h3 className="text-[16px] md:text-[15px] mt-2 font-medium cursor-pointer hover:text-[#adb5bd] hover:underline">
                      {val.heading}
                    </h3>
                    <h3 className="text-[14px] text-[#757575] font-medium">
                      {val.subheading}
                    </h3>
                    <h3 className="text-[16px] md:text-[15px] my-2 mb-8 font-medium">
                      AED {val.price}.00
                    </h3>
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

export default Trends;
