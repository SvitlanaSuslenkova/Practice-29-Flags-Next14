import styles from "./Loading.module.css";
export default function Loading() {
  const array = Array.from({ length: 12 });
  return (
    <div className={styles.cardList}>
      {array.map((item, index) => (
        <div key={index} className={styles.shortCardDiv}>
          <div className={styles.cardImageDiv}></div>
          <div className={styles.cardTextDiv}></div>
        </div>
      ))}
    </div>
  );
}
