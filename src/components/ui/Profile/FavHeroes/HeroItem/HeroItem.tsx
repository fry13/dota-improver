import Image from "next/image";
import styles from "./HeroItem.module.scss";
import { FavHero, Hero } from "@/utils/types";
import constants from "@/utils/constants";
import heroesData from "@/data/heroes.json"
const heroes: Hero[] = Object.values(heroesData);

type Props = {
  favHero: FavHero;
};

const HeroItem = ({ favHero }: Props) => {
  const hero = heroes.find((hero) => hero.id === favHero.id);
  const winrate = parseInt(((favHero.w / favHero.quantity) * 100).toFixed(1));
  return (
    <li className={styles.heroItem}>
      <Image src={constants.CDNURL+hero!.icon} width={24} height={24} title={hero!.localized_name} alt={hero!.localized_name} />
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
