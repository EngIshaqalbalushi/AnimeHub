import React, { useState, useEffect, type ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import AnimeCard from "../../components/anime/AnimeCard/AnimeCard";
import Pagination from "../../components/anime/Pagination/Pagination";
import SearchBar from "../../components/anime/SearchBar/SearchBar";
import { mockAnimeList } from "../../data/mockData";
import type { Anime } from "../../types/anime"; // ✅ Import the type properly
import "./SearchResults.scss";

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<
    "relevance" | "rating" | "title" | "year"
  >("relevance");
  const itemsPerPage = 12;

  // ✅ Get search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);
    setCurrentPage(1);
  }, [location.search]);

  // ✅ Calculate relevance score (typed)
  const getRelevanceScore = (anime: Anime, query: string): number => {
    let score = 0;
    const lowerQuery = query.toLowerCase();

    if (anime.title.toLowerCase().includes(lowerQuery)) score += 3;
    if (anime.genres.some((genre) => genre.toLowerCase().includes(lowerQuery)))
      score += 2;
    if (anime.synopsis.toLowerCase().includes(lowerQuery)) score += 1;

    return score;
  };

  // ✅ Filter and sort results
  const searchResults = mockAnimeList
    .filter((anime) => {
      if (!searchQuery) return false;

      const query = searchQuery.toLowerCase();
      return (
        anime.title.toLowerCase().includes(query) ||
        anime.genres.some((genre) => genre.toLowerCase().includes(query)) ||
        anime.synopsis.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "year") return b.year - a.year;

      // ✅ Handle "relevance" case cleanly outside of `case` declaration
      const aScore = getRelevanceScore(a, searchQuery);
      const bScore = getRelevanceScore(b, searchQuery);
      return bScore - aScore;
    });

  // ✅ Pagination
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const currentResults = searchResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ✅ Handle sort dropdown (typed)
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as "relevance" | "rating" | "title" | "year");
  };

  // ✅ Handle new searches
  const handleNewSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    window.history.pushState({}, "", `/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="search-results">
      <div className="search-results__header">
        <h1>Search Results</h1>
        <div className="search-box">
          <SearchBar onSearch={handleNewSearch} initialValue={searchQuery} />
        </div>
      </div>

      {searchQuery && (
        <>
          <div className="search-results__info">
            <div className="results-meta">
              <p>
                Found {searchResults.length} results for "
                <strong>{searchQuery}</strong>"
              </p>
            </div>

            <div className="sort-options">
              <label htmlFor="search-sort">Sort by:</label>
              <select
                id="search-sort"
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select">
                <option value="relevance">Relevance</option>
                <option value="rating">Rating</option>
                <option value="title">Title</option>
                <option value="year">Year</option>
              </select>
            </div>
          </div>

          {searchResults.length > 0 ? (
            <div className="search-results__content">
              <div className="anime-grid">
                {currentResults.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} />
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
          ) : (
            <div className="search-results__empty">
              <div className="empty-state">
                <h3>No results found for "{searchQuery}"</h3>
                <p>Try adjusting your search terms or browse our categories</p>
                <div className="suggestions">
                  <h4>Suggestions:</h4>
                  <ul>
                    <li>Check your spelling</li>
                    <li>Try more general terms</li>
                    <li>Browse by genre instead</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {!searchQuery && (
        <div className="search-results__initial">
          <div className="initial-state">
            <h3>Enter a search term to find anime</h3>
            <p>Search by title, genre, or description</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
