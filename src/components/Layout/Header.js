import SearchBar from '../UI/SearchBar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["text-box"]}>
        <h1 className={styles["heading-primary"]}>
          <span className={styles["heading-primary-main"]}>The Riff Along</span>
        </h1>

        <h2 className={`${styles["heading-primary"]} ${styles.loader}`}>
          <span>M</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>&nbsp;</span>
          <span>T</span>
          <span>&nbsp;</span>
          <span>E</span>
          <span>&nbsp;</span>
          <span>R</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>Y</span>
          <span>&nbsp;</span>
          <span>O</span>
          <span>&nbsp;</span>
          <span>U</span>
          <span>&nbsp;</span>
          <span>R</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>&nbsp;</span>
          <span>O</span>
          <span>&nbsp;</span>
          <span>N</span>
          <span>&nbsp;</span>
          <span>G</span></h2>
          <SearchBar />
      </div>
      <div></div>
    </header>
  )
}

export default Header
