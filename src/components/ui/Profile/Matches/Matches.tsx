import Image from "next/image";
import styles from "./Matches.module.scss";
import { ReactNode } from "react";
import MatchList from "../MatchList/MatchList";
import { Match } from "@/types";

type Props = {
  data: Match[];
};

const Matches = ({ data }: Props) => {
  return <div className={styles.matches}>
    <MatchList matches={data} />
  </div>;
};

export default Matches;
