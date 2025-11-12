import React, { useState } from "react";
import AnimeCard from "../../components/anime/AnimeCard/AnimeCard";
import Button from "../../components/common/Button/Button";
import { mockAnimeList } from "../../data/mockData";
import "./Favorites.scss";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState(mockAnimeList.slice(0, 8));
  const [watchLater, setWatchLater] = useState(mockAnimeList.slice(8, 12));
  const [activeTab, setActiveTab] = useState<"favorites" | "watchlist">(
    "favorites"
  );

  const removeFromFavorites = (animeId: number) => {
    setFavorites(favorites.filter((anime) => anime.id !== animeId));
  };

  const removeFromWatchLater = (animeId: number) => {
    setWatchLater(watchLater.filter((anime) => anime.id !== animeId));
  };

  const clearAll = () => {
    if (activeTab === "favorites") {
      setFavorites([]);
    } else {
      setWatchLater([]);
    }
  };

  const currentList = activeTab === "favorites" ? favorites : watchLater;
  const isEmpty = currentList.length === 0;

  return (
    <div className="favorites">
      <div className="favorites__header">
        <h1>My Lists</h1>
        <p>Manage your favorite anime and watchlist</p>
      </div>

      <div className="favorites__tabs">
        <button
          className={`favorites__tab ${
            activeTab === "favorites" ? "active" : ""
          }`}
          onClick={() => setActiveTab("favorites")}>
          Favorites ({favorites.length})
        </button>
        <button
          className={`favorites__tab ${
            activeTab === "watchlist" ? "active" : ""
          }`}
          onClick={() => setActiveTab("watchlist")}>
          Watch Later ({watchLater.length})
        </button>
      </div>

      <div className="favorites__content">
        <div className="favorites__actions">
          <h2>
            {activeTab === "favorites" ? "Favorite Anime" : "Watch Later List"}
          </h2>
          {!isEmpty && (
            <Button variant="outline" size="sm" onClick={clearAll}>
              Clear All
            </Button>
          )}
        </div>

        {isEmpty ? (
          <div className="favorites__empty">
            <div className="empty-state">
              <h3>
                No anime in your{" "}
                {activeTab === "favorites" ? "favorites" : "watchlist"}
              </h3>
              <p>
                Start adding anime to your{" "}
                {activeTab === "favorites" ? "favorites" : "watchlist"}
                by browsing our collection
              </p>
              <Button
                variant="primary"
                onClick={() => (window.location.href = "/browse")}>
                Browse Anime
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="anime-grid">
              {currentList.map((anime) => (
                <div key={anime.id} className="favorites__card-wrapper">
                  <AnimeCard anime={anime} />
                  <button
                    className="favorites__remove-btn"
                    onClick={() =>
                      activeTab === "favorites"
                        ? removeFromFavorites(anime.id)
                        : removeFromWatchLater(anime.id)
                    }
                    title={`Remove from ${
                      activeTab === "favorites" ? "favorites" : "watchlist"
                    }`}>
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="favorites__stats">
              <p>
                You have {currentList.length} anime in your{" "}
                {activeTab === "favorites" ? "favorites" : "watchlist"}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
