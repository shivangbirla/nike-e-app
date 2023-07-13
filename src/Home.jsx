import React from "react";
import {
  Footer1,
  Footer2,
  Hero1,
  Hero2,
  Looks,
  Navbar,
  Section,
  Trends,
} from "./components";
import {
  styles,
  sports,
  trends,
  footer1,
  footer2,
  section,
} from "./data/data.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero1 />
        <Hero2 />
        <Looks endpoint={styles} />
        <Trends endpoint={trends} />
        <Section endpoint={section} />
        <Looks endpoint={sports} />
      </main>
      <Footer1 footer1={footer1} />
      <Footer2 footer2={footer2} />
    </>
  );
};

export default Home;
