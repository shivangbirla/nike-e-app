import React from "react";
import { Footer2, Navbar } from "../components";
import { footer2 } from "../data/data";
import ItemD from "../components/utils/ItemD";

const ItemDetails = () => {
  return (
    <>
      <Navbar />
      <ItemD />
      <Footer2 footer2={footer2} />
    </>
  );
};

export default ItemDetails;
