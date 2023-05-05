import { Router, IRequest } from 'itty-router'
import searchSong from './api/song/search'
import syncSong from './api/song/sync'
import getSong from './api/song/get'
import getLyric from './api/lyric/get'

const router = Router()

router
	.get('/song/search', searchSong)
	.post('/song/sync', syncSong)
	.get('/song/get', getSong)
	.get('/lyric/get', getLyric)
	.all('*', () => new Response('404', { status: 404 }))

export default {
  fetch: (request: IRequest, env: Env, content: any) => router.handle(request, env, content)
}
