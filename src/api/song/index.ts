import { IRequest } from 'itty-router';
import THIRD_PARTY_API from '../third-party-api-list';
import netEaseCrypto from '../../util/net-ease-crypto';

export default async (request: IRequest): Promise<Response> => {
  const page: number = request.params.page ? Number(request.params.page) : 0;
  const params = {
    s: '光阴的故事',
    type: 1,
    limit: 6,
    offset: 5 * (page > 1 ? page : 0)
  }
  console.log(request.headers)
  // const res = await fetch(THIRD_PARTY_API.netEaseSearchSongs, {
  //   method: 'POST',
  //   body: JSON.stringify(netEaseCrypto(params)),
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Host': 'music.163.com',
  //     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0',
  //     'Referer': 'https://music.163.com',
  //     'Accept': '*/*',
  //     'Accept-Encoding': 'gzip, deflate, br',
  //     'Cookie': 'NMTID=00OGZle59NIetxq-09JiIOPiOdIPOQAAAGHaFpLBQ',
  //     'Connection': 'keep-alive',
  //     'Access-Control-Allow-Origin': '*'
  //   },
  // })
  // console.log(request)
  // console.log(res.headers.get('Content-Type'))
  // console.log(await res.text())
  return new Response(JSON.stringify(Object.fromEntries(request.headers)))
}
