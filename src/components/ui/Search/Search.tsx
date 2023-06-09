import SearchBox from "./SearchBox/SearchBox";
import SearchButton from "./SearchButton/SearchButton";
import styles from "./Search.module.scss";
import { User } from "../../../utils/types";
import { useState } from "react";
import ResultBox from "./ResultBox/ResultBox";
import Preloader from "../Preloader/Preloader";
import constants from "@/utils/constants";

const Search = () => {
  const [searchRequest, setSearchRequest] = useState<string>("");
  const [preloader, setPreloader] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async (request: string) => {
    if (request.length > 2) {
      setPreloader(true);
      const res = await fetch(`${constants.REQURL}/search?q=${request}`);
      const data: User[] = await res.json();
      let filteredData: User[] = [];
      data.forEach((user) => {
        if (user.last_match_time) filteredData.push(user);
      });
      setUsers(filteredData);
      setPreloader(false);
    }
  };

  const submitHandler = () => {
    getUsers(searchRequest);
  };

  const inputHandler = (inputValue: string) => {
    setSearchRequest(inputValue);
  };

  return (
    <form
      className={styles.search}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.requestContainer}>
        <SearchBox inputHandler={inputHandler} />
        <SearchButton submitHandler={submitHandler} />
      </div>
      <Preloader visible={preloader} />
      <ResultBox visible={preloader} users={users} />
    </form>
  );
};

export default Search;
