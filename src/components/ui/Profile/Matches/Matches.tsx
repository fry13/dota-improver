import Image from "next/image";
import styles from "./Matches.module.scss";
import { ReactNode } from "react";
import MatchList from "../MatchList/MatchList";
import { GeneralProfile, Match } from "@/types";

type Props = {
  data: Match[];
  profile: GeneralProfile
};

const Matches = ({ data, profile }: Props) => {
  return <div className={styles.matches}>
    <MatchList profile={profile} matches={data} />
  </div>;
};

export default Matches;
