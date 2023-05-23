import Image from "next/image";
import styles from "./Winrate.module.scss";
import { FavHero, Match, WinLose } from "@/utils/types";
import { wlCalc } from "@/utils/utils";
import { useEffect, useState } from "react";

type Props = {
  matches: Match[];
  wl: WinLose;
};

const Winrate = ({ matches, wl }: Props) => {
  const [allTimeWinrate, setAllTimeWinrate] = useState(0);
  const [lastMatchesWinrate, setLastMatchesWinrate] = useState(0);
  useEffect(() => {
    let lastWins = 0;
    matches.forEach((match) => {
      if (wlCalc(match)) lastWins += 1;
    });
    setAllTimeWinrate(
      parseInt(((wl.win / (wl.win + wl.lose)) * 100).toFixed(1))
    );
    setLastMatchesWinrate(
      parseInt(((lastWins / (matches.length + 1)) * 100).toFixed(1))
    );
  }, [matches, wl]);

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
