import React from "react";
import { men, footer2, row } from "../data/data";
import { Footer2, Navbar } from "../components";
import Items from "../components/utils/Items";
import Heromen from "../components/utils/Heromen";
import Row from "../components/utils/Row";

const Men = () => {
  return (
    <>
      <Navbar />
      <Heromen />
      <Items endpoint={men} />
      <Row endpoint={row} />
      <Footer2 footer2={footer2} />
    </>
  );
};

export default Men;
