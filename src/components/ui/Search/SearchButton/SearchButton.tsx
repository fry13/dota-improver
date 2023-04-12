import Image from "next/image";
import styles from "./SearchButton.module.scss";

type Props = {
  submitHandler: Function;
};

const SearchButton = ({ submitHandler }: Props) => {
  return (
    <button
      className={styles.searchButton}
      type="submit"
      onClick={() => submitHandler()}
    >
      Search
    </button>
  );
};

export default SearchButton;
