import Image from "next/image";
import styles from "./Profile.module.scss";
import {
  GeneralProfile,
  Match,
  MatchDetails,
  User,
  WinLose,
} from "@/utils/types";
import General from "./General/General";
import Block from "../Block/Block";
import Matches from "./Matches/Matches";
import CurrentMatch from "./CurrentMatch/CurrentMatch";
import { useState } from "react";
import { useRouter } from "next/router";

type Props = {
  profile: GeneralProfile;
  matches: Match[];
  wl: WinLose;
};

const Profile = ({ profile, matches, wl }: Props) => {
  const router = useRouter();
  const [currentMatchId, setCurrentMatchId] = useState<string>(
    router.query.match?.toString() || matches[0].match_id.toString()
  );
  const setMatch = (matchId: string) => {
    setCurrentMatchId(matchId);
  };
  return (
    <div className={styles.profile}>
      <Block area="profile" name="Profile">
        <General data={profile} matches={matches} wl={wl} />
      </Block>
      <Block area="matches" name="Recent ranked matches">
        <Matches profile={profile} data={matches} clickHandler={setMatch} />
      </Block>
      <Block area="selected" name="Selected match">
        <CurrentMatch user={profile} currentMatchId={currentMatchId} />
      </Block>
    </div>
  );
};

export default Profile;
