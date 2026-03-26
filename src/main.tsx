import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Sidebar from "./features/sidebar/components/Sidebar.tsx";
import Pve from "./features/pve/components/PvE.tsx"
import SearchBar from "./components/ui/SearchBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Sidebar />
      <div className="ml-64 mt-2">
        <SearchBar />
        <Pve />
      </div>
  </StrictMode>,
);
