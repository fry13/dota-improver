import { Match } from "./types";

export function lastMatchCalc(date: string) {
  const dateDiff = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (Number.isNaN(dateDiff)) return "";
  if (dateDiff < 1) return "Last match: <1 day ago";
  else return `Last match: ${dateDiff} days ago`;
}

export function matchTimeCalc(date: number) {
  const realTime = new Date(date*1000);
  return `${realTime.getDate()}.${realTime.getMonth() < 10 ? "0" : ""}${realTime.getMonth()} ${realTime.getHours()}:${realTime.getMinutes() < 10 ? "0" : ""}${realTime.getMinutes()}`;
}

export function wlCalc (match: Match) {
  const player_slot = ("00000000" + match.player_slot.toString(2)).slice(-8);
  let win = false;
  if (
    (player_slot[0] === "0" && match.radiant_win) ||
    (player_slot[0] === "1" && match.radiant_win === false)
  )
    win = true;
  return win
}

export function matchDurationCalc (durationSec:number) {
  const duration_min = Math.floor(durationSec / 60);
  const duration_sec = durationSec - duration_min * 60;
  return `${duration_min < 10 ? "0" : ""}${duration_min}:${duration_sec < 10 ? "0" : ""}${duration_sec}`
}