export interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  episodes: number;
  status: 'ongoing' | 'completed' | 'upcoming';
  type: 'TV' | 'Movie' | 'OVA';
  genres: string[];
  synopsis: string;
  season: string;
  year: number;
}

export interface Episode {
  id: number;
  animeId: number;
  number: number;
  title: string;
  duration: string;
}

export interface Character {
  id: number;
  name: string;
  image: string;
  role: string;
    animeId: number; // ✅ added field

}