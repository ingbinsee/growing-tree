import styles from './components.module.css';

function SectionTitle({text}) {
  return <span className={styles.sectionTitle}>{text}</span>;
}

export default SectionTitle;
