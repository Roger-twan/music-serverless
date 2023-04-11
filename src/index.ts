import { Router } from 'itty-router'
import searchSong from './api/song/search'

const router = Router()

router
	.get('/song/search', searchSong)
	.all('*', () => new Response('404', { status: 404 }))

export default {
	fetch: router.handle,
};
