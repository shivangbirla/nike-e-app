import React from "react";
import SocialLink from "./utils/SocialLinks";

const Footer2 = ({ footer2: { titles, links, socialLinks } }) => {
  return (
    <>
      <footer className="pt-7 pb-5 bg-[#212529]">
        <div className="nike-container flex flex-row items-center">
          <div>
            <ul className="text-[#ffffff]">
              <li className="cursor-pointer hover:underline">FIND A STORE</li>
              <li className="hover:underline">SIGN UP FOR EMAIL</li>
            </ul>
          </div>
          <div className="grid items-start grid-cols-3 w-full gap-3">
            {titles.map((val, i) => (
              <div key={i} className=" items-center">
                <h1 className="text-[24px] text-[#ffffff] font-medium mx-10 md:mx-4  sm:mx-2 hover:underline cursor-pointer">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-2">
                {list.map((link, i) => (
                  <li
                    key={i}
                    className="text-[16px] text-[#757575] mx-10 md:mx-4 sm:mx-2  cursor-pointer"
                  >
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div>
            {socialLinks?.map((val, i) => (
              <SocialLink key={i} icon={val.icon} />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
