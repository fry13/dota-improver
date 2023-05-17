import Image from "next/image";
import styles from "./MainStats.module.scss";
import { Hero, Player } from "@/types";
import { heroes } from "@/heroes";

type Props = {
  player: Player;
};

const MainStats = ({ player }: Props) => {
  const hero: Hero =
    heroes.find((hero) => hero.id === player.hero_id) ?? heroes[0];

  return (
    <>
      <div className={styles.container}>
        <div>
          <Image
            src={hero.icon}
            width={40}
            height={40}
            alt={hero.localized_name}
          ></Image>
          <h3 className={styles.heroName}>{hero.localized_name}</h3>
        </div>
        <p className={styles.kda}>
          {player.kills}/{player.deaths}/{player.assists}
        </p>
      </div>
      <div>
        <p>Hero damage: {player.hero_damage}</p>
        <p>Hero healing: {player.hero_healing}</p>
        <p>Building damage: {player.tower_damage}</p>
        <p>Net worth: {player.net_worth}</p>
        <p>GPM: {player.gold_per_min}</p>
        <p>XPM: {player.xp_per_min}</p>
        <p>Last hits: {player.last_hits}</p>
        <p>Denies: {player.denies}</p>
      </div>
    </>
  );
};

export default MainStats;
