import React, { useState, useMemo } from 'react';
import AnimeCard from '../../components/anime/AnimeCard/AnimeCard';
import SearchBar from '../../components/anime/SearchBar/SearchBar';
import GenreFilter from '../../components/anime/GenreFilter/GenreFilter';
import Pagination from '../../components/anime/Pagination/Pagination';
import { mockAnimeList } from '../../data/mockData';
import './Browse.scss';

const Browse: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const allGenres = Array.from(new Set(mockAnimeList.flatMap(anime => anime.genres)));
  const statusOptions = ['all', 'ongoing', 'completed', 'upcoming'];
  const typeOptions = ['all', 'TV', 'Movie', 'OVA'];

  const filteredAnime = useMemo(() => {
    return mockAnimeList.filter(anime => {
      const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenres = selectedGenres.length === 0 || 
        selectedGenres.every(genre => anime.genres.includes(genre));
      const matchesStatus = selectedStatus === 'all' || anime.status === selectedStatus;
      const matchesType = selectedType === 'all' || anime.type === selectedType;
      
      return matchesSearch && matchesGenres && matchesStatus && matchesType;
    });
  }, [searchQuery, selectedGenres, selectedStatus, selectedType]);

  const totalPages = Math.ceil(filteredAnime.length / itemsPerPage);
  const currentAnime = filteredAnime.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedGenres([]);
    setSelectedStatus('all');
    setSelectedType('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="browse">
      <div className="browse__header">
        <h1>Browse Anime</h1>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <div className="browse__content">
        <aside className="browse__sidebar">
          <div className="filters-section">
            <h3>Filters</h3>
            <button className="clear-filters" onClick={clearFilters}>
              Clear All
            </button>
          </div>

          <div className="filter-group">
            <h4>Status</h4>
            <div className="filter-options">
              {statusOptions.map(status => (
                <button
                  key={status}
                  className={`filter-option ${selectedStatus === status ? 'active' : ''}`}
                  onClick={() => setSelectedStatus(status)}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h4>Type</h4>
            <div className="filter-options">
              {typeOptions.map(type => (
                <button
                  key={type}
                  className={`filter-option ${selectedType === type ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type === 'all' ? 'All' : type}
                </button>
              ))}
            </div>
          </div>

          <GenreFilter
            genres={allGenres}
            selectedGenres={selectedGenres}
            onGenreToggle={handleGenreToggle}
          />
        </aside>

        <main className="browse__main">
          <div className="browse__results">
            <p className="results-count">
              Found {filteredAnime.length} anime
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            
            <div className="anime-grid">
              {currentAnime.map(anime => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>

            {currentAnime.length === 0 && (
              <div className="no-results">
                <h3>No anime found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Browse;