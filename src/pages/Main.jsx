
import SectionTitle from '@/components/SectionTitle';
import styles from '@/parts/main/Main.module.css';
import TreeInfo from '@/parts/main/TreeInfo';
import WaterInfo from '@/parts/main/WaterInfo';
import { Helmet } from 'react-helmet-async';

function Main() {
  const name = localStorage.getItem('treeName');
  const num = 1;

  return (
    <>
      <Helmet>
        <title>GROWING | 나의 나무</title>
      </Helmet>
      <div className={styles.main}>
        <SectionTitle text="나의 나무" />
        <section className={styles.treeSection}>
          <TreeInfo num={num} name={name} />
          <WaterInfo num={num} />
        </section>
      </div>
    </>
  );
}

export default Main;
