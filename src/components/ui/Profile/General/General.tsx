import Image from "next/image";
import styles from "./General.module.scss";
import { GeneralProfile } from "@/types";
import Rank from "../Rank/Rank";
import Link from "next/link";

type Props = {
  data: GeneralProfile;
};

const General = ({ data }: Props) => {
  return (
    <div className={styles.general}>
      <div>
        <div>
          <Rank rank={data.rank_tier} />
          <Image
            className={styles.avatar}
            src={data.profile.avatarfull}
            width={64}
            height={64}
            alt=""
          ></Image>
          <p className={styles.name}>{data.profile.personaname}</p>
        </div>
        <div>
          <Link
            href={`https://www.dotabuff.com/players/${data.profile.account_id}`}
            passHref
            target="_blank"
          >
            <Image
              src="/icons/dotabuff.ico"
              width={18}
              height={18}
              alt="Dotabuff profile"
            />
          </Link>
          <Link
            href={`https://steamcommunity.com/profiles/${data.profile.steamid}`}
            passHref
            target="_blank"
          >
            <Image
              src="/icons/steam.ico"
              width={18}
              height={18}
              alt="Steam profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default General;
