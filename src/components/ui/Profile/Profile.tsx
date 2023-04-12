import Image from "next/image";
import styles from "./Profile.module.scss";
import { GeneralProfile, Match, User } from "@/types";
import General from "./General/General";
import Block from "../Block/Block";
import Matches from "./Matches/Matches";

type Props = {
  profile: GeneralProfile;
  matches: Match[];
};

const Profile = ({ profile, matches }: Props) => {
  return (
    <div className={styles.profile}>
      <Block area="profile" name="Profile">
        <General data={profile} />
      </Block>
      <Block area="matches" name="Recent ranked matches">
        <Matches data={matches} />
      </Block>
      <Block area="selected" name="Selected game">
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </Block>
    </div>
  );
};

export default Profile;
