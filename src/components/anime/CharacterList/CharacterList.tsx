import React from "react";
import type { Character } from "../../../types/anime";
import "./CharacterList.scss";

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="character-list">
      <h3 className="character-list__title">Characters</h3>
      <div className="character-list__grid">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img
              src={character.image}
              alt={character.name}
              className="character-card__image"
            />
            <div className="character-card__info">
              <h4 className="character-card__name">{character.name}</h4>
              <p className="character-card__role">{character.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
