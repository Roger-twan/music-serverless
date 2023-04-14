import { IRequest } from 'itty-router'
import THIRD_PARTY_API from '../../third-party-api-list'
import neteaseReqBody from '../../../lib/netease-request-body'
import neteaseDataParser from '../../../lib/netease-data-parser'

type NeteaseSong = {
  id: number,
  name: string,
  artist: string,
  duration: number,
  source: 'netease'
}

type NeteaseSearchResult = {
  result: Array<NeteaseSong> | undefined
}

export default async (request: IRequest): Promise<Response> => {
  const keywords: string = request.query.keywords as string
  const page: number = request.query.page ? Number(request.params.page) : 0

  if (!keywords) {
    return new Response('keywords is required')
  }

  const params = {
    s: keywords,
    type: 1,
    limit: 6,
    offset: 5 * (page > 1 ? page : 0)
  }

  const res = await fetch(THIRD_PARTY_API.neteaseSearchSongs, {
    method: 'POST',
    body: neteaseReqBody(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  const resJson: any = await res.json()
  let result: NeteaseSearchResult = {
    result: []
  }

  if (resJson.abroad) {
    resJson.result = neteaseDataParser(resJson.result)
  }

  if (resJson.result && resJson.result.songs && resJson.result.songs.length) {
    resJson.result.songs.forEach((song: any) => {
      result.result?.push({
        id: song.id,
        name: song.name,
        artist: song.ar[0].name,
        duration: song.dt,
        source: 'netease'
      })
    })
  } else {
    console.log('----- error: search netease song -----')
    console.log('request params:')
    console.log(params)
    console.log('response:')
    console.log(resJson)
    console.log('----- end -----')
  }

  return new Response(JSON.stringify(result), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
