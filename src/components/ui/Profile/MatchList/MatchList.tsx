import { useState } from "react";
import Image from "next/image";
import styles from "./MatchList.module.scss";
import { Match } from "@/types";
import lastMatchCalc from "@/utils";
import MatchItem from "../MatchItem/MatchItem";

type Props = {
  matches: Match[];
};

const MatchList = ({ matches }: Props) => {
  console.log(matches[1].player_slot);
  console.log(("00000000" + matches[1].player_slot.toString(2)).slice(-8));
  return (
    <ul className={styles.matchList}>
      {matches.map((match) => {
        return <MatchItem key={match.match_id} match={match} />;
      })}
    </ul>
  );
};

export default MatchList;
