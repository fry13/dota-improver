import Image from "next/image";
import styles from "./Socials.module.scss";
import Link from "next/link";

type Props = {
  id: string;
};

const Socials = ({ id }: Props) => {
  return (
    <div className={styles.socials}>
      <Link
        href={`https://www.dotabuff.com/players/${id}`}
        passHref
        target="_blank"
      >
        <Image
          src="/icons/dotabuff.png"
          width={18}
          height={18}
          alt="Dotabuff profile"
          title="Dotabuff profile"
        />
      </Link>
      <Link
        href={`https://steamcommunity.com/profiles/${id}`}
        passHref
        target="_blank"
      >
        <Image
          src="/icons/steam.png"
          width={18}
          height={18}
          alt="Steam profile"
          title="Steam profile"
        />
      </Link>
    </div>
  );
};

export default Socials;
