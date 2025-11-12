import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  mockAnimeList,
  mockEpisodes,
  mockCharacters,
} from "../../data/mockData";
import EpisodeList from "../../components/anime/EpisodeList/EpisodeList";
import CharacterList from "../../components/anime/CharacterList/CharacterList";
import Button from "../../components/common/Button/Button";
import "./AnimeDetail.scss";

const AnimeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<"episodes" | "characters">(
    "episodes"
  );

  const anime = mockAnimeList.find((a) => a.id === parseInt(id || "0"));
  const episodes = mockEpisodes.filter(
    (ep) => ep.animeId === parseInt(id || "0")
  );
  const characters = mockCharacters.filter(
    (char) => char.animeId === parseInt(id || "0")
  );

  if (!anime) {
    return (
      <div className="anime-not-found">
        <h2>Anime not found</h2>
        <Link to="/browse">
          <Button variant="primary">Back to Browse</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="anime-detail">
      <div className="anime-detail__hero">
        <div className="anime-detail__image-container">
          <img
            src={anime.image}
            alt={anime.title}
            className="anime-detail__image"
          />
          <div className="anime-detail__image-overlay">
            <Button variant="primary" size="lg">
              Watch Now
            </Button>
            <Button variant="outline" size="lg">
              Add to Favorites
            </Button>
          </div>
        </div>

        <div className="anime-detail__info">
          <h1 className="anime-detail__title">{anime.title}</h1>

          <div className="anime-detail__meta">
            <div className="meta-item">
              <span className="meta-label">Rating:</span>
              <span className="meta-value">⭐ {anime.rating}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Episodes:</span>
              <span className="meta-value">{anime.episodes}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status:</span>
              <span className={`meta-value status-${anime.status}`}>
                {anime.status}
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Type:</span>
              <span className="meta-value">{anime.type}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Season:</span>
              <span className="meta-value">
                {anime.season} {anime.year}
              </span>
            </div>
          </div>

          <div className="anime-detail__genres">
            {anime.genres.map((genre) => (
              <span key={genre} className="anime-detail__genre">
                {genre}
              </span>
            ))}
          </div>

          <div className="anime-detail__synopsis">
            <h3>Synopsis</h3>
            <p>{anime.synopsis}</p>
          </div>

          <div className="anime-detail__actions">
            <Button variant="primary" size="lg">
              Watch First Episode
            </Button>
            <Button variant="outline" size="lg">
              Add to List
            </Button>
          </div>
        </div>
      </div>

      <div className="anime-detail__tabs">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === "episodes" ? "active" : ""}`}
            onClick={() => setActiveTab("episodes")}>
            Episodes ({episodes.length})
          </button>
          <button
            className={`tab-button ${
              activeTab === "characters" ? "active" : ""
            }`}
            onClick={() => setActiveTab("characters")}>
            Characters ({characters.length})
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === "episodes" && (
            <EpisodeList episodes={episodes} animeId={anime.id} />
          )}
          {activeTab === "characters" && (
            <CharacterList characters={characters} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
