import Image from "next/image";
import styles from "./General.module.scss";
import { GeneralProfile, Match, WinLose } from "@/types";
import Rank from "../Rank/Rank";
import Socials from "../Socials/Socials";
import FavHeroes from "../FavHeroes/FavHeroes";
import Winrate from "../Winrate/Winrate";
import MiniBlock from "../../MiniBlock/MiniBlock";

type Props = {
  data: GeneralProfile;
  matches: Match[];
  wl: WinLose;
};

const General = ({ data, matches, wl }: Props) => {
  return (
    <div className={styles.general}>
      <div className={styles.header}>
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
        <Socials id={data.profile.steamid} />
      </div>
      <div className={styles.bottom}>
        <MiniBlock name="Favorite heroes">
          <FavHeroes matches={matches} />
        </MiniBlock>
        <MiniBlock name="Winrate">
          <Winrate matches={matches} wl={wl} />
        </MiniBlock>
      </div>
    </div>
  );
};

export default General;
