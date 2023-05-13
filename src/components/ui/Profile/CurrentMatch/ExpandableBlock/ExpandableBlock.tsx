import { ReactNode, useState } from "react";
import styles from "./ExpandableBlock.module.scss";

type Props = {
  title: string;
  children: ReactNode;
};

const ExpandableBlock = ({ title, children }: Props) => {
  const [expand, setExpand] = useState(false);

  return (
    <article className={`${styles.wrapper} ${expand ? styles.expand : ""}`}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        <button
          className={styles.button}
          onClick={() => setExpand((prevExpand) => !prevExpand)}
        >
          {expand ? "-" : "+"}
        </button>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </article>
  );
};

export default ExpandableBlock;
