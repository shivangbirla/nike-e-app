import React from "react";
import { women, footer2, wrow } from "../data/data";
import { Footer2, Navbar } from "../components";
import Items from "../components/utils/Items";
import Row from "../components/utils/Row";
import Herowomen2 from "../components/utils/Herowomen2";

const Women = () => {
  return (
    <>
      <Navbar />
      <Herowomen2 />
      <Items endpoint={women} />
      <Row endpoint={wrow} />
      <Footer2 footer2={footer2} />
    </>
  );
};

export default Women;
