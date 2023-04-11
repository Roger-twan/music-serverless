import { IRequest } from 'itty-router'
import fetchNeteaseSongs from './netease'

export default async (request: IRequest): Promise<Response> => {
  const keywords = request.query.keywords
  const source: string = request.query.source as string || 'storage'

  if (!keywords) {
    return new Response('keywords is required')
  }

  switch (source) {
    case 'storage':
      break
    case 'netease':
      return fetchNeteaseSongs(request)
    case 'qq':
      break
    default: break
  }

  return new Response('given source does not support')
}
