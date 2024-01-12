import Button from '@/components/Button';
import { string } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './ListDetail.module.css';

function ButtonSection({useId}) {
  const nevigate = useNavigate();

  const handleList = () => {
    nevigate('/list');
  };

  const handleUpdate = () => {
    nevigate(`/list/${useId}/edit`);
  };

  const handleDelate = () => {
    // 로직 작성 예정입니다.
  };

  return (
    <section>
      <Button
        type="button"
        text="수정"
        className={styles.positiveButton}
        onClick={handleUpdate}
      />
      <Button
        type="button"
        text="삭제"
        className={styles.negativeButton}
        onClick={handleDelate}
      />
      <Button
        type="button"
        text="목록으로"
        className={styles.defaultButton}
        onClick={handleList}
      />
    </section>
  );
}

ButtonSection.propTypes = {
  useId: string,
};

export default ButtonSection;
