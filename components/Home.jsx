import React, { useEffect, useState } from "react";
import Search from "./Search";
import Nav from "./Nav";
import CardContainer from "./CardContainer";
import "../style.css";
import Filter from "./Filter";
import { useParams, useSearchParams } from "react-router-dom";
import HomeShimmer from "./HomeSHimmer";

const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredRegionCountries, setFilteredRegionCountries] = useState([]);
  const [inputQuery, setInputQuery] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const regionFromUrl = searchParams.get("region") || "Filter by Region";

  const [selectRegion, setSelectRegion] = useState(regionFromUrl);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setAllCountries(data);
        setFilteredRegionCountries(data); // Initially, filteredCountries is the same as allCountries
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    if (selectRegion === "Filter by Region" || selectRegion === "All") {
      setFilteredRegionCountries(allCountries);
    } else {
      setFilteredRegionCountries(
        allCountries.filter((country) => country.region === selectRegion)
      );
    }
  }, [selectRegion, allCountries]);

  useEffect(() => {
    setSearchParams({ region: selectRegion });
  }, [selectRegion, setSearchParams]);

  return (
    <section className="main-body">
      <section className="search-filter">
        <div className="search-filter-cluster">
          <Search setInputQuery={setInputQuery} />
          <Filter
            handleDropdown={handleDropdown}
            dropdown={dropdown}
            setSelectRegion={setSelectRegion}
            selectRegion={selectRegion}
          />
        </div>
      </section>
      {!allCountries.length ? (
        <HomeShimmer />
      ) : (
        <CardContainer
          inputQuery={inputQuery}
          data={allCountries}
          filteredRegionCountries={filteredRegionCountries}
          setSelectRegion={setSelectRegion}
          selectRegion={selectRegion}
        />
      )}
    </section>
  );
};

export default Home;
