import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error?.statusText || "Page Not Found"}</p>
      <Link to="/">
        <button
          style={{
            padding: "8px 20px",
            marginTop: "20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "3px",
            backgroundColor: "hsl(209, 23%, 22%)",color:"white"
          }}
        >
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
