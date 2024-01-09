import styles from './Main.module.css';
import WaterIcon from './WaterIcon';

function WaterInfo({num}) {
  return (
    <div>
      <WaterIcon />
      <p>
        <span className={styles.water}>{num}방울</span>
        <span className={styles.text}>모았습니다.</span>
      </p>
    </div>
  );
}

export default WaterInfo;
