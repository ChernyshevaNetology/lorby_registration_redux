import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRootComponent from "../components/AuthRootComponent";
import MainPage from "../components/pages/MainPage";
import ConfirmEmail from "../components/confirmEmail/ConfirmEmail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<AuthRootComponent />} />
      <Route path="/login" element={<AuthRootComponent />} />
      <Route path="/confirm-email" element={<ConfirmEmail />} />
    </Routes>
  );
};

export default MainRoutes;
