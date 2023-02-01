import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// 1 - Configurando Router

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./routes/ErrorPage";
import Register from "./routes/Register/Register";
import Home from "./routes/Home";
import LoginPage from "./routes/Login";
import HomeUsers from "./routes/HomePrivate";
import PrivateRoute from "./services/PrivateRoute";

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
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <PrivateRoute Component={<HomeUsers />} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
