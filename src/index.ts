import { Router, IRequest } from 'itty-router'
import searchSong from './api/song/search'
import syncSong from './api/song/sync'
import getSong from './api/song/get'
import getLyric from './api/lyric/get'
import getLikes from './api/likes/get'
import addLikes from './api/likes/add'
import removeLikes from './api/likes/remove'

const router = Router()

router
	.get('/song/search', searchSong)
	.get('/song/get', getSong)
	.post('/song/sync', syncSong)
	.get('/lyric/get', getLyric)
	.get('/likes/get', getLikes)
	.post('/likes/add', addLikes)
	.post('/likes/remove', removeLikes)
	.all('*', () => new Response('404', { status: 404 }))

export default {
  fetch: (request: IRequest, env: Env, content: any) => router.handle(request, env, content)
}
