import React from "react";
import CountryCard from "./CountryCard";

const CardContainer = ({
  data,
  inputQuery,
  selectRegion,
  filteredRegionCountries,
}) => {
  let filteredCountries = data.filter(
    (country) =>
      country.name.common
        .toLowerCase()
        .includes(inputQuery.trim().toLowerCase()) ||
      country.region.toLowerCase().includes(inputQuery.trim().toLowerCase())
  );

  // let filteredRegionCountries = data.filter(
  //   (country) => country.region.toLowerCase() === selectRegion.toLowerCase()
  // );

  return (
    <section className="card-container">
      {(inputQuery ? filteredCountries : filteredRegionCountries).map(
        (country, index) => {
          return <CountryCard data={country} key={index} />;
        }
      )}
    </section>
  );
};
export default CardContainer;
