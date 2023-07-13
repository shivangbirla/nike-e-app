import React from "react";

const Footer1 = ({ footer1: { titles, links } }) => {
  return (
    <>
      <footer className="pt-7 pb-5">
        <div className="nike-container md:ml-0">
          <div className="grid items-start grid-cols-4 w-full gap-3 md:gap-0">
            {titles.map((val, i) => (
              <div key={i} className=" items-center">
                <h1 className="text-[24px] font-medium mx-20 md:mx-12 sm:mx-7 hover:text-[#757575] hover:underline cursor-pointer">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-2">
                {list.map((link, i) => (
                  <li
                    key={i}
                    className="text-[16px] text-[#757575] mx-20 md:mx-12 sm:mx-7 cursor-pointer"
                  >
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
