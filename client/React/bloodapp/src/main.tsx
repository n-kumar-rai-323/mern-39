import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import HomePage from "./pages/home/home.page"
import "./assets/css/global.css"
import BloodRegisterPage from "./pages/auth/register/register";
import LoginPageDesign from "./pages/home/home.page";
createRoot(document.getElementById('root')!).render(
    <StrictMode>
      {/* <BloodRegisterPage/> */}
      {/* <HomePage/> */}
      <LoginPageDesign/>
    </StrictMode>
);