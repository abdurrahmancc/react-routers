import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Meal = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data.meals));
  }, [id]);
  console.log(post);
  return (
    <div>
      <h1>hello {id}</h1>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          border: "2px red solid",
          padding: "50px",
          width: "700px",
        }}
        className=""
      >
        <img style={{ width: "200px" }} src={post[0]?.strMealThumb} alt="" />
        <h1>{post[0]?.strMeal}</h1>
        <p>{post[0]?.strInstructions}</p>
      </div>
    </div>
  );
};

export default Meal;
