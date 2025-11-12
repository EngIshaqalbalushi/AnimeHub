import type{ Anime, Episode, Character } from '../types/anime';
import downloadImg from '../assets/anime1.jpg';
import downloadImg2 from '../assets/anime2.jpg';
import downloadImg3 from '../assets/anime3.jpg';
import downloadImg4 from '../assets/anime4.jpg';
import downloadImg5 from '../assets/anime5.jpg';
import downloadImg6 from '../assets/anime6.jpg';
import downloadImg7 from '../assets/anime7.jpg';
import downloadImg8 from '../assets/anime8.webp';
import downloadImg9 from '../assets/anime9.webp';

export const mockAnimeList: Anime[] = [
  {
    id: 1,
    title: "Attack on Titan: Final Season",
    image: downloadImg,
    rating: 9.2,
    episodes: 16,
    status: "completed",
    type: "TV",
    genres: ["Action", "Drama", "Fantasy", "Horror"],
    synopsis: "After finally reaching the basement and learning the truth about the Titans, Eren Yeager and the Survey Corps find themselves in a new world of conflict and political intrigue.",
    season: "Winter",
    year: 2022
  },
  {
    id: 2,
    title: "Demon Slayer: Kimetsu no Yaiba",
    image: downloadImg2,
    rating: 8.7,
    episodes: 26,
    status: "completed",
    type: "TV",
    genres: ["Action", "Supernatural", "Fantasy"],
    synopsis: "After his family is brutally murdered and his sister turned into a demon, Tanjiro Kamado becomes a demon slayer to avenge his family and cure his sister.",
    season: "Spring",
    year: 2023
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    image: downloadImg3,
    rating: 8.8,
    episodes: 24,
    status: "ongoing",
    type: "TV",
    genres: ["Action", "Supernatural", "Horror"],
    synopsis: "Yuji Itadori joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.",
    season: "Fall",
    year: 2023
  },
  {
    id: 4,
    title: "My Hero Academia Season 6",
    image: downloadImg4,
    rating: 8.5,
    episodes: 25,
    status: "completed",
    type: "TV",
    genres: ["Action", "Superhero", "School"],
    synopsis: "Izuku Midoriya and his U.A. High School classmates face their biggest challenges yet as professional heroes in training.",
    season: "Fall",
    year: 2022
  },
  {
    id: 5,
    title: "Spy × Family",
    image: downloadImg5,
    rating: 9.0,
    episodes: 25,
    status: "ongoing",
    type: "TV",
    genres: ["Action", "Comedy", "Slice of Life"],
    synopsis: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife is a deadly assassin, and his daughter is a telepath!",
    season: "Spring",
    year: 2024
  },
  {
    id: 6,
    title: "Chainsaw Man",
    image: downloadImg6,
    rating: 8.6,
    episodes: 12,
    status: "completed",
    type: "TV",
    genres: ["Action", "Supernatural", "Horror"],
    synopsis: "Denji is a teenage boy living with a Chainsaw Devil named Pochita. He becomes a devil hunter to pay off his dead father's debts.",
    season: "Fall",
    year: 2022
  },
  {
    id: 7,
    title: "One Piece: Wano Country Arc",
    image:downloadImg7,
    rating: 9.1,
    episodes: 189,
    status: "ongoing",
    type: "TV",
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis: "The Straw Hat Pirates arrive in the isolated country of Wano, where they prepare to take down the shogun and free the country from oppression.",
    season: "Summer",
    year: 2023
  },
  {
    id: 8,
    title: "Vinland Saga Season 2",
    image: downloadImg8,
    rating: 9.3,
    episodes: 24,
    status: "completed",
    type: "TV",
    genres: ["Action", "Drama", "Historical"],
    synopsis: "Thorfinn's journey continues as he seeks meaning in a world without violence, working as a slave on a farm in Denmark.",
    season: "Winter",
    year: 2023
  },
  {
    id: 9,
    title: "Bleach: Thousand-Year Blood War",
    image: downloadImg9,
    rating: 9.4,
    episodes: 13,
    status: "ongoing",
    type: "TV",
    genres: ["Action", "Supernatural", "Fantasy"],
    synopsis: "Ichigo Kurosaki and the Soul Reapers face their greatest threat yet: the Wandenreich, an army of Quincies led by Yhwach.",
    season: "Fall",
    year: 2024
  },
  {
    id: 10,
    title: "Mob Psycho 100 III",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.9,
    episodes: 12,
    status: "completed",
    type: "TV",
    genres: ["Action", "Comedy", "Supernatural"],
    synopsis: "Shigeo Kageyama, also known as Mob, continues to navigate his psychic powers and personal growth in his final year of middle school.",
    season: "Fall",
    year: 2022
  },
  {
    id: 11,
    title: "Blue Lock",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.4,
    episodes: 24,
    status: "completed",
    type: "TV",
    genres: ["Sports", "Psychological", "Action"],
    synopsis: "After a disastrous defeat in the World Cup, Japan starts the Blue Lock program to create the world's greatest egotist striker.",
    season: "Fall",
    year: 2022
  },
  {
    id: 12,
    title: "Solo Leveling",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.7,
    episodes: 12,
    status: "ongoing",
    type: "TV",
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis: "In a world where hunters battle monsters from gates, the weakest hunter Sung Jin-Woo gets a second chance at life and power.",
    season: "Winter",
    year: 2024
  },
  {
    id: 13,
    title: "Frieren: Beyond Journey's End",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 9.2,
    episodes: 28,
    status: "completed",
    type: "TV",
    genres: ["Adventure", "Drama", "Fantasy"],
    synopsis: "An elf mage named Frieren embarks on a journey to understand humanity after her adventuring party defeats the Demon King.",
    season: "Fall",
    year: 2023
  },
  {
    id: 14,
    title: "Oshi no Ko",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.8,
    episodes: 11,
    status: "completed",
    type: "TV",
    genres: ["Drama", "Supernatural", "Mystery"],
    synopsis: "A doctor and his recently deceased patient are reborn as twins to a popular idol, navigating the dark side of the entertainment industry.",
    season: "Spring",
    year: 2023
  },
  {
    id: 15,
    title: "Heavenly Delusion",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.5,
    episodes: 13,
    status: "completed",
    type: "TV",
    genres: ["Mystery", "Sci-Fi", "Adventure"],
    synopsis: "In a post-apocalyptic Japan, two teenagers search for a mysterious place called Heaven while strange monsters roam the land.",
    season: "Spring",
    year: 2023
  },
  {
    id: 16,
    title: "Zom 100: Bucket List of the Dead",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.3,
    episodes: 12,
    status: "ongoing",
    type: "TV",
    genres: ["Action", "Comedy", "Horror"],
    synopsis: "A overworked office worker finds new freedom and purpose when a zombie apocalypse hits Japan.",
    season: "Summer",
    year: 2023
  },
  {
    id: 17,
    title: "The Eminence in Shadow",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.2,
    episodes: 20,
    status: "completed",
    type: "TV",
    genres: ["Action", "Comedy", "Fantasy"],
    synopsis: "A boy obsessed with becoming a mastermind in the shadows accidentally creates a real secret organization that fights a real cult.",
    season: "Fall",
    year: 2022
  },
  {
    id: 18,
    title: "Bocchi the Rock!",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.6,
    episodes: 12,
    status: "completed",
    type: "TV",
    genres: ["Comedy", "Music", "Slice of Life"],
    synopsis: "An extremely shy guitarist joins a band and tries to become popular while dealing with her social anxiety.",
    season: "Fall",
    year: 2022
  },
  {
    id: 19,
    title: "Cyberpunk: Edgerunners",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.7,
    episodes: 10,
    status: "completed",
    type: "TV",
    genres: ["Action", "Sci-Fi", "Drama"],
    synopsis: "A street kid trying to survive in Night City dreams of becoming an edgerunner - a mercenary outlaw also known as a cyberpunk.",
    season: "Fall",
    year: 2022
  },
  {
    id: 20,
    title: "Hell's Paradise",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 8.4,
    episodes: 13,
    status: "completed",
    type: "TV",
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis: "A ninja on death row is offered a pardon if he can retrieve the elixir of immortality from a mysterious island paradise.",
    season: "Spring",
    year: 2023
  }
];

export const mockEpisodes: Episode[] = [
  // Attack on Titan episodes
  { id: 1, animeId: 1, number: 1, title: "The Other Side of the Sea", duration: "23:45" },
  { id: 2, animeId: 1, number: 2, title: "Midnight Train", duration: "23:52" },
  { id: 3, animeId: 1, number: 3, title: "The Door of Hope", duration: "23:48" },
  { id: 4, animeId: 1, number: 4, title: "From One Hand to Another", duration: "23:51" },
  { id: 5, animeId: 1, number: 5, title: "Declaration of War", duration: "23:55" },
  
  // Demon Slayer episodes
  { id: 6, animeId: 2, number: 1, title: "Cruelty", duration: "23:40" },
  { id: 7, animeId: 2, number: 2, title: "Trainer Sakonji Urokodaki", duration: "23:42" },
  { id: 8, animeId: 2, number: 3, title: "Sabito and Makomo", duration: "23:45" },
  { id: 9, animeId: 2, number: 4, title: "Final Selection", duration: "23:48" },
  
  // Jujutsu Kaisen episodes
  { id: 10, animeId: 3, number: 1, title: "Ryomen Sukuna", duration: "23:50" },
  { id: 11, animeId: 3, number: 2, title: "For Myself", duration: "23:52" },
  { id: 12, animeId: 3, number: 3, title: "Girl of Steel", duration: "23:48" },
  
  // Spy × Family episodes
  { id: 13, animeId: 5, number: 1, title: "Operation Strix", duration: "23:45" },
  { id: 14, animeId: 5, number: 2, title: "Secure a Wife", duration: "23:42" },
  { id: 15, animeId: 5, number: 3, title: "The Prestigious School's Interview", duration: "23:50" },
  
  // Chainsaw Man episodes
  { id: 16, animeId: 6, number: 1, title: "Dog & Chainsaw", duration: "23:48" },
  { id: 17, animeId: 6, number: 2, title: "Arrival in Tokyo", duration: "23:45" },
  { id: 18, animeId: 6, number: 3, title: "The Power of Denji", duration: "23:52" },
  
  // Solo Leveling episodes
  { id: 19, animeId: 12, number: 1, title: "I'm Used to It", duration: "23:40" },
  { id: 20, animeId: 12, number: 2, title: "If I Had One More Chance", duration: "23:45" },
  { id: 21, animeId: 12, number: 3, title: "It's Like a Game", duration: "23:42" },
];

export const mockCharacters: Character[] = [
  // Attack on Titan characters
  { id: 1, name: "Eren Yeager", image: downloadImg, role: "Main Protagonist", animeId: 1 },
  { id: 2, name: "Mikasa Ackerman", image: "https://images.unsplash.com/photo-1560963732-31b9a91b4e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Character", animeId: 1 },
  { id: 3, name: "Armin Arlert", image: "https://images.unsplash.com/photo-1560963732-31b9a91b4e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Character", animeId: 1 },
  
  // Demon Slayer characters
  { id: 4, name: "Tanjiro Kamado", image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Protagonist", animeId: 2 },
  { id: 5, name: "Nezuko Kamado", image: "https://images.unsplash.com/photo-1560963732-31b9a91b4e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Character", animeId: 2 },
  { id: 6, name: "Zenitsu Agatsuma", image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Character", animeId: 2 },
  
  // Jujutsu Kaisen characters
  { id: 7, name: "Yuji Itadori", image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Protagonist", animeId: 3 },
  { id: 8, name: "Megumi Fushiguro", image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Character", animeId: 3 },
  { id: 9, name: "Nobara Kugisaki", image: "https://images.unsplash.com/photo-1560963732-31b9a91b4e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Character", animeId: 3 },
  
  // Spy × Family characters
  { id: 10, name: "Loid Forger", image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Protagonist", animeId: 5 },
  { id: 11, name: "Yor Forger", image: "https://images.unsplash.com/photo-1560963732-31b9a91b4e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Character", animeId: 5 },
  { id: 12, name: "Anya Forger", image: "https://images.unsplash.com/photo-1560963732-31b9a91b4e8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", role: "Main Character", animeId: 5 },
];

// Utility functions
export const getAnimeById = (id: number): Anime | undefined => {
  return mockAnimeList.find(anime => anime.id === id);
};

export const getEpisodesByAnimeId = (animeId: number): Episode[] => {
  return mockEpisodes.filter(episode => episode.animeId === animeId);
};

export const getCharactersByAnimeId = (animeId: number): Character[] => {
  return mockCharacters.filter(character => character.animeId === animeId);
};

export const getAnimeByGenre = (genre: string): Anime[] => {
  return mockAnimeList.filter(anime => anime.genres.includes(genre));
};

export const searchAnime = (query: string): Anime[] => {
  const lowerQuery = query.toLowerCase();
  return mockAnimeList.filter(anime => 
    anime.title.toLowerCase().includes(lowerQuery) ||
    anime.genres.some(genre => genre.toLowerCase().includes(lowerQuery)) ||
    anime.synopsis.toLowerCase().includes(lowerQuery)
  );
};

export const getTrendingAnime = (): Anime[] => {
  return [...mockAnimeList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
};

export const getRecentAnime = (): Anime[] => {
  return [...mockAnimeList]
    .sort((a, b) => b.year - a.year || b.id - a.id)
    .slice(0, 10);
};