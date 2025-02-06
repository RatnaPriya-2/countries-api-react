import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import CountryDetail from "./components/CountryDetail";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:details",
        element: <CountryDetail />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
