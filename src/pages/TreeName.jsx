import LabelInput from '@/components/LabelInput';
import SectionTitle from '@/components/SectionTitle';
import ButtonSection from '@/parts/treeName/ButtonSection';
import styles from '@/parts/treeName/TreeName.module.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function TreeName() {
  const [nameData, setNameData] = useState('');
  const emailData = localStorage.getItem('id');

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
            setNameData(e.target.value);
          }}
        />
        <ButtonSection emailData={emailData} nameData={nameData} />
      </div>
    </>
  );
}

export default TreeName;
