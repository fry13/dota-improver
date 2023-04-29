import Image from "next/image";
import styles from "./CurrentMatch.module.scss";
import { GeneralProfile, Match, MatchDetails, Player } from "@/types";
import { useEffect, useState } from "react";
const url = "https://api.opendota.com/api";

type Props = {
  user: GeneralProfile;
  currentMatchId: string;
};

const CurrentMatch = ({ user, currentMatchId }: Props) => {
  const [currentMatch, setCurrentMatch] = useState<MatchDetails>();

  const getMatchById = async (matchId: string) => {
    const detailedMatchRes = await fetch(`${url}/matches/${matchId}`);
    const detailedMatch: MatchDetails = await detailedMatchRes.json();
    return detailedMatch;
  };

  useEffect(() => {
    getMatchById(currentMatchId).then((match) => {
      setCurrentMatch(match);
    });

    // const player: Player = currentMatch?.players.find(
    //   (player) => player.account_id === user.profile.account_id
    // );
    // console.log(player);
  }, [currentMatchId]);

  if (currentMatch) {
    return (
      <div className={styles.currentMatch}>
        <p>{currentMatch.match_id}</p>
      </div>
    );
  } else return <p>Select match to detailed review</p>;
};

export default CurrentMatch;
