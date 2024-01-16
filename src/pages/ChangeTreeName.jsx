import {useState} from 'react';

import styles from '@/parts/changeTreeName/ChangeTreeName.module.css';
import {Helmet} from 'react-helmet-async';
import SectionTitle from '@/components/SectionTitle';

import InfoSection from '@/parts/changeTreeName/InfoSection';
import ButtonSection from '@/parts/changeTreeName/ButtonSection';

function ChangeTreeName() {
  const [treeName, setTreeName] = useState('');
  const [newTreeName, setNewTreeName] = useState('');

  return (
    <>
      <Helmet>
        <title>GROWING | 나무 이름 설정</title>
      </Helmet>
      <div className={styles.changeTreeName}>
        <SectionTitle text="나무 이름 설정" />
        <InfoSection
          setTreeName={setTreeName}
          setNewTreeName={setNewTreeName}
        />
        <ButtonSection treeName={treeName} newTreeName={newTreeName} />
      </div>
    </>
  );
}

export default ChangeTreeName;
