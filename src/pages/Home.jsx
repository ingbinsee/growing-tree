import ButtonSection from '@/parts/home/ButtonSection';
import Figure from '@/parts/home/Figure';
import styles from '@/parts/home/Home.module.css';
import Title from '@/parts/home/Title';

function Home() {
  return (
    <div className={styles.home}>
      <Title />
      <Figure />
      <ButtonSection />
    </div>
  );
}

export default Home;
