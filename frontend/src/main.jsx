import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/bootstrap.min.css"; // Import the Superhero theme // Bootswatch theme
import "./assets/css/styles.css"; //our custom styles
import App from "./App";
import "bootswatch/dist/superhero/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
