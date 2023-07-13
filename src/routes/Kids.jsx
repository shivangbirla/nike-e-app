import React from "react";
import { Footer2, Navbar, Trends } from "../components";
import { footer2, kids, krow, nikekidsrow } from "../data/data";
import Herokids from "../components/utils/Herokids";
import Row from "../components/utils/Row";
import Item from "../components/utils/Item";

const Kids = () => {
  return (
    <>
      <Navbar />
      <Herokids />
      <Row endpoint={krow} />
      <Item endpoint={kids} />
      <Trends endpoint={nikekidsrow} />
      <Footer2 footer2={footer2} />
    </>
  );
};

export default Kids;
