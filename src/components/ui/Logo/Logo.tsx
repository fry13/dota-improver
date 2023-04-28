import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Powershot
      </Link>
    </div>
  );
};

export default Logo;
