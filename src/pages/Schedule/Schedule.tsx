import React, { useState } from "react";
import AnimeCard from "../../components/anime/AnimeCard/AnimeCard";
import { mockAnimeList } from "../../data/mockData";
import "./Schedule.scss";

const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("monday");

  const days = [
    { id: "monday", name: "Monday" },
    { id: "tuesday", name: "Tuesday" },
    { id: "wednesday", name: "Wednesday" },
    { id: "thursday", name: "Thursday" },
    { id: "friday", name: "Friday" },
    { id: "saturday", name: "Saturday" },
    { id: "sunday", name: "Sunday" },
  ];

  // Filter ongoing anime and assign them to different days for demo
  const ongoingAnime = mockAnimeList.filter(
    (anime) => anime.status === "ongoing"
  );
  const scheduledAnime = ongoingAnime.reduce((acc, anime, index) => {
    const day = days[index % days.length].id;
    if (!acc[day]) acc[day] = [];
    acc[day].push(anime);
    return acc;
  }, {} as Record<string, typeof ongoingAnime>);

  return (
    <div className="schedule">
      <div className="schedule__header">
        <h1>Weekly Schedule</h1>
        <p>Keep track of when new episodes air</p>
      </div>

      <div className="schedule__days">
        {days.map((day) => (
          <button
            key={day.id}
            className={`schedule__day ${
              selectedDay === day.id ? "active" : ""
            }`}
            onClick={() => setSelectedDay(day.id)}>
            {day.name}
          </button>
        ))}
      </div>

      <div className="schedule__content">
        <h2 className="schedule__day-title">
          {days.find((d) => d.id === selectedDay)?.name}'s Releases
        </h2>

        <div className="anime-grid">
          {(scheduledAnime[selectedDay] || []).map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>

        {(!scheduledAnime[selectedDay] ||
          scheduledAnime[selectedDay].length === 0) && (
          <div className="schedule__empty">
            <h3>No releases scheduled for this day</h3>
            <p>Check back later for updates</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
