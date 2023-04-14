import { IRequest } from 'itty-router'
import THIRD_PARTY_API from '../../third-party-api-list'
import neteaseReqBody from '../../../lib/netease-request-body'

type NeteaseLyric = {
  lyric: string,
  source: 'netease'
}

export default async (request: IRequest): Promise<Response> => {
  const id: string = request.query.id as string

  if (!id) {
    return new Response('song id is required')
  }

  const params = {
    id: id,
    lv: -1,
    tv: -1
  }

  const res = await fetch(THIRD_PARTY_API.neteaseGetLyric, {
    method: 'POST',
    body: neteaseReqBody(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  const resJson: any = await res.json()
  let result: NeteaseLyric = {
    lyric: '',
    source: 'netease'
  }

  if (resJson.lrc && resJson.lrc.lyric) {
    result.lyric = resJson.lrc.lyric
  } else {
    console.log('----- error: search netease lyric -----')
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
