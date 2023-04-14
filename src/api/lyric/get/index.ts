import { IRequest } from 'itty-router'
import fetchNeteaseLyric from './netease'

export default async (request: IRequest): Promise<Response> => {
  const keywords = request.query.id
  const source: string = request.query.source as string || 'storage'

  if (!keywords) {
    return new Response('song id is required')
  }

  switch (source) {
    case 'storage':
      break
    case 'netease':
      return fetchNeteaseLyric(request)
    case 'qq':
      break
    default: break
  }

  return new Response('given source does not support')
}
