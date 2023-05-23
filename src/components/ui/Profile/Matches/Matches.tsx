import Image from "next/image";
import styles from "./Matches.module.scss";
import { ReactNode } from "react";
import MatchList from "../MatchList/MatchList";
import { GeneralProfile, Match } from "@/utils/types";

type Props = {
  data: Match[];
  profile: GeneralProfile;
  clickHandler: Function;
};

const Matches = ({ data, profile, clickHandler }: Props) => {
  return (
    <div className={styles.matches}>
      <MatchList profile={profile} matches={data} clickHandler={clickHandler} />
    </div>
  );
};

export default Matches;
