import { IRequest } from 'itty-router'

export default async (request: IRequest, env: Env): Promise<Response> => {
  let result: StorageSearchResult = {
    result: []
  }
  const data: D1Result = await env.DB.prepare(
    `
      SELECT *
      FROM songs
      WHERE like = true
    `
  ).all()

  for (const item of data.results as StorageSong[]) {
    item.source = 'storage'
    result.result!.push(item)
  }

  return Response.json(result)
}
