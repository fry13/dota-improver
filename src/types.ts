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