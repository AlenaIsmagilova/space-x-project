import styles from "./burger-menu.module.css";

const BurgerMenu = ({ handleCloseClick }) => {
  return (
    <>
      <div className={styles.closeIcon} onClick={handleCloseClick}></div>
      <ul className={styles.linksContainer}>
        <li className={styles.item}>Главная</li>
        <li className={styles.item}>Технология</li>
        <li className={styles.item}>График полётов</li>
        <li className={styles.item}>Гарантии</li>
        <li className={styles.item}>О компании</li>
        <li className={styles.item}>Контакты</li>
      </ul>
    </>
  );
};

export default BurgerMenu;
