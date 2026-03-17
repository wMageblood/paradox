import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RaidRenderer from "./components/About/RaidRenderer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RaidRenderer />
  </StrictMode>,
);
