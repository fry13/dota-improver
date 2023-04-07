import Image from "next/image";
import styles from "./Profile.module.scss";
import { GeneralProfile, User } from "@/types";
import General from "../General/General";

type Props = {
  data: GeneralProfile;
};

const Profile = ({ data }: Props) => {
  console.log(data);
  return (
    <div className={styles.profile}>
      <General data={data} />
    </div>
  );
};

export default Profile;
