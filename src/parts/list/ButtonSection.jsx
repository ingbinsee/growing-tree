import Button from '@/components/Button';
import {string} from 'prop-types';
import {useNavigate} from 'react-router-dom';
import styles from './ListDetail.module.css';
import {deleteDoc, doc} from 'firebase/firestore';
import {db} from '@/firebase';
import toast from 'react-hot-toast';

function ButtonSection({useId}) {
  const navigate = useNavigate();

  const handleList = () => {
    navigate('/list');
    localStorage.removeItem('listImg');
    localStorage.removeItem('listDate');
    localStorage.removeItem('listContent');
    localStorage.removeItem('listTitle');
  };

  const handleUpdate = () => {
    navigate(`/list/${useId}/edit`);
  };

  const handleDelate = async () => {
    await deleteDoc(doc(db, 'growth', useId));
    toast.success('삭제되었습니다.');
    navigate('/list');
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
