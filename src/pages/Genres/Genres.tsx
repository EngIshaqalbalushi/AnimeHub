import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mockAnimeList } from "../../data/mockData";
import "./Genres.scss";

const Genres: React.FC = () => {
  const [searchGenre, setSearchGenre] = useState("");

  // Get all unique genres and count anime for each
  const genreStats = mockAnimeList.reduce((acc, anime) => {
    anime.genres.forEach((genre) => {
      if (!acc[genre]) {
        acc[genre] = 0;
      }
      acc[genre]++;
    });
    return acc;
  }, {} as Record<string, number>);

  const genres = Object.entries(genreStats)
    .map(([genre, count]) => ({ genre, count }))
    .sort((a, b) => b.count - a.count);

  const filteredGenres = genres.filter((genreObj) =>
    genreObj.genre.toLowerCase().includes(searchGenre.toLowerCase())
  );

  const getGenreColor = (index: number) => {
    const colors = [
      "linear-gradient(135deg, #667eea, #764ba2)",
      "linear-gradient(135deg, #f093fb, #f5576c)",
      "linear-gradient(135deg, #4facfe, #00f2fe)",
      "linear-gradient(135deg, #43e97b, #38f9d7)",
      "linear-gradient(135deg, #fa709a, #fee140)",
      "linear-gradient(135deg, #a8edea, #fed6e3)",
      "linear-gradient(135deg, #5ee7df, #b490ca)",
      "linear-gradient(135deg, #d299c2, #fef9d7)",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="genres">
      <div className="genres__header">
        <h1>Anime Genres</h1>
        <p>Explore anime by your favorite genres</p>
      </div>

      <div className="genres__search">
        <input
          type="text"
          placeholder="Search genres..."
          value={searchGenre}
          onChange={(e) => setSearchGenre(e.target.value)}
          className="genres-search-input"
        />
      </div>

      <div className="genres__stats">
        <div className="total-genres">
          <h3>Total Genres</h3>
          <p>{genres.length}</p>
        </div>
        <div className="total-anime">
          <h3>Total Anime</h3>
          <p>{mockAnimeList.length}</p>
        </div>
      </div>

      <div className="genres__grid">
        {filteredGenres.map((genreObj, index) => (
          <Link
            key={genreObj.genre}
            to={`/browse?genre=${encodeURIComponent(genreObj.genre)}`}
            className="genre-card">
            <div
              className="genre-card__background"
              style={{ background: getGenreColor(index) }}></div>
            <div className="genre-card__content">
              <h3 className="genre-card__name">{genreObj.genre}</h3>
              <p className="genre-card__count">{genreObj.count} anime</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredGenres.length === 0 && (
        <div className="genres__empty">
          <h3>No genres found</h3>
          <p>Try a different search term</p>
        </div>
      )}

      <div className="genres__popular">
        <h2>Most Popular Genres</h2>
        <div className="popular-tags">
          {genres.slice(0, 10).map((genreObj) => (
            <Link
              key={genreObj.genre}
              to={`/browse?genre=${encodeURIComponent(genreObj.genre)}`}
              className="popular-tag">
              {genreObj.genre} <span>({genreObj.count})</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
