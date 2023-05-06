import { IRequest } from 'itty-router'
import getStorageSong from '../../utils/get-storage-song'

export default async (request: IRequest, env: Env): Promise<Response> => {
  const params = await request.json()

  const queriedSongInfo: any = await getStorageSong(params.id, env)

  if (queriedSongInfo === null) {
    return new Response('Song not exist')
  }

  if (queriedSongInfo.like === 1) {
    await env.DB.prepare(
      `
        UPDATE songs
        SET like = 0
        WHERE id = ?
      `
    )
    .bind(params.id)
    .run()
  }

  return new Response('true')
}
