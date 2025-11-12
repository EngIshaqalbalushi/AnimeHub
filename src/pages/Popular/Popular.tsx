import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import AnimeCard from "../../components/anime/AnimeCard/AnimeCard";
import Pagination from "../../components/anime/Pagination/Pagination";
import Button from "../../components/common/Button/Button";
import { mockAnimeList } from "../../data/mockData";
import "./Popular.scss";

const Popular: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeFilter, setTimeFilter] = useState<"all" | "year" | "season">(
    "all"
  );
  const [sortBy, setSortBy] = useState<"rating" | "popularity" | "title">(
    "rating"
  );
  const itemsPerPage = 12;

  // --- Filter & Sort Popular Anime ---
  const popularAnime = useMemo(() => {
    let filtered = [...mockAnimeList];

    // Apply time filter
    if (timeFilter === "year") {
      filtered = filtered.filter((anime) => anime.year === 2024);
    } else if (timeFilter === "season") {
      filtered = filtered.filter(
        (anime) => anime.season === "Winter" && anime.year === 2024
      );
    }

    // Apply sorting safely
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;

        case "popularity": {
          // ✅ Wrapped in braces to create scope
          const aPopularity = a.rating * (a.episodes / 100);
          const bPopularity = b.rating * (b.episodes / 100);
          return bPopularity - aPopularity;
        }

        case "title":
          return a.title.localeCompare(b.title);

        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [timeFilter, sortBy]);

  // --- Pagination ---
  const totalPages = Math.ceil(popularAnime.length / itemsPerPage);
  const currentAnime = popularAnime.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --- Statistics Section ---
  const stats = useMemo(() => {
    const totalShows = popularAnime.length;

    const averageRating =
      totalShows > 0
        ? (
            popularAnime.reduce((acc, anime) => acc + anime.rating, 0) /
            totalShows
          ).toFixed(1)
        : "0.0";

    const genreCount = popularAnime.reduce((acc, anime) => {
      anime.genres.forEach((genre) => {
        acc[genre] = (acc[genre] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    const topGenre =
      Object.entries(genreCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "None";

    return { totalShows, averageRating, topGenre };
  }, [popularAnime]);

  const clearFilters = () => {
    setTimeFilter("all");
    setSortBy("rating");
    setCurrentPage(1);
  };

  return (
    <div className="popular">
      <div className="popular__header">
        <h1>Most Popular Anime</h1>
        <p>All-time favorites and top-rated shows loved by the community</p>
      </div>

      {/* --- Statistics Section --- */}
      <div className="popular__stats">
        <div className="stat-card">
          <div className="stat-card__icon">📺</div>
          <div className="stat-card__content">
            <h3>Total Shows</h3>
            <p className="stat-card__number">{stats.totalShows}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">⭐</div>
          <div className="stat-card__content">
            <h3>Average Rating</h3>
            <p className="stat-card__number">{stats.averageRating}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">🏷️</div>
          <div className="stat-card__content">
            <h3>Top Genre</h3>
            <p className="stat-card__genre">{stats.topGenre}</p>
          </div>
        </div>
      </div>

      {/* --- Filter Controls --- */}
      <div className="popular__controls">
        <div className="popular__filters">
          <div className="filter-group">
            <h4>Time Period</h4>
            <div className="filter-buttons">
              {["all", "year", "season"].map((filter) => (
                <button
                  key={filter}
                  className={`filter-button ${
                    timeFilter === filter ? "active" : ""
                  }`}
                  onClick={() =>
                    setTimeFilter(filter as "all" | "year" | "season")
                  }>
                  {filter === "all"
                    ? "All Time"
                    : filter === "year"
                    ? "This Year"
                    : "This Season"}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h4>Sort By</h4>
            <div className="filter-buttons">
              {["rating", "popularity", "title"].map((option) => (
                <button
                  key={option}
                  className={`filter-button ${
                    sortBy === option ? "active" : ""
                  }`}
                  onClick={() =>
                    setSortBy(option as "rating" | "popularity" | "title")
                  }>
                  {option === "rating"
                    ? "Highest Rated"
                    : option === "popularity"
                    ? "Most Popular"
                    : "Alphabetical"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="popular__actions">
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            disabled={timeFilter === "all" && sortBy === "rating"}>
            Clear Filters
          </Button>
        </div>
      </div>

      {/* --- Results Summary --- */}
      <div className="popular__info">
        <p className="results-count">
          Showing {currentAnime.length} of {popularAnime.length} popular anime
          {timeFilter !== "all" &&
            ` (${timeFilter === "year" ? "2024" : "Winter 2024"})`}
        </p>
        <div className="sort-indicator">
          Sorted by:{" "}
          <strong>
            {sortBy === "rating"
              ? "Highest Rating"
              : sortBy === "popularity"
              ? "Popularity"
              : "Alphabetical"}
          </strong>
        </div>
      </div>

      {/* --- Anime Cards --- */}
      <div className="popular__content">
        <div className="anime-grid">
          {currentAnime.map((anime, index) => (
            <div key={anime.id} className="popular-card">
              <div className="popular-rank">
                #{index + 1 + (currentPage - 1) * itemsPerPage}
              </div>
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>

        {/* --- Empty State --- */}
        {currentAnime.length === 0 && (
          <div className="popular__empty">
            <div className="empty-state">
              <h3>No popular anime found</h3>
              <p>Try adjusting your filters or browse other categories</p>
              <div className="empty-state__actions">
                <Link to="/browse">
                  <Button variant="primary">Browse All Anime</Button>
                </Link>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>

      {/* --- Explore by Genre --- */}
      <div className="popular__genres">
        <h2>Explore by Genre</h2>
        <div className="genre-tags">
          {["Action", "Fantasy", "Drama", "Comedy", "Adventure", "Romance"].map(
            (genre) => (
              <Link
                key={genre}
                to={`/browse?genre=${genre}`}
                className="genre-tag">
                {genre}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Popular;
