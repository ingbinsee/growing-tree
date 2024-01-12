import { string } from 'prop-types';
import styles from './components.module.css';

function SectionTitle({text}) {
  return <h2 className={styles.sectionTitle}>{text}</h2>;
}

SectionTitle.propTypes = {
  text: string,
};

export default SectionTitle;
