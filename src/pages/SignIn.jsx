import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { auth } from '@/firebase';
import InfoSection from '@/parts/signIn/InfoSection';
import styles from '@/parts/signIn/SignIn.module.css';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const navigator = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, id, password);
      toast.success('로그인 되었습니다.');
      setTimeout(() => {
        navigator('/');
      }, 1000);
    } catch (error) {
      toast.error('로그인에 실패하였습니다.');
    }
  };

  return (
    <>
      <Helmet>
        <title>GROWING | 로그인</title>
      </Helmet>
      <div className={styles.signIn}>
        <SectionTitle text="로그인" />
        <InfoSection setId={setId} setPassword={setPassword} />
        <Button
          type="submit"
          text="로그인"
          className={styles.button}
          onClick={handleLogin}
        />
      </div>
    </>
  );
};

export default SignIn;
