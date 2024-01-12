import Button from '@/components/Button';
import {db} from '@/firebase';
import {addDoc, collection, doc, updateDoc} from 'firebase/firestore';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import styles from './Collection.module.css';

function ButtonSection({contentData, titleData, dateData, emailData, imgData}) {
  const navigate = useNavigate();
  const handleCreate = async () => {
    try {
      const docRef = await addDoc(collection(db, 'growth'), {
        content: contentData,
        title: titleData,
        date: dateData,
        email: emailData,
        img: '',
        uid: '',
      });
      await updateDoc(doc(db, 'growth', docRef.id), {
        uid: docRef.id,
        img: imgData,
      });
      toast.success('등록되었습니다.');
      setTimeout(() => {
        navigate('/list');
      }, 500);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleGoToPage = () => {
    navigate('/list');
  };

  return (
    <section className={styles.buttonSection}>
      <Button
        type="submit"
        text="저장"
        className={styles.positiveButton}
        onClick={handleCreate}
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

export default ButtonSection;
