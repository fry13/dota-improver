import styles from "./Footer.module.scss";
import Copyright from "@/components/ui/Copyright/Copyright";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Copyright />
    </footer>
  );
};

export default Footer;
