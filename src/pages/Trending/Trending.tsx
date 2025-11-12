import React, { useState } from "react";
import AnimeCard from "../../components/anime/AnimeCard/AnimeCard";
import Pagination from "../../components/anime/Pagination/Pagination";
import { mockAnimeList } from "../../data/mockData";
import "./Trending.scss";

const Trending: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Sort by rating to get trending anime
  const trendingAnime = [...mockAnimeList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 48); // Limit to 48 items for pagination

  const totalPages = Math.ceil(trendingAnime.length / itemsPerPage);
  const currentAnime = trendingAnime.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="trending">
      <div className="trending__header">
        <h1>Trending Anime</h1>
        <p>Discover what's popular right now in the anime community</p>
      </div>

      <div className="trending__filters">
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
          <button className="filter-button">This Week</button>
          <button className="filter-button">This Month</button>
          <button className="filter-button">This Year</button>
        </div>
      </div>

      <div className="trending__content">
        <div className="anime-grid">
          {currentAnime.map((anime, index) => (
            <div key={anime.id} className="trending-card">
              <div className="trending-rank">
                #{index + 1 + (currentPage - 1) * itemsPerPage}
              </div>
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>

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

export default Trending;
