import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import RouterConfig from "./config/router.config";

import "./assets/css/global.css"
import { AuthProvider } from "./context/auth.context";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  </StrictMode>
);