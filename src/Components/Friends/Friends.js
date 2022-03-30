import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "../Products/Products.css";
const Friends = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const searchFeed = (e) => {
    setSearchText(e.target.value);
  };
  console.log(meals);
  return (
    <div>
      <h1>these are my all Friends</h1>
      <input onChange={searchFeed} type="text" />
      <h1>Result Found: {meals.length}</h1>
      <div className="grids">
        {meals.map((meal) => (
          <Products key={meal.idMeal} meal={meal}></Products>
        ))}
      </div>
    </div>
  );
};

export default Friends;
