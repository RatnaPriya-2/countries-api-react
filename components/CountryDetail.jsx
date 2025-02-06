import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";
import ErrorPage from "./ErrorPage";

const CountryDetail = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  let params = useParams();
  let countryName = params.details;

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Country not found");
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.status === 404) {
          throw new Error("Country not found");
        }
        const countryData = data[0];
        setCountry({
          name: countryData.name.common,
          nativeName: countryData.name.nativeName
            ? Object.values(countryData.name.nativeName)[0]?.common
            : "N/A",

          population: countryData.population.toLocaleString("en-IN"),
          capital: countryData.capital,
          region: countryData.region,
          subregion: countryData.subregion,
          tld: countryData.tld,
          png: countryData.flags.png,
          alt: countryData.flags.alt,
          currencies: countryData.currencies
            ? Object.values(countryData.currencies)[0]?.name
            : "N/A",
          languages: countryData.languages
            ? Object.values(countryData.languages).join(",")
            : "N/A",
          borders: countryData.borders || [],
        });

        if (countryData.borders && countryData.borders.length > 0) {
          Promise.all(
            countryData.borders.map((border) => {
              return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then((data) => data[0].name.common);
            })
          )
            .then((bordersNames) => {
              if (bordersNames.length > 0) {
                setCountry((prev) => ({ ...prev, borders: bordersNames }));
              }
            })
            .catch(console.error);
        }
      })
      .catch((err) => setError(true));
  }, [countryName]);

  if (error) return <ErrorPage />;
  if (country === null) return <CountryDetailShimmer />;

  return (
    <section className="main-body">
      <div className="back" onClick={() => navigate(-1)}>
        <button>
          <i className="fa-solid fa-arrow-left-long"></i>Back
        </button>
      </div>
      <div className="country-whole-data">
        <div className="country-flag">
          <img className="flag-img" src={country.png} alt={country.alt} />
        </div>
        <div className="country-data">
          <div className="country-name">
            <p className="country-title">{country.name}</p>
          </div>
          <div className="whole-details">
            <p>
              Native Name:{" "}
              <span className="native-name">{country.nativeName}</span>
            </p>
            <p>
              Population:{" "}
              <span className="population">{country.population}</span>
            </p>
            <p>
              Region: <span className="region">{country.region}</span>
            </p>
            <p>
              Sub Region:{" "}
              <span className="sub-region">{country.subregion}</span>
            </p>
            <p>
              Capital: <span className="capital">{country.capital}</span>
            </p>
            <p>
              Top Level Domain: <span className="tld">{country.tld}</span>
            </p>
            <p>
              Currencies:{" "}
              <span className="currencies">{country.currencies}</span>
            </p>
            <p>
              Languages: <span className="languages">{country.languages}</span>
            </p>
          </div>
          <div className="borders">
            <p>Border Countries :</p>
            {country.borders.length > 0 ? (
              country.borders.map((border) => (
                <Link key={border} to={`/${border}`}>
                  <span>{border}</span>
                </Link>
              ))
            ) : (
              <span>No bordering countries</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
