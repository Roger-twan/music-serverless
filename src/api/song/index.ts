import { IRequest } from 'itty-router';
import THIRD_PARTY_API from '../third-party-api-list';

export default async (request: IRequest): Promise<Response> => {
  const res = await fetch(THIRD_PARTY_API.netEaseSearch, {
    method: 'POST',
    body: JSON.stringify({
      s: '哈哈',
      type: '1',
      limit: 30,
      offset: 0,
      total: true,
    }),
    headers: {
      crypto: 'eapi',
      cookie: request.cookie,
      proxy: request.proxy,
      url: '/api/cloudsearch/pc',
      realIP: request.realIP,
    }
  })
  res.text().then(data => console.log(data))
  // console.log(res)
  // console.log(res.text().)
  // console.log(res.json())
  return res
}
