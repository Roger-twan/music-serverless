import THIRD_PARTY_API from "../../third-party-api-list"

export default async (id: number, key: string, env: Env) => {
  const result: R2ObjectBody | null = await env.BUCKET.get(key)
  
  if (result === null) {
    const songSourceRes = await fetch(THIRD_PARTY_API.neteaseGetSongSource + 'n' + id)
    const songSource: any = await songSourceRes.json()
    const res = await fetch(songSource.data)
    await env.BUCKET.put(key, res.body, {
      httpMetadata: res.headers
    })
  }
}
