import Image from "next/image";
import styles from "./Block.module.scss";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  name: string;
  area: string;
};

const Block = ({ children, name, area }: Props) => {
  return (
    <section style={{ gridArea: area }} className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.block}>{children}</div>
    </section>
  );
};

export default Block;
