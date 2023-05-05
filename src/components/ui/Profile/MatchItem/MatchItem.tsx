import Image from "next/image";
import styles from "./MatchItem.module.scss";
import { GeneralProfile, Hero, Match } from "@/types";
import { heroes } from "@/heroes";
import Link from "next/link";
import { matchDurationCalc, matchTimeCalc, wlCalc } from "@/utils";

type Props = {
  match: Match;
  profile: GeneralProfile;
  clickHandler: Function;
};

const MatchItem = ({ match, profile, clickHandler }: Props) => {
  const hero: Hero =
    heroes.find((hero) => hero.id === match.hero_id) || heroes[0];
  const url = `/players/${profile.profile.account_id}?match=${match.match_id}`;
  return (
    <li
      className={`${styles.matchItem}  ${
        wlCalc(match) ? styles.win : styles.lose
      }`}
    >
      <Link
        className={`${styles.link}`}
        href={url}
        onClick={() => clickHandler(match.match_id)}
      >
        <Image
          src={hero.icon}
          width={28}
          height={28}
          alt={hero.localized_name}
        />
        <p>
          {match.kills}/{match.deaths}/{match.assists}
        </p>
        <p>{matchDurationCalc(match.duration)}</p>
        <p>{matchTimeCalc(match.start_time)}</p>
      </Link>
    </li>
  );
};

export default MatchItem;
