import { IRequest } from 'itty-router'

export default async (request: IRequest, env: Env): Promise<Response> => {
  const result: R2Object = await env.BUCKET.put('test', 'test')
  return new Response('Upload successfully')

  // const result: R2ObjectBody | null = await env.BUCKET.get('test');

  // if (result === null) {
  //   return new Response('Object Not Found', { status: 404 });
  // }

  // return new Response(result.body);
}
