import Button from '@/components/Button';
import styles from './ChangePassword.module.css';
import {auth} from '@/firebase';
import {signOut, updatePassword} from 'firebase/auth';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import {string} from 'prop-types';

function ButtonSection({changePassword, changePasswordRe, userId}) {
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    const user = auth.currentUser;
    const newPassword = changePassword;
    const id = localStorage.getItem('id');

    if (userId === id) {
      if (changePassword === changePasswordRe) {
        try {
          updatePassword(user, newPassword);
          toast.success('비밀번호 변경에 성공했습니다.');
          await signOut(auth);
          localStorage.removeItem('id');
          navigate('/signin');
        } catch (error) {
          toast.error('비밀번호 변경에 실패했습니다.');
        }
      } else {
        toast.error('비밀번호가 일치하지 않습니다.');
      }
    } else {
      toast.error('아이디가 일치하지 않습니다.');
    }
  };

  return (
    <section className={styles.buttonSection}>
      <Button
        type="button"
        text="확인"
        className={styles.positiveButton}
        onClick={handleChangePassword}
      />
      <Button
        type="button"
        text="취소"
        className={styles.negativeButton}
        onClick={() => {}}
      />
    </section>
  );
}

ButtonSection.propTypes = {
  changePassword: string,
  changePasswordRe: string,
  userId: string,
};

export default ButtonSection;
