import Image from "next/image";
import styles from "./Header.module.scss";
import { Hero, Match, MatchDetails, Player } from "@/types";
import { heroes } from "@/heroes";
import { matchDurationCalc } from "@/utils";

type Props = {
  match: MatchDetails;
  matchResult: number;
};

const Header = ({ match, matchResult }: Props) => {
  return (
    <header>
      <p>{matchResult ? "WIN" : "LOSE"}</p>
      <p>{match.match_id}</p>
      {match.players.map((player: Player) => {
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
      <p>{matchDurationCalc(match.duration)}</p>
    </header>
  );
};

export default Header;
