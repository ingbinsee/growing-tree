import Button from '@/components/Button';
import {db} from '@/firebase';
import {addDoc, collection} from 'firebase/firestore';
import {string} from 'prop-types';
import {useNavigate} from 'react-router-dom';
import styles from './TreeName.module.css';
import toast from 'react-hot-toast';

function ButtonSection({emailData, nameData}) {
  const navigate = useNavigate();

  const handleCreateName = async () => {
    try {
      await addDoc(collection(db, 'tree'), {
        email: emailData,
        name: nameData,
      });
      navigate('/signin');
    } catch (error) {
      toast.error(error);
    }
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
        onClick={handleCreateName}
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

ButtonSection.propTypes = {
  emailData: string,
  nameData: string,
};

export default ButtonSection;
