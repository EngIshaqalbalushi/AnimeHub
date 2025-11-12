import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import AnimeDetail from "./pages/AnimeDetail/AnimeDetail";
import Schedule from "./pages/Schedule/Schedule";
import Favorites from "./pages/Favorites/Favorites";
import Trending from "./pages/Trending/Trending";
import Popular from "./pages/Popular/Popular";
import Recent from "./pages/Recent/Recent";
import Genres from "./pages/Genres/Genres";
import SearchResults from "./pages/SearchResults/SearchResults";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/anime/:id" element={<AnimeDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/search" element={<SearchResults />} />
            {/* Fallback route for 404 pages */}
            <Route
              path="*"
              element={
                <div className="not-found">
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
