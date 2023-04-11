import { Router, IRequest } from 'itty-router'
import searchSong from './api/song/search'

const router = Router()

router
	.get('/song/search', searchSong)
	.all('*', () => new Response('404', { status: 404 }))

export default {
  fetch: (request: IRequest, env: Env, content: any) => router.handle(request, env, content)
}
