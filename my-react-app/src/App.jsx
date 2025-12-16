import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { request } from "./Request.jsx";
import Loader from "./Components/Loader/index.jsx";
import Contact from "./Pages/Contact/index.jsx";
import About from "./Pages/About/index.jsx";
import Smovie from "./Pages/Smovie/index.jsx";
import Show from "./Pages/Shows/index.jsx";


// Lazy-loaded components
const Home = lazy(() => import("./Home/index.jsx"));
const Navbar = lazy(() => import("./Pages/Navbar/index.jsx"));

const App = () => {
  const [value, setValue] = useState("");        // input value
  const [searchTerm, setSearchTerm] = useState(""); // triggers Home fetch

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        {/* Pass setSearchTerm to Navbar */}
        <Navbar value={value} setValue={setValue} setSearchTerm={setSearchTerm} />

        <Routes>
          <Route
            path="/"
            element={
              <div className="Container">
                {searchTerm ? (
                  <Home url={request.search(searchTerm)} title="Search Results" />
                ) : (
                  <>
                    <Home url={request.popular} title="Popular" />
                    <Home url={request.trending} title="Trending" />
                    <Home url={request.upComming} title="Upcoming" />
                    <Home url={request.Action} title="Action" />
                  </>
                )}
              </div>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie/:id" element={<Smovie />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
