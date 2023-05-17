import Image from "next/image";
import styles from "./PlayerItems.module.scss";
import { Hero, Player } from "@/types";
import { heroes } from "@/heroes";

type Props = {
  player: Player;
};

const PlayerItems = ({ player }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.item0}>{player.item_0}</p>
      <p className={styles.item1}>{player.item_1}</p>
      <p className={styles.item2}>{player.item_2}</p>
      <p className={styles.item3}>{player.item_3}</p>
      <p className={styles.item4}>{player.item_4}</p>
      <p className={styles.item5}>{player.item_5}</p>
      <div className={styles.backpackWrapper}>
        <p>{player.backpack_0}</p>
        <p>{player.backpack_1}</p>
        <p>{player.backpack_2}</p>
      </div>
      <p className={styles.neutral}>{player.item_neutral}</p>
    </div>
  );
};

export default PlayerItems;
