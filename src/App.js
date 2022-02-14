import React, { lazy, Suspense, useState } from "react";
import { Layout } from "./components/UI/Layout";
//import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
//import NotFound from "./pages/NotFound";
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

const App = () => {
  // Managing state for cart action button to avoid global state for ui
  const [isVisible, setIsVisible] = useState();

  const handleVisibility = (visible) => {
    setIsVisible(visible);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout cartAction={isVisible} />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Laoding....</div>}>
                <ProductPage cartAction={handleVisibility} />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<div>Laoding....</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
