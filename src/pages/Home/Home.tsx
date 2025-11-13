import React from "react";
import { Link } from "react-router-dom";
import AnimeCard from "../../components/anime/AnimeCard/AnimeCard";
import { mockAnimeList } from "../../data/mockData";
import "./Home.scss";

const Home: React.FC = () => {
  const trendingAnime = mockAnimeList.slice(0, 6);
  const recentAnime = mockAnimeList.slice(6, 12);
  const popularAnime = mockAnimeList.slice(12, 18);

  return (
    <div className="home">
      <section className="hero">
        {/* 🌟 Full Background YouTube Video */}
        <div className="hero__video-background">
          <iframe
            className="hero__video"
            src="https://www.youtube.com/embed/i0Sd0YPERpg?autoplay=1&mute=1&loop=1&playlist=i0Sd0YPERpg&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&vq=hd1080"
            title="Anime Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          ></iframe>
          <div className="hero__video-overlay"></div>
        </div>

        {/* Content Over Video */}
        <div className="hero__content">
          <h1 className="hero__title">Welcome to AnimeHub</h1>
          <p className="hero__subtitle">
            Discover and watch your favorite anime shows in high quality
          </p>
          <Link to="/browse">
            <button className="hero__cta">Browse All Anime</button>
          </Link>
        </div>
      </section>

      {/* Trending Section */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">Trending Now</h2>
          <Link to="/trending" className="section__link">
            View All
          </Link>
        </div>
        <div className="anime-grid">
          {trendingAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      {/* Recent Section */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">Recently Added</h2>
          <Link to="/recent" className="section__link">
            View All
          </Link>
        </div>
        <div className="anime-grid">
          {recentAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">Most Popular</h2>
          <Link to="/popular" className="section__link">
            View All
          </Link>
        </div>
        <div className="anime-grid">
          {popularAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;