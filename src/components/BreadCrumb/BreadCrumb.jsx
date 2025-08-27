import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

const BreadCrumb = () => {
  const { activeCategory } = useContext(CartContext);

  return (
    <div className="breadcrumb container">
      <a href="/">Ecommerce Market {">"} </a>
      <a href="/">London {">"}</a>
      <a href="/">
        <span className="breadcrumb__category">{activeCategory.name} </span>
      </a>
    </div>
  );
};

export default BreadCrumb;
