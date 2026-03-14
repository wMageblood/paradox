import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./components/About/About.tsx";
import RaidRenderer from "./components/About/RaidRenderer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <About />
    <RaidRenderer expansionName="Dragonflight" />
  </StrictMode>,
);
