import { IRequest } from 'itty-router'

export default async (request: IRequest, env: Env): Promise<Response> => {
  const {
    id,
    name,
    artist,
    duration,
    source
  } = request.params

  const result = await env.DB.prepare(
    `INSERT INTO songs (name, artist, duration, source, origin_id) VALUES (${name || null}, ${artist || null}, ${duration || null}, ${source || null}, ${id || null})`
  ).all()

  return Response.json(result.success);
}
