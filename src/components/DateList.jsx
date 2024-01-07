import styles from './components.module.css'

function DateList({title, date}) {
  return (
    <p className={styles.dateList}>
      <span className={styles.title}>{title}</span>
      <span className={styles.date}>{date}</span>
    </p>
  );
}

export default DateList;
