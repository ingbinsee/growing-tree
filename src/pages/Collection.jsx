import SectionTitle from '@/components/SectionTitle';
import ButtonSection from '@/parts/collection/ButtonSection';
import styles from '@/parts/collection/Collection.module.css';
import InfoSection from '@/parts/collection/InfoSection';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function Collection() {
  const [titleData, setTitleData] = useState();
  const [contentData, setContentData] = useState();
  const [dateData, setDateData] = useState();
  const [imgData, setImgData] = useState('');
  const emailData = localStorage.getItem('id');

  return (
    <>
      <Helmet>
        <title>GROWING | 모으기</title>
      </Helmet>
      <div className={styles.collection}>
        <SectionTitle text="오늘의 행복 한 방울" />
        <InfoSection
          setTitleData={setTitleData}
          setDateData={setDateData}
          setContentData={setContentData}
          setImgData={setImgData}
          imgData={imgData}
        />
        <ButtonSection
          contentData={contentData}
          titleData={titleData}
          dateData={dateData}
          emailData={emailData}
          imgData={imgData}
        />
      </div>
    </>
  );
}

export default Collection;
