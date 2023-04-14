import { unstable_dev } from 'wrangler';
import type { UnstableDevWorker } from 'wrangler';
import { describe, expect, it, beforeAll, afterAll } from 'vitest';

describe('Get netease lyric', () => {
	let worker: UnstableDevWorker;

	beforeAll(async () => {
		worker = await unstable_dev('src/index.ts', {
			experimental: { disableExperimentalWarning: true },
		});
	});

	afterAll(async () => {
		await worker.stop();
	});

	it('should return Beyond', async () => {
		const resp = await worker.fetch('/lyric/get?id=346083&source=netease');
		if (resp) {
			const text = JSON.stringify(await resp.json());
			expect(text).toContain('Beyond');
		}
	});
});
