// React //

import React from "react";
import ReactDOM from "react-dom/client";

// Pages //

import ErrorPage from "./routes/ErrorPage";
import TypeAccount from "./routes/Register/TypeAccount";
import Home from "./routes/Home";
import LoginPage from "./routes/Login";
import RegisterUser from "./routes/Register/User";
import RegisterCompany from "./routes/Register/Company";
import ServicesTest from "./routes/Create Services/handlePostTest";
import ServicesPage from "./routes/ServicesPage";
import PostDetails from "./routes/PostDetails";
import PerfilUser from "./routes/PerfilUser";

// Rota Privada //

import PrivateRoute from "./services/PrivateRoute";

// React router DOM //

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Freelancers from "./routes/Freelancers";

// Router //
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<TypeAccount />} />
      <Route path="/register/user-register" element={<RegisterUser />} />
      <Route path="/register/company-register" element={<RegisterCompany />} />
      <Route path="*" element={<ErrorPage />} />
      <Route
        path="/criar-servico"
        element={<PrivateRoute element={<ServicesTest />} />}
      />
      <Route path="/servicos" element={<ServicesPage />} />
      <Route path="/servicos/:key" element={<PostDetails />} />
      <Route path="/perfil/:userId" element={<PerfilUser />} />
      <Route path="/freelancers" element={<Freelancers />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
