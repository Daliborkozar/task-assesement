import React, { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Layout } from "./components/UI/Layout";
import { ProductPage } from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const App = () => {
  // Managing state for cart action button to avoid global state for ui
  const [isVisible, setIsVisible] = useState();

  const handleVisibility = (visible) => {
    setIsVisible(visible);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout cartAction={isVisible}/>}>
          <Route
            path="/"
            element={<ProductPage cartAction={handleVisibility} />}
          />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
