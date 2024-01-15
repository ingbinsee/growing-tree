import styles from '@/parts/setting/Setting.module.css';
import CahngePasswordIcon from '@/parts/setting/icons/CahngePasswordIcon';
import ChangeTreeNameIcon from '@/parts/setting/icons/ChangeTreeNameIcon';
import SignOutIcon from '@/parts/setting/icons/SignOutIcon';
import SignOutModal from '@/parts/signOut/SignOutModal';
import WithdrawalModal from '@/parts/withdrawal/WithdrawalModal';
import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

function Setting() {
  const [signOutModal, setSignOutModal] = useState(false);
  const [withdrawalModal, setWithdrawalModal] = useState(false);

  const handleSignOutOpen = () => {
    setSignOutModal(true);
  };

  const handleWithdrawalOpen = () => {
    setWithdrawalModal(true);
  };

  return (
    <>
      <Helmet>
        <title>GROWING | 설정</title>
      </Helmet>
      <div className={styles.setting}>
        <ul>
          <li>
            <Link to="/changepassword" className={styles.listLink}>
              <SignOutIcon />
              <span>비밀번호 변경</span>
            </Link>
          </li>
          <li>
            <Link to="/changetreename" className={styles.listLink}>
              <ChangeTreeNameIcon />
              <span>나무 이름 변경</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className={styles.listLink}
              onClick={handleSignOutOpen}
            >
              <CahngePasswordIcon />
              <span>로그아웃</span>
            </button>
            <SignOutModal
              signOutModal={signOutModal}
              setSignOutModal={setSignOutModal}
            />
          </li>
        </ul>
        <button
          type="button"
          className={styles.link}
          onClick={handleWithdrawalOpen}
        >
          회원탈퇴
        </button>
        <WithdrawalModal
          withdrawalModal={withdrawalModal}
          setWithdrawalModal={setWithdrawalModal}
        />
      </div>
    </>
  );
}

export default Setting;
