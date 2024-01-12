import { string } from 'prop-types';
import styles from './components.module.css';

function DateList({title, date}) {
  return (
    <p className={styles.dateList}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.date}>{date}</span>
    </p>
  );
}

DateList.propTypes = {
  title: string,
  date: string,
};

export default DateList;
