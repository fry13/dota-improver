import Image from "next/image";
import styles from "./Preloader.module.scss";

type Props = {
  visible: boolean;
};

const Preloader = ({ visible }: Props) => {
  return (
    <Image
      className={`${styles.preloader} ${visible ? styles.visible : ""}`}
      src={"/preloader.gif"}
      width={64}
      height={64}
      alt="Loading..."
    />
  );
};

export default Preloader;
