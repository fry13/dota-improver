import Image from "next/image";
import styles from "./Winrate.module.scss";
import { FavHero, Match, WinLose } from "@/types";
import { wlCalc } from "@/utils";

type Props = {
  matches: Match[];
  wl: WinLose;
};

const Winrate = ({ matches, wl }: Props) => {
  const allTimeWinrate = parseInt(
    ((wl.win / (wl.win + wl.lose)) * 100).toFixed(1)
  );
  let lastWins = 0;

  matches.forEach((match) => {
    if (wlCalc(match)) lastWins += 1;
  });
  const lastMatchesWinrate = parseInt(
    ((lastWins / (matches.length + 1)) * 100).toFixed(1)
  );
  return (
    <div className={styles.winrate}>
      <p>
        All time:{" "}
        <span className={`${allTimeWinrate >= 50 ? styles.win : styles.lose}`}>
          {allTimeWinrate}%
        </span>
      </p>
      <p>
        Last matches:{" "}
        <span
          className={`${lastMatchesWinrate >= 50 ? styles.win : styles.lose}`}
        >
          {lastMatchesWinrate}%
        </span>
      </p>
    </div>
  );
};

export default Winrate;
