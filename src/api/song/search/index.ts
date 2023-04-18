import { IRequest } from 'itty-router'
import fetchNeteaseSongs from './netease'
import fetchStorageSongs from './storage'

export const SEARCH_LIMIT: number = 6

export default async (request: IRequest, env: Env): Promise<Response> => {
  const keywords = request.query.keywords
  const source: string = request.query.source as string || 'storage'

  if (!keywords) {
    return new Response('keywords is required')
  }

  switch (source) {
    case 'storage':
      return fetchStorageSongs(request, env)
    case 'netease':
      return fetchNeteaseSongs(request)
    case 'qq':
      break
    default: break
  }

  return new Response('given source does not support')
}
