const NETEASE_PREFIX = 'https://music.163.com/weapi'
const TON_ZHON_PREFIX = 'https://music-api.tonzhon.com'

const THIRD_PARTY_API = {
  neteaseSearchSongs: TON_ZHON_PREFIX + '/search/n/',
  neteaseGetSongSource: TON_ZHON_PREFIX + '/song_file/',
  neteaseGetLyric: NETEASE_PREFIX + '/song/lyric',
}

export default THIRD_PARTY_API;
