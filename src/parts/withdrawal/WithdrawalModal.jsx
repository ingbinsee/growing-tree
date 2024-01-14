import Button from '@/components/Button';
import {bool, func} from 'prop-types';
import ReactModal from 'react-modal';
import {useNavigate} from 'react-router-dom';
import WarningIcon from './WarningIcon';
import styles from './withdrawal.module.css';

function WithdrawalModal({withdrawalModal, setWithdrawalModal}) {
  const navigate = useNavigate();

  const handleWithdrawalCheck = () => {
    navigate('/withdrawal');
  };

  const handleWithdrawalClose = () => {
    setWithdrawalModal(false);
  };

  return (
    <ReactModal
      isOpen={withdrawalModal}
      onRequestClose={handleWithdrawalClose}
      className={styles.modal}
    >
      <p>
        <span>회원탈퇴하시겠습니까?</span>
        <span className={styles.warning}>
          <WarningIcon />
          모든 데이터가 삭제되며, 복구가 불가합니다.
        </span>
      </p>
      <section className={styles.buttonSection}>
        <Button
          type="button"
          text="확인"
          className={styles.positiveButton}
          onClick={handleWithdrawalCheck}
        />
        <Button
          type="button"
          text="취소"
          className={styles.negativeButton}
          onClick={handleWithdrawalClose}
        />
      </section>
    </ReactModal>
  );
}

WithdrawalModal.propTypes = {
  withdrawalModal: bool,
  setWithdrawalModal: func,
};

export default WithdrawalModal;
