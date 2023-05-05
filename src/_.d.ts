type Env = {
  DB: D1Database
  BUCKET: R2Bucket
}

type StorageSong = {
  id: number,
  name: string,
  artist: string,
  duration: number,
  lyric: string,
  origin_id: number,
  source: 'storage'
}

type NeteaseSong = {
  id: number,
  name: string,
  artist: string,
  duration?: number,
  url: string,
  source: 'netease'
  lyric?: string,
}
