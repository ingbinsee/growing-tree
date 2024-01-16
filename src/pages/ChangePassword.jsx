import SectionTitle from '@/components/SectionTitle';
import ButtonSection from '@/parts/changePassword/ButtonSection';
import styles from '@/parts/changePassword/ChangePassword.module.css';
import InfoSection from '@/parts/changePassword/InfoSection';

import {useState} from 'react';
import {Helmet} from 'react-helmet-async';

function ChangePassword() {
  const [userId, setUserId] = useState();
  const [changePassword, setChangePassword] = useState('');
  const [changePasswordRe, setChangePasswordRe] = useState('');

  return (
    <>
      <Helmet>
        <title>GROWING | 비밀번호 변경</title>
      </Helmet>
      <div className={styles.changePassword}>
        <SectionTitle text="비밀번호 변경" />
        <InfoSection
          setUserId={setUserId}
          setChangePassword={setChangePassword}
          setChangePasswordRe={setChangePasswordRe}
          changePassword={changePassword}
          changePasswordRe={changePasswordRe}
        />
        <ButtonSection
          changePassword={changePassword}
          userId={userId}
          changePasswordRe={changePasswordRe}
        />
      </div>
    </>
  );
}

export default ChangePassword;
