import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { fetchAnimeImage } from "../anime-website/src/utils/jikanApi";

// ES modules equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the mock data (you'll need to adjust this based on your setup)
const mockAnimeList = [
  {
    id: 1,
    title: "Attack on Titan: Final Season",
    image: "",
    rating: 9.2,
    episodes: 16,
    status: "completed",
    type: "TV",
    genres: ["Action", "Drama", "Fantasy", "Horror"],
    synopsis: "After finally reaching the basement and learning the truth about the Titans, Eren Yeager and the Survey Corps find themselves in a new world of conflict and political intrigue.",
    season: "Winter",
    year: 2022
  },
  // ... include all your anime data here
  // For now, let's just use a few for testing
  {
    id: 2,
    title: "Demon Slayer: Kimetsu no Yaiba",
    image: "",
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
    image: "",
    rating: 8.8,
    episodes: 24,
    status: "ongoing",
    type: "TV",
    genres: ["Action", "Supernatural", "Horror"],
    synopsis: "Yuji Itadori joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.",
    season: "Fall",
    year: 2023
  }
];

async function updateImages() {
  console.log("🔄 Fetching anime images from Jikan API...");
  console.log(`📝 Processing ${mockAnimeList.length} anime titles...`);

  const updatedAnimeList = [...mockAnimeList];

  for (let i = 0; i < updatedAnimeList.length; i++) {
    const anime = updatedAnimeList[i];
    console.log(`\n${i + 1}/${updatedAnimeList.length}: Fetching "${anime.title}"...`);
    
    const image = await fetchAnimeImage(anime.title);
    
    if (image) {
      updatedAnimeList[i] = {
        ...anime,
        image: image
      };
      console.log(`✅ Updated: ${anime.title}`);
    } else {
      console.warn(`⚠️ No image found for: ${anime.title}`);
      // Keep the original data but log the issue
    }

    // Progress indicator
    const progress = ((i + 1) / updatedAnimeList.length * 100).toFixed(1);
    console.log(`📊 Progress: ${progress}%`);
  }

  const outputPath = path.resolve(__dirname, "../src/data/mockAnimeUpdated.json");
  
  // Create directory if it doesn't exist
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(updatedAnimeList, null, 2));
  console.log(`\n🎉 Done! Saved updated file to ${outputPath}`);
  console.log(`📁 File contains ${updatedAnimeList.length} anime entries`);
}

// Run the script
updateImages().catch(console.error);