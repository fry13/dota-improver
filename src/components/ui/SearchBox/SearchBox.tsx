import { useState } from "react";
import styles from "./SearchBox.module.scss";

type Props = {
  inputHandler: Function;
};

const SearchBox = ({ inputHandler }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <input
      className={styles.searchBox}
      type="text"
      placeholder="SteamID or nickname"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        inputHandler(e.target.value);
      }}
      required
      minLength={3}
    />
  );
};

export default SearchBox;
