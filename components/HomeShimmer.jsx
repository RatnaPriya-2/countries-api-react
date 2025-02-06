import React from "react";
import "../components/HomeShimmer.css";

const HomeShimmer = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="card-container">
      {arr.map((elem) => (
        <div className="card shimmer"></div>
      ))}
    </section>
  );
};

export default HomeShimmer;
