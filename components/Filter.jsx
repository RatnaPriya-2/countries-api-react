import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({
  dropdown,
  handleDropdown,
  selectRegion,
  setSelectRegion,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleRegionChange = (region) => {
    setSelectRegion(region);
    handleDropdown();
    setSearchParams({ region: selectRegion });
  };

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="filter-cluster" onClick={handleDropdown}>
      <p className="filter-text">{selectRegion} </p>
      <i className="fa-solid fa-chevron-down"></i>
      <div className={`filter-dropdown ${dropdown ? "open" : ""}`}>
        <ul>
          {regions.map((region) => {
            return (
              <li key={region} onClick={() => handleRegionChange(region)}>
                {region}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
