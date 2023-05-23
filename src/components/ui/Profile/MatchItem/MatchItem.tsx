import Image from "next/image";
import styles from "./MatchItem.module.scss";
import { GeneralProfile, Hero, Match } from "@/utils/types";
import Link from "next/link";
import { matchDurationCalc, matchTimeCalc, wlCalc } from "@/utils/utils";
import constants from "@/utils/constants";
import heroesData from "@/data/heroes.json";
const heroes: Hero[] = Object.values(heroesData);

type Props = {
  match: Match;
  profile: GeneralProfile;
  clickHandler: Function;
};

const MatchItem = ({ match, profile, clickHandler }: Props) => {
  const hero = heroes.find((hero) => hero.id === match.hero_id);
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
          src={constants.CDNURL + hero!.icon}
          width={28}
          height={28}
          title={hero!.localized_name}
          alt={hero!.localized_name}
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
