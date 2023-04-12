import Image from "next/image";
import styles from "./MatchItem.module.scss";
import { Match } from "@/types";
import lastMatchCalc from "@/utils";
import Link from "next/link";

type Props = {
  match: Match;
};

const MatchItem = ({ match }: Props) => {
  const player_slot = ("00000000" + match.player_slot.toString(2)).slice(-8);
  let win = false;
  if (
    (player_slot[0] === "0" && match.radiant_win) ||
    (player_slot[0] === "1" && match.radiant_win === false)
  )
    win = true;
  return (
    <Link
      className={`${styles.link} ${win ? styles.win : styles.lose}`}
      href={"#"}
    >
      <li className={styles.matchItem}>
        <p>{match.hero_id}</p>
      </li>
    </Link>
  );
};

export default MatchItem;
