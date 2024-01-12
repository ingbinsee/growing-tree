import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function ButtonSection() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <section className={styles.buttonSection}>
      <h2>로그인</h2>
      <Button
        type="button"
        text="로그인"
        className={styles.button}
        onClick={handleSignIn}
      />
      <h2>회원가입</h2>
      <Button
        type="button"
        text="회원가입"
        className={styles.button}
        onClick={handleSignUp}
      />
    </section>
  );
}

export default ButtonSection;
