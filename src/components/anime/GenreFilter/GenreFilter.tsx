import React from "react";
import "./GenreFilter.scss";

interface GenreFilterProps {
  genres: string[];
  selectedGenres: string[];
  onGenreToggle: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({
  genres,
  selectedGenres,
  onGenreToggle,
}) => {
  return (
    <div className="genre-filter">
      <h4 className="genre-filter__title">Genres</h4>
      <div className="genre-filter__list">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-filter__item ${
              selectedGenres.includes(genre) ? "genre-filter__item--active" : ""
            }`}
            onClick={() => onGenreToggle(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
