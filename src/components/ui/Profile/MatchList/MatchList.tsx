import styles from "./MatchList.module.scss";
import { Match } from "@/types";
import MatchItem from "../MatchItem/MatchItem";
import { useEffect, useState } from "react";

type Props = {
  matches: Match[];
};

const MatchList = ({ matches }: Props) => {
  const [lastMatches, setLastMatches] = useState<Match[]>([]);
  useEffect(() => {
    setLastMatches(matches);
  }, [matches]);

  return (
    <ul className={styles.matchList}>
      {lastMatches.map((match) => {
        return <MatchItem key={match.match_id} match={match} />;
      })}
    </ul>
  );
};

export default MatchList;
