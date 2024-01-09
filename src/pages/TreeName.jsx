import LabelInput from '@/components/LabelInput';
import SectionTitle from '@/components/SectionTitle';
import ButtonSection from '@/parts/treeName/ButtonSection';
import styles from '@/parts/treeName/TreeName.module.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

function TreeName() {
  const [name, setName] = useState('');

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.displayName = name;
        localStorage.setItem('treeName', name)
      }
    });
  });

  return (
    <>
      <Helmet>
        <title>GROWING | 나무 이름 설정</title>
      </Helmet>
      <div className={styles.treeName}>
        <SectionTitle text="나무 이름 설정" />
        <LabelInput
          labelText="나무 이름"
          type="text"
          placeholder="나무 이름을 입력해 주세요."
          direction="col"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <ButtonSection />
      </div>
    </>
  );
}

export default TreeName;
