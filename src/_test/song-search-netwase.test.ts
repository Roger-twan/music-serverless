import { unstable_dev } from 'wrangler';
import type { UnstableDevWorker } from 'wrangler';
import { describe, expect, it, beforeAll, afterAll } from 'vitest';

describe('Search netease song', () => {
	let worker: UnstableDevWorker;

	beforeAll(async () => {
		worker = await unstable_dev('src/index.ts', {
			experimental: { disableExperimentalWarning: true },
		});
	});

	afterAll(async () => {
		await worker.stop();
	});

	it('should return 404', async () => {
		const resp = await worker.fetch('/song/search?source=netease&keywords=amani');
		if (resp) {
			const text = JSON.stringify(await resp.json());
			expect(text).toContain('Amani');
		}
	});
});
