import { IRequest } from 'itty-router'
import uploadSong from './upload'

export default async (request: IRequest, env: Env): Promise<Response> => {
  const songInfo = await request.json()

  // check if exist
  const queriedSongInfo = await getSongInfo(songInfo.id, env)
  if (queriedSongInfo !== null) {
    return new Response(JSON.stringify(queriedSongInfo), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  }

  await uploadSong(songInfo.id, `${songInfo.artist}_${songInfo.name}.mp3`, env)
  const id = await insertData(songInfo, env)
  
  const result: StorageSong = {
    id: id,
    name: songInfo.name,
    artist: songInfo.artist,
    duration: songInfo.duration,
    lyric: songInfo.lyric,
    origin_id: songInfo.origin_id,
    source: 'storage'
  }

  return Response.json(result)
}

const getSongInfo = async (id: number, env: Env) => {
  const data: D1Result = await env.DB.prepare(
    `
      SELECT *
      FROM songs
      WHERE origin_id = ?
    `
  )
  .bind(id)
  .first()

  return data;
}

const insertData = async (songInfo: NeteaseSong, env: Env) => {
  const result: D1Result = await env.DB.prepare(
    `
    INSERT INTO songs (name, artist, url, source, duration, lyric, origin_id)
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)
    `
  )
  .bind(
    songInfo.name,
    songInfo.artist,
    `https://music.twan.life/song/get?key=${songInfo.artist}_${songInfo.name}.mp3`,
    songInfo.source,
    songInfo.duration,
    songInfo.lyric,
    songInfo.id
  )
  .run()

  return result.meta.last_row_id;
}
