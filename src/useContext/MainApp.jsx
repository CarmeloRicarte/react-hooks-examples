import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./";
import { HomePage } from "./";
import { LoginPage } from "./";
import { Navbar } from "./";
export const MainApp = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};
