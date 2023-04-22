import { IRequest } from 'itty-router'
import THIRD_PARTY_API from '../../third-party-api-list'
import { SEARCH_LIMIT } from '.'

type NeteaseSong = {
  id: number,
  name: string,
  artist: string,
  duration: number,
  url: string
  source: 'netease'
}

type NeteaseSearchResult = {
  result: Array<NeteaseSong> | undefined
}

export default async (request: IRequest): Promise<Response> => {
  const keywords: string = request.query.keywords as string
  const page: string = request.query.page ? request.query.page.toString() : '1'

  if (!keywords) {
    return new Response('keywords is required')
  }

  if (Number(page) < 1) {
    return new Response('invalid page')
  }

  const params = {
    keyword: keywords,
    limit: SEARCH_LIMIT.toString(),
    page: page,
    platform: 'netease',
  }

  const res = await fetch(THIRD_PARTY_API.neteaseSearchSongs + new URLSearchParams(params), {
    method: 'GET'
  })
  const resJson: any = await res.json()
  let result: NeteaseSearchResult = {
    result: []
  }

  if (resJson.success && resJson.data && resJson.data.songs && resJson.data.songs.length) {
    resJson.data.songs.forEach((song: any) => {
      result.result?.push({
        id: song.originalId,
        name: song.name,
        artist: song.artists[0].name,
        duration: 0,
        url: 'http://music.163.com/song/media/outer/url?id=' + song.originalId + '.mp3',
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
