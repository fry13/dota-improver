import Image from "next/image";
import styles from "./HeroItem.module.scss";
import { FavHero, Hero, Match } from "@/types";
import { heroes } from "@/heroes";

type Props = {
  favHero: FavHero;
};

const HeroItem = ({ favHero }: Props) => {
  const hero: Hero = heroes.find((hero) => hero.id === favHero.id) || heroes[0];
  const winrate = parseInt(((favHero.w / favHero.quantity) * 100).toFixed(1));
  return (
    <li className={styles.heroItem}>
      <Image src={hero.icon} width={24} height={24} alt={hero.localized_name} />
      <p title="Matches">M: {favHero.quantity}</p>
      <p title="Winrate">
        W:{" "}
        <span className={`${winrate >= 50 ? styles.win : styles.lose}`}>
          {winrate}%
        </span>
      </p>
    </li>
  );
};

export default HeroItem;
