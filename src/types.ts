export type User = {
  account_id: number,
  avatarfull: string,
  personaname: string,
  last_match_time: string,
  similarity: 0
};

type ShortProfile = {
  account_id: 0,
  personaname: "string",
  avatarfull: "string",
  profileurl: "string"
}

export type GeneralProfile = {
  rank_tier: number,
  profile: ShortProfile,
}

export type Match = {
  match_id: number,
  player_slot: number,
  radiant_win: boolean,
  duration: number,
  game_mode: number,
  lobby_type: number,
  hero_id: number,
  start_time: number,
  version: number,
  kills: number,
  deaths: number,
  assists: number,
  skill: number,
  average_rank: number,
  leaver_status: number,
  party_size: number
}