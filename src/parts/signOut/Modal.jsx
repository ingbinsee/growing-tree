import Button from '@/components/Button';
import {auth} from '@/firebase';
import {signOut} from 'firebase/auth';
import {bool, func} from 'prop-types';
import ReactModal from 'react-modal';
import {useNavigate} from 'react-router-dom';
import styles from './signOut.module.css';

function Modal({signOutModal, setSignOutModal}) {
  const navigate = useNavigate();

  const handleSignOutClose = () => {
    setSignOutModal(false);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setSignOutModal(false);
    localStorage.removeItem('id');
    navigate('/');
  };

  return (
    <ReactModal
      isOpen={signOutModal}
      onRequestClose={handleSignOutClose}
      className={styles.modal}
    >
      <span>
        로그아웃하시겠습니까?
      </span>
      <section className={styles.buttonSection}>
        <Button
          type="button"
          text="확인"
          className={styles.positiveButton}
          onClick={handleSignOut}
        />
        <Button
          type="button"
          text="취소"
          className={styles.negativeButton}
          onClick={handleSignOutClose}
        />
      </section>
    </ReactModal>
  );
}

Modal.propTypes = {
  signOutModal: bool,
  setSignOutModal: func,
};

export default Modal;
