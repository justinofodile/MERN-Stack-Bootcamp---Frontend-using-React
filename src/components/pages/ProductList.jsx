import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <h2>List of products</h2>

      <nav>
        <NavLink to="featured">Feature</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductList;
