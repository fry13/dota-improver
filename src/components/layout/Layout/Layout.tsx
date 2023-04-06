import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import MainContainer from "../MainContainer/MainContainer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <MainContainer>
        {children}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Layout;
