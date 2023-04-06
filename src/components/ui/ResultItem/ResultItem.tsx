import Image from "next/image";
import styles from "./ResultItem.module.scss";
import { User } from "@/types";
import lastMatchCalc from "@/utils";

type Props = {
  user: User;
};

const ResultItem = ({ user }: Props) => {
  return (
    <li className={styles.resultItem}>
      <div>
        <Image width={48} height={48} src={user.avatarfull} alt="" />
        <p>{user.personaname}</p>
      </div>
      <p className={styles.lastMatch}>{lastMatchCalc(user.last_match_time)}</p>
    </li>
  );
};

export default ResultItem;
