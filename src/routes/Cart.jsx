import React from "react";
import { Footer2, Navbar } from "../components";
import { footer2 } from "../data/data";
import Content from "../components/utils/Content";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer2 footer2={footer2} />
    </>
  );
};

export default Cart;
