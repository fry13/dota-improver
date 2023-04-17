import Image from "next/image";
import styles from "./FavHeroes.module.scss";
import { FavHero, Match } from "@/types";
import { wlCalc } from "@/utils";
import HeroItem from "./HeroItem/HeroItem";

type Props = {
  matches: Match[];
};

const FavHeroes = ({ matches }: Props) => {
  let lastHeroes: FavHero[] = [];
  matches.forEach((match) => {
    const index = lastHeroes.findIndex((hero) => hero.id === match.hero_id);
    if (index === -1) {
      if (wlCalc(match)) {
        lastHeroes.push({ id: match.hero_id, quantity: 1, w: 1, l: 0 });
      } else {
        lastHeroes.push({ id: match.hero_id, quantity: 1, w: 0, l: 1 });
      }
    } else {
      lastHeroes[index].quantity += 1;
      if (wlCalc(match)) lastHeroes[index].w += 1;
      else lastHeroes[index].l += 1;
    }
  });
  const favHeroes = lastHeroes
    .sort(function (a, b) {
      return b.quantity - a.quantity;
    })
    .slice(0, 3);
  return (
    <div className={styles.favHeroes}>
      <ul>
        {favHeroes.map((hero) => {
          return <HeroItem key={hero.id} favHero={hero} />;
        })}
      </ul>
    </div>
  );
};

export default FavHeroes;
