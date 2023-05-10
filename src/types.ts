export type User = {
  account_id: number,
  avatarfull: string,
  personaname: string,
  last_match_time: string,
  similarity: number
};

type ShortProfile = {
  account_id: number,
  steamid: string,
  personaname: string,
  avatarfull: string,
  profileurl: string
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

export type Hero = {
  id: number,
  localized_name: string,
  primary_attr: string,
  attack_type: string,
  icon: string
}

export type FavHero = {
  id: number,
  quantity: number,
  w: number,
  l: number
};

export type WinLose = {
  win: number,
  lose: number
}

export type MatchDetails = {
  match_id: number,
  barracks_status_dire: number,
  barracks_status_radiant: number,
  cluster: number,
  dire_score: number,
  duration: number,
  first_blood_time: number,
  game_mode: number,
  lobby_type: number,
  match_seq_num: number,
  objectives: { },
  picks_bans: { },
  radiant_gold_adv: { },
  radiant_score: number,
  radiant_win: boolean,
  radiant_xp_adv: { },
  start_time: number,
  teamfights: { },
  tower_status_dire: number,
  tower_status_radiant: number,
  players: [],
  patch: number,
  region: number,
  throw?: number,
  comeback?: number,
  loss: number,
  win: number,
}

export type Player = {
  match_id: number,
  player_slot: number,
  ability_upgrades_arr: [],
  ability_uses: { },
  ability_targets: { },
  damage_targets: { },
  account_id: number,
  actions: { },
  additional_units: { },
  assists: number,
  backpack_0: number,
  backpack_1: number,
  backpack_2: number,
  buyback_log: [],
  camps_stacked: number,
  creeps_stacked: number,
  damage: { },
  damage_inflictor: { },
  damage_inflictor_received: { },
  damage_taken: { },
  deaths: number,
  denies: number,
  dn_t: [],
  gold: number,
  gold_per_min: number,
  gold_reasons: { },
  gold_spent: number,
  gold_t: [],
  hero_damage: number,
  hero_healing: number,
  hero_hits: { },
  hero_id: number,
  item_0: number,
  item_1: number,
  item_2: number,
  item_3: number,
  item_4: number,
  item_5: number,
  item_uses: { },
  kill_streaks: { },
  killed: { },
  killed_by: { },
  kills: number,
  kills_log: [],
  lane_pos: { },
  last_hits: number,
  leaver_status: number,
  level: number,
  lh_t: [],
  life_state: { },
  max_hero_hit: { },
  multi_kills: { },
  net_worth: string,
  obs: { },
  obs_left_log: [],
  obs_log: [],
  obs_placed: number,
  party_id: number,
  permanent_buffs: [],
  pings: number,
  purchase: { },
  purchase_log:  [],
  rune_pickups: number,
  runes:{},
  runes_log: [],
  sen: { },
  sen_left_log: [],
  sen_log: [],
  sen_placed: number,
  stuns: number,
  times: [],
  tower_damage: number,
  xp_per_min: number,
  xp_reasons: { },
  xp_t: [],
  personaname: string,
  name: string,
  last_login: Date,
  radiant_win: true,
  start_time: number,
  duration: number,
  cluster: number,
  lobby_type: number,
  game_mode: number,
  patch: number,
  region: number,
  isRadiant: true,
  win: number,
  lose: number,
  total_gold: number,
  total_xp: number,
  kills_per_min: number,
  kda: number,
  abandons: number,
  neutral_kills: number,
  tower_kills: number,
  courier_kills: number,
  lane_kills: number,
  hero_kills: number,
  observer_kills: number,
  sentry_kills: number,
  roshan_kills: number,
  necronomicon_kills: number,
  ancient_kills: number,
  buyback_count: number,
  observer_uses: number,
  sentry_uses: number,
  lane_efficiency: number,
  lane_efficiency_pct: number,
  lane: number,
  lane_role: number,
  is_roaming: true,
  purchase_time: { },
  first_purchase_time: { },
  item_win: { },
  item_usage: { },
  purchase_tpscroll: { },
  actions_per_min: number,
  life_state_dead: number,
  rank_tier: number,
  benchmarks: {  }
}