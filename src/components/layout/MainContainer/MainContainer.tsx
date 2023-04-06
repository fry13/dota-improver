import { ReactNode } from "react";
import styles from "./MainContainer.module.scss";

type Props = {
  children: ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return <main className={styles.mainContainer}>{children}</main>;
};

export default MainContainer;
