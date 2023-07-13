import React from "react";
import { featured, footer2 } from "../data/data";
import { Footer2, Navbar } from "../components";
import Items from "../components/utils/Items";
import Column from "../components/utils/Column";

const Featured = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-row">
        <Column />
        <Items endpoint={featured} ifExists />
      </main>
      <Footer2 footer2={footer2} />
    </>
  );
};

export default Featured;
