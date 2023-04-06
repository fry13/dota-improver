import SearchBox from "../ui/SearchBox/SearchBox";
import SearchButton from "../ui/SearchButton/SearchButton";
import styles from "./Search.module.scss";
import { User } from "../../types";
import { useState } from "react";
import ResultBox from "../ui/ResultBox/ResultBox";
const url = "https://api.opendota.com/api";

const Search = () => {
  const [searchRequest, setSearchRequest] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async (request: string) => {
    if (request.length > 2) {
      const res = await fetch(`${url}/search?q=${request}`);
      const data: User[] = await res.json();
      setUsers(data);
    }
  };

  const buttonHandler = () => {
    getUsers(searchRequest);
  };

  const inputHandler = (inputValue: string) => {
    setSearchRequest(inputValue);
  };

  return (
    <form className={styles.search}>
      <div className={styles.requestContainer}>
        <SearchBox inputHandler={inputHandler} />
        <SearchButton buttonHandler={buttonHandler} />
      </div>
      <ResultBox users={users} />
    </form>
  );
};

export default Search;
