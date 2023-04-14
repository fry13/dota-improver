import Image from "next/image";
import styles from "./MatchItem.module.scss";
import { Hero, Match } from "@/types";
import { heroes } from "@/heroes";
import Link from "next/link";
import { matchTimeCalc } from "@/utils";

type Props = {
  match: Match;
};

const MatchItem = ({ match }: Props) => {
  const duration_min = Math.floor(match.duration / 60);
  const duration_sec = match.duration - duration_min * 60;
  const player_slot = ("00000000" + match.player_slot.toString(2)).slice(-8);
  let win = false;
  if (
    (player_slot[0] === "0" && match.radiant_win) ||
    (player_slot[0] === "1" && match.radiant_win === false)
  )
    win = true;
  
  const hero:Hero = heroes.find((hero) => hero.id === match.hero_id) || heroes[0];
  

  return (
    <Link
      className={`${styles.link} ${win ? styles.win : styles.lose}`}
      href={"#"}
    >
      <li className={styles.matchItem}>
        <Image
          src={hero.icon}
          width={24}
          height={24}
          alt={hero.localized_name}
        ></Image>
        <p>
          {match.kills}/{match.deaths}/{match.assists}
        </p>
        <p>
          {duration_min < 10 ? "0" : ""}
          {duration_min}:{duration_sec < 10 ? "0" : ""}
          {duration_sec}
        </p>
        <p>{matchTimeCalc(match.start_time)}</p>
      </li>
    </Link>
  );
};

export default MatchItem;
