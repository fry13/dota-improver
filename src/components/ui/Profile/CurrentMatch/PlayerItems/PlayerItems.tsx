import Image from "next/image";
import styles from "./PlayerItems.module.scss";
import { Hero, Player } from "@/types";
import { heroes } from "@/heroes";
import { items } from "@/items";

type Props = {
  player: Player;
};

const PlayerItems = ({ player }: Props) => {
  const findItems = (player: Player) => {
    const playerItemsIds = [
      player.item_0,
      player.item_1,
      player.item_2,
      player.item_3,
      player.item_4,
      player.item_5,
      player.backpack_0,
      player.backpack_1,
      player.backpack_2,
      player.item_neutral,
    ];
    const playerItems = playerItemsIds.map((itemId) => {
      if (itemId != 0) {
        return items.find((itemFromList) => itemFromList.id === itemId);
      } else return null;
    });
    const mainItems = playerItems.slice(0, 6);
    const backpackItems = playerItems.slice(6, 9);
    const neutralItem = playerItems[9];
    return { mainItems, backpackItems, neutralItem };
  };
  const finallyItems = findItems(player);

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        {finallyItems.mainItems.map((item, index) => {
          if (item) {
            return (
              <Image
                key={index}
                src={item!.img}
                width={30}
                height={22}
                className={styles.item}
                title={item!.name}
                alt={item!.name}
              />
            );
          } else {
            return <div key={index} className={styles.bgLarge}></div>;
          }
        })}
      </div>
      <div className={styles.backpackWrapper}>
        {finallyItems.backpackItems.map((item, index) => {
          if (item) {
            return (
              <Image
                key={index}
                src={item!.img}
                width={20}
                height={14}
                className={styles.item}
                title={item!.name}
                alt={item!.name}
              />
            );
          } else {
            return <div key={index} className={styles.bgSmall}></div>;
          }
        })}
      </div>
      {finallyItems.neutralItem ? (
        <Image
          src={finallyItems.neutralItem.img}
          width={44}
          height={32}
          className={styles.neutral}
          title={finallyItems.neutralItem.name}
          alt={finallyItems.neutralItem.name}
        />
      ) : (
        <div className={styles.bgRound}></div>
      )}
    </div>
  );
};

export default PlayerItems;
