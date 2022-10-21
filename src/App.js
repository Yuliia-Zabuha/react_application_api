import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Homepage from "./Pages/Homepage";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
