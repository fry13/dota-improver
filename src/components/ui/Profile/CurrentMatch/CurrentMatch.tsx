import Image from "next/image";
import styles from "./CurrentMatch.module.scss";
import { GeneralProfile, Hero, Match, MatchDetails, Player } from "@/types";
import { useEffect, useState } from "react";
import { heroes } from "@/heroes";
import MainStats from "./MainStats/MainStats";
import Header from "./Header/Header";
import ExpandableBlock from "./ExpandableBlock/ExpandableBlock";
const url = "https://api.opendota.com/api";

type Props = {
  user: GeneralProfile;
  currentMatchId: string;
};

const CurrentMatch = ({ user, currentMatchId }: Props) => {
  const [currentMatch, setCurrentMatch] = useState<MatchDetails>();
  const [player, setPlayer] = useState<Player>();
  const [radiant, setRadiant] = useState<Player[]>([]);
  const [dire, setDire] = useState<Player[]>([]);

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
      setRadiant(match.players.slice(0, 5));
      setDire(match.players.slice(5, 10));
    });
  }, [currentMatchId]);

  if (currentMatch) {
    return (
      <div className={styles.currentMatch}>
        <Header
          match={currentMatch}
          matchResult={player!.win}
          radiant={radiant}
          dire={dire}
        />
        <ExpandableBlock title="Summary">
          <MainStats player={player!} />
        </ExpandableBlock>
        <ExpandableBlock title="Lining">hi</ExpandableBlock>
        <ExpandableBlock title="Itemization">hi</ExpandableBlock>
        <ExpandableBlock title="Teamfights">hi</ExpandableBlock>
      </div>
    );
  } else return <p>Select match to detailed review</p>;
};

export default CurrentMatch;
