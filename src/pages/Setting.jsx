import styles from '@/parts/setting/Setting.module.css';
import CahngePasswordIcon from '@/parts/setting/icons/CahngePasswordIcon';
import ChangeTreeNameIcon from '@/parts/setting/icons/ChangeTreeNameIcon';
import SignOutIcon from '@/parts/setting/icons/SignOutIcon';
import Modal from '@/parts/signOut/Modal';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Setting() {
  const [signOutModal, setSignOutModal] = useState(false);

  const handleSignOutOpen = () => {
    setSignOutModal(true);
  };

  return (
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
          <Modal
            signOutModal={signOutModal}
            setSignOutModal={setSignOutModal}
          />
        </li>
      </ul>
      <Link to="/withdrawal" className={styles.link}>
        <span>회원탈퇴</span>
      </Link>
    </div>
  );
}

export default Setting;
