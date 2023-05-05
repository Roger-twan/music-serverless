import { IRequest } from 'itty-router'

export default async (request: IRequest, env: Env): Promise<Response> => {
  const key: string = request.query.key as string

  const object: R2ObjectBody | null = await env.BUCKET.get(key)
  if (object === null) {
    return new Response('Object not exist')
  }

  const headers = new Headers()
  object.writeHttpMetadata(headers)
  headers.set('etag', object.httpEtag)

  return new Response(object.body, {
    headers,
  });
}
