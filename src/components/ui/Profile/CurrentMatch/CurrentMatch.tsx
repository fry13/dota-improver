import Image from "next/image";
import styles from "./CurrentMatch.module.scss";
import { GeneralProfile, Match, MatchDetails, Player } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
const url = "https://api.opendota.com/api";

type Props = {
  user: GeneralProfile;
  lastMatch: Match;
};

const CurrentMatch = ({ user, lastMatch }: Props) => {
  const [currentMatch, setCurrentMatch] = useState<MatchDetails>();

  const getMatchById = async (matchId: string) => {
    const matchRes = await fetch(`${url}/matches/${matchId}`);
    const detailedMatch: MatchDetails = await matchRes.json();
    return detailedMatch;
  };

  // useEffect(() => {
  //   getMatchById(lastMatchId);
  // });

  useEffect(() => {
    const lastMatchId = lastMatch.match_id.toString();
    const params = new URLSearchParams(window.location.search);
    getMatchById(params.get("match")?.toString() ?? lastMatchId).then((match) =>
      setCurrentMatch(match)
    );
    // const player: Player = currentMatch?.players.find(
    //   (player) => player.account_id === user.profile.account_id
    // );
    // console.log(currentMatch?.players);
  }, [currentMatch, user]);

  if (currentMatch) {
    return (
      <div className={styles.currentMatch}>
        <p>{currentMatch.match_id}</p>
      </div>
    );
  } else return <p>Select match to detailed review</p>;
};

export default CurrentMatch;
