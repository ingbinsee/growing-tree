import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './ListDetail.module.css';

function ButtonSection() {
  const nevigate = useNavigate();

  const handleList = () => {
    nevigate('/list');
  };

  return (
    <section>
      <Button type="button" text="수정" className={styles.positiveButton} />
      <Button
        type="button"
        text="목록으로"
        className={styles.defaultButton}
        onClick={handleList}
      />
    </section>
  );
}

export default ButtonSection;
