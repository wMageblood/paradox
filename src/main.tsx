import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Pve from "./components/PvE/PvE.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Sidebar />
      <Pve />
  </StrictMode>,
);
