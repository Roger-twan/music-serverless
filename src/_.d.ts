type Env = {
  DB: D1Database
  BUCKET: R2Bucket
}

type StorageSearchResult = {
  result: Array<StorageSong> | undefined
}

type StorageSong = {
  id: number,
  name: string,
  artist: string,
  duration: number,
  lyric: string,
  url?: string,
  origin_id: number,
  source: 'storage',
  like: int | null
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
