import React from "react";
import "./CountryDetailShimmer.css";

const CountryDetailShimmer = () => {
  return (
    <section className="main-body">
      <div className="back">
        <button>
          <i className="fa-solid fa-arrow-left-long"></i>Back
        </button>
      </div>
      <div className="country-whole-data">
        <div className="country-flag">
          <div className="detail-shimmer-flag"></div>
        </div>
        <div className="country-data">
          <div className="country-name">
            <p className="country-title detail-shimmer-title"></p>
          </div>
          <div className="whole-details ">
            {Array.from({ length: 9 }).map((elem) => {
              return <p className="detail-shimmer-details"></p>;
            })}
          </div>
          <div className="borders">
            <p className="detail-shimmer-details"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetailShimmer;
