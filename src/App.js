import React from "react";
import {Navbar }from "./components/navbar/Navbar";
import {Product} from './components/product/Product'

const App = () => {
  return (
    <div>
      <Navbar />
      <Product />
    </div>
  );
};

export default App;
