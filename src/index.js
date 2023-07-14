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

// Pages Privadas //
import CreateServices from "./routes/Create Services";
import ServicesPage from "./routes/ServicesPage";
import PostDetails from "./routes/PostDetails";
import PerfilUser from "./routes/PerfilUser";
import Freelancers from "./routes/Freelancers";
import PerfilFreelancer from "./routes/PerfilFreelancers";
import FavoritesUser from "./routes/Favorites";

// React router DOM //

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import PrivateRoute from "./services/PrivateRoute";
import { AuthProvider } from "./services/authContext";

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
        element={<PrivateRoute element={<CreateServices />} />}
      />
      <Route
        path="/servicos"
        element={<PrivateRoute element={<ServicesPage />} />}
      />
      <Route
        path="/servicos/:key"
        element={<PrivateRoute element={<PostDetails />} />}
      />
      <Route
        path="/meu-perfil/:userId"
        element={<PrivateRoute element={<PerfilUser />} />}
      />
      <Route
        path="/freelancers"
        element={<PrivateRoute element={<Freelancers />} />}
      />
      <Route
        path="/perfil-freelancer/:freelancerId"
        element={<PrivateRoute element={<PerfilFreelancer />} />}
      />
      <Route path="/favoritos/userId" element={<FavoritesUser />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
