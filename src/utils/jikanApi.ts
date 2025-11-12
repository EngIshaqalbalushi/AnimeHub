import axios from "axios";

const API_BASE = "https://api.jikan.moe/v1";

/**
 * Fetch an anime image by title using the Jikan API
 */
export async function fetchAnimeImage(title: string): Promise<string | null> {
  try {
    // Add delay to avoid rate limiting (4 requests per second)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const res = await axios.get(`${API_BASE}/anime`, {
      params: { 
        q: title, 
        limit: 1,
        order_by: "popularity"
      },
    });

    if (!res.data.data || res.data.data.length === 0) {
      console.warn(`⚠️ No anime found for: ${title}`);
      return null;
    }

    const anime = res.data.data[0];
    const imageUrl = anime?.images?.jpg?.large_image_url || anime?.images?.jpg?.image_url;
    
    if (!imageUrl) {
      console.warn(`⚠️ No image found for: ${title}`);
      return null;
    }

    console.log(`✅ Found image for: ${title}`);
    return imageUrl;
  } catch (error) {
    console.error(`❌ Failed to fetch image for ${title}:`, error);
    return null;
  }
}

/**
 * Fetch multiple anime images in batch
 */
export async function fetchAnimeImages(titles: string[]): Promise<Record<string, string | null>> {
  const results: Record<string, string | null> = {};
  
  for (const title of titles) {
    results[title] = await fetchAnimeImage(title);
  }
  
  return results;
}