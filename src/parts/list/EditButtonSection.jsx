import Button from '@/components/Button';
import { db } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { string } from 'prop-types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from './ListEdit.module.css';

function EditButtonSection({editTitle, editDate, editContent, useId, editImg}) {
  const navigate = useNavigate();
  const handleDataUpdate = async () => {
    try {
      await updateDoc(doc(db, 'growth', useId), {
        title: editTitle,
        date: editDate,
        content: editContent,
        img: editImg,
      });
      toast.success('수정하였습니다.');
      localStorage.removeItem('listTitle');
      localStorage.removeItem('listDate');
      localStorage.removeItem('listContent');
      setTimeout(() => {
        navigate(`/list/${useId}`);
      }, 500);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleGoToPage = () => {
    navigate(`/list/${useId}`);
  };

  return (
    <section className={styles.buttonSection}>
      <Button
        type="submit"
        text="저장"
        className={styles.positiveButton}
        onClick={handleDataUpdate}
      />
      <Button
        type="button"
        text="취소"
        className={styles.negativeButton}
        onClick={handleGoToPage}
      />
    </section>
  );
}

EditButtonSection.propTypes = {
  editTitle: string,
  editDate: string,
  editContent: string,
  useId: string,
  editImg: string,
};

export default EditButtonSection;
