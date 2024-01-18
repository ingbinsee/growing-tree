import { string } from 'prop-types';
import styles from './components.module.css';

function DateList({title, date}) {
  return (
    <div className={styles.dateList}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.date}>{date}</span>
    </div>
  );
}

DateList.propTypes = {
  title: string,
  date: string,
};

export default DateList;
