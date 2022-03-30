import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { pro } = useParams();
  const [mealDetail, setDetail] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pro}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data.meals));
  }, [pro]);
  console.log(mealDetail);
  return (
    <div style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}>
      <div style={{ padding: "30px", border: "3px red solid" }}>
        <h1>these all my Friend {pro}</h1>
        <img width={"400px"} src={mealDetail[0]?.strMealThumb} alt="" />
        <h1>{mealDetail[0]?.strMeal}</h1>

        <h4>{mealDetail[0]?.strInstructions}</h4>
        <span>{mealDetail[0]?.strArea}</span>
      </div>
    </div>
  );
};

export default Product;
