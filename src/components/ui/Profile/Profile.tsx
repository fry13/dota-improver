import Image from "next/image";
import styles from "./Profile.module.scss";
import { GeneralProfile, Match, MatchDetails, User, WinLose } from "@/types";
import General from "./General/General";
import Block from "../Block/Block";
import Matches from "./Matches/Matches";
import CurrentMatch from "./CurrentMatch/CurrentMatch";

type Props = {
  profile: GeneralProfile;
  matches: Match[];
  wl: WinLose;
};

const Profile = ({ profile, matches, wl }: Props) => {
  return (
    <div className={styles.profile}>
      <Block area="profile" name="Profile">
        <General data={profile} matches={matches} wl={wl} />
      </Block>
      <Block area="matches" name="Recent ranked matches">
        <Matches profile={profile} data={matches} />
      </Block>
      <Block area="selected" name="Selected match">
        <CurrentMatch user={profile} lastMatch={matches[0]} />
      </Block>
    </div>
  );
};

export default Profile;
