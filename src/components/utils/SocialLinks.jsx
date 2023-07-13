import React from "react";

const SocialLink = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/social"
        className="w-6 h-6 my-1.5 flex items-center cursor-pointer transition-all duration-200 hover:scale-110"
      />
    </>
  );
};

export default SocialLink;
