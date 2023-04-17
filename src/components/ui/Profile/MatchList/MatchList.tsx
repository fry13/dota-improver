import styles from "./MatchList.module.scss";
import { Match } from "@/types";
import MatchItem from "../MatchItem/MatchItem";

type Props = {
  matches: Match[];
};

const MatchList = ({ matches }: Props) => {
  return (
    <ul className={styles.matchList}>
      {matches.map((match) => {
        return <MatchItem key={match.match_id} match={match} />;
      })}
    </ul>
  );
};

export default MatchList;
