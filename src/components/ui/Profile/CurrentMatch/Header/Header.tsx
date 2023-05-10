import Image from "next/image";
import styles from "./Header.module.scss";
import { Hero, Match, MatchDetails, Player } from "@/types";
import { heroes } from "@/heroes";
import { copyToClipboard, matchDurationCalc } from "@/utils";

type Props = {
  match: MatchDetails;
  matchResult: number;
  radiant: Player[];
  dire: Player[];
};

const Header = ({ match, matchResult, radiant, dire }: Props) => {
  return (
    <header className={styles.header}>
      <p
        className={`${styles.result} ${matchResult ? styles.win : styles.lose}`}
      >
        {matchResult ? "WIN" : "LOSE"}
      </p>
      <div className={styles.teamsContainer}>
        {radiant.map((player: Player) => {
          const hero = heroes.find((hero) => hero.id === player.hero_id);
          return (
            <Image
              key={hero?.id}
              src={hero.icon}
              width={32}
              height={32}
              title={hero.localized_name}
              alt={hero.localized_name}
            />
          );
        })}
        <p className={styles.time}>{matchDurationCalc(match.duration)}</p>
        {dire.map((player: Player) => {
          const hero = heroes.find((hero) => hero.id === player.hero_id);
          return (
            <Image
              key={hero?.id}
              src={hero.icon}
              width={32}
              height={32}
              title={hero.localized_name}
              alt={hero.localized_name}
            />
          );
        })}
      </div>
      <p
        className={styles.id}
        title="Click to copy id to clipboard"
        onClick={() => copyToClipboard(match.match_id.toString())}
      >
        {match.match_id}
      </p>

      
    </header>
  );
};

export default Header;
