import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ data }) => {
  let {
    name: { common },
    capital,
    region,
    population,
    flags: { png },
    flags: { alt },
  } = data;

  population = population.toLocaleString("en-IN");

  return (
    <Link to={`/${common}`} className="card-link">
      <div className="card">
        <div className="flag">
          <img src={png} alt={alt} />
        </div>
        <div className="card-body">
          <p className="title">{common}</p>
          <div className="country-details">
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
