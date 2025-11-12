import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import SearchBar from '../../anime/SearchBar/SearchBar';
import './Header.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/browse', label: 'Browse' },
    { path: '/trending', label: 'Trending' },
    { path: '/popular', label: 'Popular' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/genres', label: 'Genres' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">🎬</span>
          AnimeHub
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__nav-link ${
                location.pathname === item.path ? 'header__nav-link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Search & Actions */}
        <div className="header__actions">
          {/* Search Button for Mobile */}
          <button
            className="header__search-toggle"
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>

          {/* Desktop Search Bar */}
          <div className="header__search">
            <SearchBar onSearch={handleSearch} placeholder="Search anime..." />
          </div>

          {/* User Actions */}
          <div className="header__user-actions">
            <Link to="/favorites" className="header__favorites">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="header__favorites-count">12</span>
            </Link>

            <Button variant="outline" size="sm" className="header__login">
              Login
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="header__search-overlay">
          <div className="header__search-mobile">
            <SearchBar onSearch={handleSearch} placeholder="Search anime..." />
            <button
              className="header__search-close"
              onClick={toggleSearch}
              aria-label="Close search"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <div className={`header__mobile-nav ${isMenuOpen ? 'header__mobile-nav--open' : ''}`}>
        <nav className="header__mobile-nav-content">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__mobile-nav-link ${
                location.pathname === item.path ? 'header__mobile-nav-link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="header__mobile-actions">
            <Button variant="primary" size="lg" className="header__mobile-login">
              Login
            </Button>
            <Link to="/favorites" className="header__mobile-favorites">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              My Favorites
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div 
          className="header__overlay"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;