import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/index.jsx";
import { Input } from "../../Components/Input/index.jsx";
import "./index.css";

const Navbar = ({ value, setValue, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (value.trim() !== "") {
      setSearchTerm(value);  // trigger search in Home
      navigate("/");         // navigate to Home page
    }
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-right">
          <h2>Movie App</h2>
        </div>

        <div className="nav-left">
          <Input
            placeholder="Search Movies..."
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // search on Enter
          />
          <Button onClick={handleSearch}>Search</Button>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shows">Show</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
