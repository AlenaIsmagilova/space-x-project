import styles from "./main-content.module.css";

const MainContent = () => {
  return (
    <>
      <section className={styles.mainContentContainer}>
        <div className={styles.titlesWrapper}>
          <h1 className={styles.title}>Путешествие</h1>
          <h2 className={styles.subtitle}>на красную планету</h2>
          <button type="button" className={styles.button}>
            Начать путешествие
          </button>
          <img
            className={styles.arrow}
            src="data:image/png;base64,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"
            alt="стрелка"
          />
        </div>
        <ul className={styles.cards}>
          <li className={styles.cardsItem}>
            <h3 className={styles.cardsDesc}>мы</h3>
            <span className={styles.factWrapper}>1</span>
            <h3 className={styles.cardsDesc}>на рынке</h3>
          </li>
          <li className={styles.cardsItem}>
            <h3 className={styles.cardsDesc}>гарантируем</h3>
            <span className={styles.factWrapper}>50%</span>
            <h3 className={styles.cardsDesc}>безопасность</h3>
          </li>
          <li className={styles.cardsItem}>
            <h3 className={styles.cardsDesc}>календарик за</h3>
            <span className={styles.factWrapper}>2001г.</span>
            <h3 className={styles.cardsDesc}>в подарок</h3>
          </li>
          <li className={styles.cardsItem}>
            <h3 className={styles.cardsDesc}>путешествие</h3>
            <span className={styles.factWrapper}>597</span>
            <h3 className={styles.cardsDesc}>дней</h3>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MainContent;
