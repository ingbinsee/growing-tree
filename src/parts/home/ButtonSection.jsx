import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '@/components/Button';

function ButtonSection() {
  return (
    <section className={styles.buttonSection}>
    <h2>로그인</h2>
    <Link to="/signin" className={styles.link}>
      <Button type="button" text="로그인" className={styles.button} />
    </Link>
    <h2>회원가입</h2>
    <Link to="/withdrawal" className={styles.link}>
      <Button type="button" text="회원가입" className={styles.button} />
    </Link>
  </section>
  );
}

export default ButtonSection;
