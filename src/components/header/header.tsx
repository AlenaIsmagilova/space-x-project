import Logo from "../logo/logo";
import styles from "./header.module.css";

const Header = ({ handleClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <nav>
          <ul className={styles.linksContainer}>
            <li className={styles.item}>Главная</li>
            <li className={styles.item}>Технология</li>
            <li className={styles.item}>График полётов</li>
            <li className={styles.item}>Гарантии</li>
            <li className={styles.item}>О компании</li>
            <li className={styles.item}>Контакты</li>
          </ul>
        </nav>
        <div className={styles.burgerButton} onClick={handleClick}>
          <span className={styles.burgerButtonWrapper}></span>
          <span className={styles.burgerButtonWrapper}></span>
          <span className={styles.burgerButtonWrapper}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
