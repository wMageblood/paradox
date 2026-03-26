import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Pve from "./components/PvE/PvE.tsx"
import SearchBar from "./components/SearchBar/SearchBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Sidebar />
      <div className="ml-64 mt-2">
        <SearchBar />
        <Pve />
      </div>
  </StrictMode>,
);
