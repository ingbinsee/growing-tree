import Button from '@/components/Button';
import styles from './SignUp.module.css';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '@/firebase';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function ButtonSection({id, password, isChecked}) {
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      if (!isChecked) {
        toast.error('개인정보 수집 및 이용에 동의해 주세요.');
      } else {
        const user = await createUserWithEmailAndPassword(auth, id, password);
        toast.success('가입되었습니다.');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        toast.error('이미 존재하는 아이디입니다.');
      } else {
        toast.error('가입에 실패하였습니다.');
      }
    }
  };

  const handleGoToPage = () => {
    navigate('/');
  };

  return (
    <section className={styles.buttonSrcion}>
      <Button
        type="submit"
        text="가입"
        className={styles.positiveButton}
        onClick={handleRegister}
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
