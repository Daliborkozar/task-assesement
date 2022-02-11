import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { ProductPage } from "./pages/ProductPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductPage />
    </div>
  );
};

export default App;
