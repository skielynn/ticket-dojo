// main.jsx = entry point that mounts the app to the DOM

import React from "react";
import ReactDOM from "react-dom/client";
// BrowserRouter enables client-side routing (URLs without fall page reloads)
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  {/* Wrap the whole app so all children can use routing */}
  <BrowserRouter>
  <App />
  </BrowserRouter>
 </React.StrictMode>
);