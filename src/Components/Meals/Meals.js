import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  console.log(meals);

  return (
    <div>
      <h1>every meals {meals.length}</h1>
      {meals.map((meal) => (
        <Link key={meal.idMeal} style={{ margin: "5px" }} to={`/meals/ ${meal.idMeal}`}>
          {meal.idMeal}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Meals;
