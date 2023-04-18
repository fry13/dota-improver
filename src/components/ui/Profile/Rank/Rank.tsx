import Image from "next/image";
import styles from "./Rank.module.scss";
import { useEffect, useState } from "react";

type Props = {
  rank: number;
};

const Rank = ({ rank }: Props) => {
  const [rankStr, setRankStr] = useState("00");
  useEffect(() => {
    if (rank === null) {
      return;
    } else setRankStr(rank.toString());
  }, [rank]);
  return (
    <div className={styles.rank}>
      <Image
        src={`/medals/medal_${rankStr[0]}.png`}
        width={128}
        height={128}
        alt=""
      />
      <Image
        className={`${rankStr[1] === "0" ? styles.displayNone : ""}`}
        src={`/medals/star_${rankStr[1]}.png`}
        width={128}
        height={128}
        alt=""
      />
    </div>
  );
};

export default Rank;
