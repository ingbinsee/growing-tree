import Button from '@/components/Button';
import styles from './TreeName.module.css';
import { useNavigate } from 'react-router-dom';

function ButtonSection() {
  const navigate = useNavigate();

  const hadleSetName = () => {
    navigate('/signin');
  };

  const hadleGoToPage = () => {
    navigate('/');
  };

  return (
    <section className={styles.buttonSection}>
      <Button
        type="submit"
        text="가입"
        className={styles.positiveButton}
        onClick={hadleSetName}
      />
      <Button
        type="button"
        text="취소"
        className={styles.negativeButton}
        onClick={hadleGoToPage}
      />
    </section>
  );
}

export default ButtonSection;
