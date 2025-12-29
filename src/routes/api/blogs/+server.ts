import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import { XMLParser } from 'fast-xml-parser';

interface MediumItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
}

export const GET: RequestHandler = async () => {
  try {
    const response = await fetch('https://medium.com/feed/@ayushsaksena', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
      },
    });

    if (!response.ok) {
      console.error(`Medium feed returned status ${response.status}: ${response.statusText}`);
      throw new Error(`Failed to fetch Medium feed: ${response.status} ${response.statusText}`);
    }

    const xml = await response.text();
    
    if (!xml || xml.trim().length === 0) {
      throw new Error('Medium feed returned empty response');
    }

    const parser = new XMLParser();
    const result = parser.parse(xml);
    
    // Handle case where item might be a single object or an array
    const rawItems = result.rss?.channel?.item;
    if (!rawItems) {
      console.error('No items found in RSS feed. Feed structure:', JSON.stringify(result, null, 2));
      return json([]);
    }
    
    const itemsArray = Array.isArray(rawItems) ? rawItems : [rawItems];
    const items = itemsArray.map((item: any) => ({
      title: item.title || 'Untitled',
      link: item.link || '',
      pubDate: item.pubDate || new Date().toISOString(),
      thumbnail: extractThumbnail(item),
    }));
    
    return json(items);
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    return json({ error: 'Failed to fetch Medium feed', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
};

function extractThumbnail(item: any): string | undefined {
  // 1. Check media:thumbnail (RSS standard)
  if (item['media:thumbnail']?.['@_url']) {
    return item['media:thumbnail']['@_url'];
  }
  
  // 2. Check media:content (RSS standard)
  if (item['media:content']?.['@_url']) {
    return item['media:content']['@_url'];
  }
  
  // 3. Check content:encoded (full article content)
  const contentEncoded = item['content:encoded'] || item.content?.encoded || item.content;
  if (contentEncoded) {
    const imgMatch = String(contentEncoded).match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }
  
  // 4. Check description
  if (item.description) {
    const imgMatch = String(item.description).match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }
  
  // 5. Check for Medium's featured image in content
  if (contentEncoded) {
    const mediumImgMatch = String(contentEncoded).match(/<figure[^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["']/i);
    if (mediumImgMatch && mediumImgMatch[1]) {
      return mediumImgMatch[1];
    }
  }
  
  return undefined;
}

