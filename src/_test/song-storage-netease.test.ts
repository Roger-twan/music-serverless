import { describe, expect, it } from 'vitest';

describe('Search storage song', () => {
	it('should contain test', async () => {
		const resp = await fetch('https://music.twan.life/song/search?keywords=test&source=storage');
		if (resp) {
			const text = JSON.stringify(await resp.json());
			expect(text).toContain('test');
		}
	}, 10000);
});
