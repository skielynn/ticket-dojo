// App.jsx - defines navigation + which page renders for each URL

import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ButtonsPlayground from "./pages/ButtonsPlayground";


export default function App() {
  return (
    <div>
      {/* Simple nav bar at the top */}
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        {/* Link = client side navigation (no page reload ) */}
        <Link to="/">Home</Link>
        <Link to="/playground/buttons">Buttons Playground</Link>
      </nav>

      {/* Routes decide which component to render based on the URL path */}
      <Routes>
        {/* "/" renders the Home page */}
        <Route path="/" element={<Home />} />

        {/* "/playground/buttons" renders the button demo page */}
        <Route path="/playground/buttons" element={<ButtonsPlayground />} />
      </Routes>
    </div>
  );
}

