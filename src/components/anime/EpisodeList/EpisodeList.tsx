import React from "react";
import type { Episode } from "../../../types/anime";
import "./EpisodeList.scss";

interface EpisodeListProps {
  episodes: Episode[];
  animeId: number;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, animeId }) => {
  const handleWatchEpisode = (episodeId: number) => {
    // You can use animeId here to track which anime is being watched
    console.log(`Watching episode ${episodeId} from anime ${animeId}`);
    // Add your watch logic here, e.g., navigation to video player
    // window.location.href = `/watch/${animeId}/${episodeId}`;
  };

  return (
    <div className="episode-list">
      <h3 className="episode-list__title">Episodes</h3>
      <div className="episode-list__grid">
        {episodes.map((episode) => (
          <div key={episode.id} className="episode-card">
            <div className="episode-card__number">{episode.number}</div>
            <div className="episode-card__content">
              <h4 className="episode-card__title">{episode.title}</h4>
              <span className="episode-card__duration">{episode.duration}</span>
            </div>
            <button
              className="episode-card__watch"
              onClick={() => handleWatchEpisode(episode.id)}>
              Watch
            </button>
          </div>
        ))}
      </div>

      {episodes.length === 0 && (
        <div className="episode-list__empty">
          <p>No episodes available yet</p>
        </div>
      )}
    </div>
  );
};

export default EpisodeList;
