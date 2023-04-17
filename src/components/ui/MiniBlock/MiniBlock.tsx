import Image from "next/image";
import styles from "./MiniBlock.module.scss";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  name: string;
};

const Block = ({ children, name }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.miniBlock}>{children}</div>
    </div>
  );
};

export default Block;
