import SectionTitle from '@/components/SectionTitle';
import {db} from '@/firebase';
import ButtonSection from '@/parts/collection/ButtonSection';
import styles from '@/parts/collection/Collection.module.css';
import InfoSection from '@/parts/collection/InfoSection';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {useEffect} from 'react';
import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function Collection() {
  const [titleData, setTitleData] = useState();
  const [contentData, setContentData] = useState();
  const [dateData, setDateData] = useState();
  const [imgData, setImgData] = useState('');
  const [nameData, setNameData] = useState('');
  const emailData = localStorage.getItem('id');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTreeName = async () => {
      try {
        const treeCollectionRef = collection(db, 'tree');
        const queryData = query(
          treeCollectionRef,
          where('email', '==', emailData)
        );
        const treeSnap = await getDocs(queryData);
        const data = treeSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return setNameData(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchTreeName();
  }, [emailData]);

  if (nameData.length > 0) {
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
            nameData={nameData}
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
  } else {
    navigate('/signin');
  }
}

export default Collection;
