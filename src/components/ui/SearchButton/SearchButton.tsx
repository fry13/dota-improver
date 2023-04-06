import Image from "next/image";
import styles from "./SearchButton.module.scss";

type Props = {
  buttonHandler: Function;
};

const SearchButton = ({ buttonHandler }: Props) => {
  return (
    <button
      className={styles.searchButton}
      type="button"
      onClick={() => buttonHandler()}
    >
      Search
    </button>
  );
};

export default SearchButton;
