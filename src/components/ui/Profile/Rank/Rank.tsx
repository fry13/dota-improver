import Image from "next/image";
import styles from "./Rank.module.scss";

type Props = {
  rank: number;
};

const Rank = ({ rank }: Props) => {
  const rankStr = rank.toString();
  return (
    <div className={styles.rank}>
      <Image
        src={`/medals/medal_${rankStr[0]}.png`}
        width={128}
        height={128}
        alt=""
      />
      <Image
        src={`/medals/star_${rankStr[1]}.png`}
        width={128}
        height={128}
        alt=""
      />
    </div>
  );
};

export default Rank;
