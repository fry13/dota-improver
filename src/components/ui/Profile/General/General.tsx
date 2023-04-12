import Image from "next/image";
import styles from "./General.module.scss";
import { GeneralProfile } from "@/types";

type Props = {
  data: GeneralProfile;
};

const General = ({ data }: Props) => {
  return (
    <div className={styles.general}>
      <div>
        <p>{data.rank_tier}</p>
        <Image
          className={styles.avatar}
          src={data.profile.avatarfull}
          width={64}
          height={64}
          alt=""
        ></Image>
        <p className={styles.name}>{data.profile.personaname}</p>
      </div>
    </div>
  );
};

export default General;
