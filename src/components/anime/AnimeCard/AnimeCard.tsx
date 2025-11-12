import React from "react";
import { Link } from "react-router-dom";
import type { Anime } from "../../../types/anime";
import "./AnimeCard.scss";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <Link to={`/anime/${anime.id}`} className="anime-card">
      <div className="anime-card__image">
        <img src={anime.image} alt={anime.title} />
        <div className="anime-card__rating">⭐ {anime.rating}</div>
        <div className="anime-card__status">{anime.status}</div>
      </div>

      <div className="anime-card__content">
        <h3 className="anime-card__title">{anime.title}</h3>
        <div className="anime-card__info">
          <span>{anime.type}</span>
          <span>{anime.episodes} eps</span>
        </div>
        <div className="anime-card__genres">
          {anime.genres.slice(0, 2).map((genre) => (
            <span key={genre} className="anime-card__genre">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
