import { useState } from "react";
import Image from "next/image";
import styles from "./ResultBox.module.scss";
import { User } from "@/utils/types";
import ResultItem from "../ResultItem/ResultItem";

type Props = {
  users: User[];
  visible: boolean;
};

const ResultBox = ({ users, visible }: Props) => {
  return (
    <ul
      className={`${styles.resultBox} ${
        users.length < 1 || visible ? styles.transparent : ""
      }`}
    >
      {users.map((user) => {
        return <ResultItem key={user.account_id} user={user} />;
      })}
    </ul>
  );
};

export default ResultBox;
