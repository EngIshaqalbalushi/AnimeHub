import React, { useState,type ChangeEvent } from "react";
import AnimeCard from "../../components/anime/AnimeCard/AnimeCard";
import Pagination from "../../components/anime/Pagination/Pagination";
import { mockAnimeList } from "../../data/mockData";
import "./Recent.scss";

const Recent: React.FC = () => {
  // --- State ---
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<"date" | "rating" | "name">("date");

  const itemsPerPage = 12;

  // --- Sort the anime list ---
  const sortedAnime = [...mockAnimeList]
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.title.localeCompare(b.title);
        case "date":
        default:
          return b.year - a.year || a.title.localeCompare(b.title);
      }
    })
    .slice(0, 48);

  // --- Pagination ---
  const totalPages = Math.ceil(sortedAnime.length / itemsPerPage);
  const currentAnime = sortedAnime.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --- Handlers ---
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as "date" | "rating" | "name");
  };

  return (
    <div className="recent">
      {/* HEADER */}
      <div className="recent__header">
        <h1>Recently Added Anime</h1>
        <p>Latest additions to our anime collection</p>
      </div>

      {/* SORT + VIEW CONTROLS */}
      <div className="recent__controls">
        <div className="sort-controls">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="date">Recently Added</option>
            <option value="rating">Highest Rated</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>

        <div className="view-options">
          <button className="view-option active" title="Grid View">
            ◼◼
          </button>
          <button className="view-option" title="List View">
            ≡
          </button>
        </div>
      </div>

      {/* SEASON FILTERS */}
      <div className="recent__filters">
        <div className="season-filters">
          <h4>Filter by Season:</h4>
          <div className="season-buttons">
            <button className="season-button active">All</button>
            <button className="season-button">Winter 2024</button>
            <button className="season-button">Fall 2023</button>
            <button className="season-button">Summer 2023</button>
            <button className="season-button">Spring 2023</button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="recent__content">
        <div className="anime-grid">
          {currentAnime.map((anime) => (
            <div key={anime.id} className="recent-card">
              <div className="recent-badge">New</div>
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Recent;
