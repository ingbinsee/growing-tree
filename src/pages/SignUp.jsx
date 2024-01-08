import SectionTitle from '@/components/SectionTitle';
import AgreementSection from '@/parts/signUp/AgreementSection';
import ButtonSection from '@/parts/signUp/ButtonSection';
import InfoSection from '@/parts/signUp/InfoSection';
import styles from '@/parts/signUp/SignUp.module.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className={styles.signUp}>
      <SectionTitle text="회원가입" />
      <Helmet>
        <title>GROWING | 회원가입</title>
      </Helmet>
      <InfoSection
        setId={setId}
        setPassword={setPassword}
        password={password}
        setPasswordRe={setPasswordRe}
        passwordRe={passwordRe}
      />
     <AgreementSection isChecked={isChecked} setIsChecked={setIsChecked} />
      <ButtonSection id={id} password={password} isChecked={isChecked} />
    </div>
  );
};
export default SignUp;
