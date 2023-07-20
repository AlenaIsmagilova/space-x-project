import Logo from "../logo/logo";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <ul className={styles.linksContainer}>
          <li className={styles.item}>Главная</li>
          <li className={styles.item}>Технология</li>
          <li className={styles.item}>График полётов</li>
          <li className={styles.item}>Гарантии</li>
          <li className={styles.item}>О компании</li>
          <li className={styles.item}>Контакты</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
