import Image from "next/image";
import styles from "./ResultItem.module.scss";
import { User } from "@/utils/types";
import { lastMatchCalc } from "@/utils/utils";
import Link from "next/link";

type Props = {
  user: User;
};

const ResultItem = ({ user }: Props) => {
  return (
    <li className={styles.resultItem}>
      <Link className={styles.link} href={`/players/${user.account_id}`}>
        <div>
          <Image width={48} height={48} src={user.avatarfull} alt="" />
          <p>{user.personaname}</p>
        </div>
        <p className={styles.lastMatch}>
          {lastMatchCalc(user.last_match_time)}
        </p>
      </Link>
    </li>
  );
};

export default ResultItem;
