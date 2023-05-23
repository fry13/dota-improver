import Image from "next/image";
import styles from "./CurrentMatch.module.scss";
import {
  GeneralProfile,
  Hero,
  MatchDetails,
  Player,
} from "@/utils/types";
import { useEffect, useState } from "react";
import heroesData from '@/data/heroes.json';
import MainStats from "./MainStats/MainStats";
import Header from "./Header/Header";
import ExpandableBlock from "./ExpandableBlock/ExpandableBlock";
import Table from "./Table/Table";
import constants from "@/utils/constants";
const heroes: Hero[] = Object.values(heroesData);

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
    const detailedMatchRes = await fetch(`${constants.REQURL}/matches/${matchId}`);
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
        <h4 className={styles.radiantTitle}>Radiant team</h4>
        <Table team={radiant} />
        <h4 className={styles.direTitle}>Dire team</h4>
        <Table team={dire} />
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
