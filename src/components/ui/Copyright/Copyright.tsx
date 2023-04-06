import Link from "next/link";
import styles from "./Copyright.module.scss";

const Copyright = () => {
  return (
    <p className={styles.copyright}>
      Designed by{" "}
      <Link href="https://github.com/fry13" passHref target="_blank">
        frymustdie
      </Link>
    </p>
  );
};

export default Copyright;
