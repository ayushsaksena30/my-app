import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';

interface GalleryItem {
	filename: string;
	type: 'image' | 'video';
	note?: string;
	date?: string;
	location?: string;
}

const manifestUrl = 'https://gallery-shield.asaksena100.workers.dev/manifest.json';

function isGalleryItem(item: unknown): item is GalleryItem {
	if (typeof item !== 'object' || item === null) return false;

	const value = item as Record<string, unknown>;
	return (
		typeof value.filename === 'string' &&
		(value.type === 'image' || value.type === 'video') &&
		(value.note === undefined || typeof value.note === 'string') &&
		(value.date === undefined || typeof value.date === 'string') &&
		(value.location === undefined || typeof value.location === 'string')
	);
}

export const GET: RequestHandler = async ({ fetch }) => {
	try {
		const response = await fetch(manifestUrl);
		if (!response.ok) {
			throw new Error(`Gallery manifest returned status ${response.status}`);
		}

		const manifest: unknown = await response.json();
		if (!Array.isArray(manifest) || !manifest.every(isGalleryItem)) {
			throw new Error('Gallery manifest has an invalid format');
		}

		return json(manifest, {
			headers: {
				'Cache-Control': 'public, max-age=0, s-maxage=30, stale-while-revalidate=60'
			}
		});
	} catch (error) {
		console.error('Error fetching gallery manifest:', error);
		return json({ error: 'Failed to fetch gallery manifest' }, { status: 502 });
	}
};
