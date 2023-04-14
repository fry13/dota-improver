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