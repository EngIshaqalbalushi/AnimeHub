import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import './SearchBar.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search anime...",
  initialValue = ""
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <Input
        type="text"  // Fixed: changed from "type" to "text"
        placeholder={placeholder}
        value={query}
        onChange={setQuery}
        className="search-bar__input"
      />
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;