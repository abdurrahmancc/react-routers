import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h1>Welcome to our React Routing!</h1>
      <nav>
        <Link to={"/"}>Home</Link> <br />
        <Link to={"/products"}>Products</Link> <br />
        <Link to={"/about"}>about</Link>
        <br />
        <Link to={"/meals"}>Meals</Link>
        {/* <CustomLink to="/">Home</CustomLink>

        <CustomLink to="/about">About</CustomLink>

        <CustomLink to="/products">products</CustomLink> */}
      </nav>
    </div>
  );
};

export default Header;
