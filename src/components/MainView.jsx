import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductListing from "./ProductListing";
import { CartContext } from "../context/CartContext";

const MainView = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Header cartCount={cart.length} />
      <ProductListing />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainView;
