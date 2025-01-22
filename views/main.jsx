import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import "highlight.js/styles/night-owl.min.css";

const rootElement = document.getElementById("app");

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
