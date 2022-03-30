import React from "react";
import { useParams } from "react-router-dom";

const NotFound = () => {
  const params = useParams();
  return (
    <div>
      <h5>Not found of your page</h5>
      <h1>404 error</h1>
    </div>
  );
};

export default NotFound;
