import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = (props) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal;
  const navigate = useNavigate();
  return (
    <div style={{ border: "2px red solid", padding: "50px" }} className="">
      <img style={{ width: "200px" }} src={strMealThumb} alt="" />
      <h1>{strMeal}</h1>
      <p>{strInstructions?.slice(0, 300)}</p>
      <Link to={"/product/" + idMeal}>show</Link>
      <button onClick={() => navigate(`/product/${idMeal}`)}>detail {idMeal}</button>
    </div>
  );
};

export default Products;
