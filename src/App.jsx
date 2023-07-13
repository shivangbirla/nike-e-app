import React from "react";
import { Route, Routes } from "react-router-dom";
import Featured from "./routes/Featured.jsx";
import Men from "./routes/Men.jsx";
import Women from "./routes/Women.jsx";
import Kids from "./routes/Kids.jsx";
import Cart from "./routes/Cart.jsx";
import ItemDetails from "./routes/ItemDetails.jsx";
import Home from "./Home.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/item/:id" element={<ItemDetails />} />
    </Routes>
  );
};

export default App;
