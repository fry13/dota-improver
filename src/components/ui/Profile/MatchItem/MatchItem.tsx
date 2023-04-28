import Image from "next/image";
import styles from "./MatchItem.module.scss";
import { GeneralProfile, Hero, Match } from "@/types";
import { heroes } from "@/heroes";
import Link from "next/link";
import { matchTimeCalc, wlCalc } from "@/utils";

type Props = {
  match: Match;
  profile: GeneralProfile;
};

const MatchItem = ({ match, profile }: Props) => {
  const duration_min = Math.floor(match.duration / 60);
  const duration_sec = match.duration - duration_min * 60;
  const hero: Hero =
    heroes.find((hero) => hero.id === match.hero_id) || heroes[0];
  const url = `/players/${profile.profile.account_id}?match=${match.match_id}`;
  return (
    <li
      className={`${styles.matchItem}  ${
        wlCalc(match) ? styles.win : styles.lose
      }`}
    >
      <Link className={`${styles.link}`} href={url}>
        <Image
          src={hero.icon}
          width={24}
          height={24}
          alt={hero.localized_name}
        />
        <p>
          {match.kills}/{match.deaths}/{match.assists}
        </p>
        <p>
          {duration_min < 10 ? "0" : ""}
          {duration_min}:{duration_sec < 10 ? "0" : ""}
          {duration_sec}
        </p>
        <p>{matchTimeCalc(match.start_time)}</p>
      </Link>
    </li>
  );
};

export default MatchItem;
