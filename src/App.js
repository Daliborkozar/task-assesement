import React, { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { ProductPage } from "./pages/ProductPage";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = (visible) => {
    setIsVisible(visible);
  };

  return (
    <>
      <Navbar cartAction={isVisible} />
      <ProductPage cartAction={handleVisibility} />
    </>
  );
};

export default App;
