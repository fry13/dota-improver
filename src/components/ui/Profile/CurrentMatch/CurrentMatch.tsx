import Image from "next/image";
import styles from "./CurrentMatch.module.scss";
import { GeneralProfile, Hero, Match, MatchDetails, Player } from "@/types";
import { useEffect, useState } from "react";
import { heroes } from "@/heroes";
import MainStats from "./MainStats/MainStats";
import Header from "./Header/Header";
const url = "https://api.opendota.com/api";

type Props = {
  user: GeneralProfile;
  currentMatchId: string;
};

const CurrentMatch = ({ user, currentMatchId }: Props) => {
  const [currentMatch, setCurrentMatch] = useState<MatchDetails>();
  const [player, setPlayer] = useState<Player>();
  

  const getMatchById = async (matchId: string) => {
    const detailedMatchRes = await fetch(`${url}/matches/${matchId}`);
    const detailedMatch: MatchDetails = await detailedMatchRes.json();
    return detailedMatch;
  };
  const findPlayer = (match: MatchDetails) => {
    const playersArr = match.players;
    const player = playersArr.find(
      (player: Player) => player.account_id === user.profile.account_id
    );
    console.log(player);
    setPlayer(player);
  };

  useEffect(() => {
    getMatchById(currentMatchId).then((match) => {
      setCurrentMatch(match);
      findPlayer(match);
    });
  }, [currentMatchId]);

  if (currentMatch) {
    return (
      <div className={styles.currentMatch}>
        <Header match={currentMatch} matchResult={player.win} />
        <MainStats player={player} />        
      </div>
    );
  } else return <p>Select match to detailed review</p>;
};

export default CurrentMatch;
