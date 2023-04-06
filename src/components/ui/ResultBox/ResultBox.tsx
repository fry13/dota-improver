import { useState } from "react";
import Image from "next/image";
import styles from "./ResultBox.module.scss";
import { User } from "@/types";
import lastMatchCalc from "@/utils";
import ResultItem from "../ResultItem/ResultItem";

type Props = {
  users: User[];
};

const ResultBox = ({ users }: Props) => {
  return (
    <ul
      className={`${styles.resultBox} ${
        users.length < 1 ? styles.transparent : ""
      }`}
    >
      {users.map((user) => {
        return <ResultItem key={user.account_id} user={user} />;
      })}
    </ul>
  );
};

export default ResultBox;
