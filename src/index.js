import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import StarRating from "./StarRating.js";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>
);
