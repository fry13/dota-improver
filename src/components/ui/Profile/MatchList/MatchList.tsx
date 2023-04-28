import styles from "./MatchList.module.scss";
import { GeneralProfile, Match } from "@/types";
import MatchItem from "../MatchItem/MatchItem";
import { useEffect, useState } from "react";

type Props = {
  matches: Match[];
  profile: GeneralProfile
};

const MatchList = ({ matches, profile }: Props) => {
  const [lastMatches, setLastMatches] = useState<Match[]>([]);
  useEffect(() => {
    setLastMatches(matches);
  }, [matches]);

  return (
    <ul className={styles.matchList}>
      {lastMatches.map((match) => {
        return <MatchItem key={match.match_id} profile={profile} match={match} />;
      })}
    </ul>
  );
};

export default MatchList;
