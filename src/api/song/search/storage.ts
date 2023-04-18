import { IRequest } from 'itty-router'
import { SEARCH_LIMIT } from '.'

type StorageSong = {
  id: number,
  name: string,
  artist: string,
  duration: number,
  lyric: string,
  key: string
  source: 'storage'
}

type StorageSearchResult = {
  result: Array<StorageSong> | undefined
}

export default async (request: IRequest, env: Env): Promise<Response> => {
  const keywords: string = request.query.keywords as string
  const page: number = request.query.page ? Number(request.query.page) - 1 : 0

  if (!keywords) {
    return new Response('keywords is required')
  }

  if (page < 0) {
    return new Response('invalid page')
  }

  let result: StorageSearchResult = {
    result: []
  }
  const data: D1Result = await env.DB.prepare(
    `
      SELECT *
      FROM songs
      WHERE name LIKE '%${keywords}%' OR artist LIKE '%${keywords}%'
      LIMIT ${SEARCH_LIMIT} OFFSET ${SEARCH_LIMIT * page};
    `
  ).all()
  result.result = data.results as StorageSong[]

  return new Response(JSON.stringify(result), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
