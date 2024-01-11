import DateList from '@/components/DateList';
import SectionTitle from '@/components/SectionTitle';
import {db} from '@/firebase';
import ButtonSection from '@/parts/list/ButtonSection';
import styles from '@/parts/list/ListDetail.module.css';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function ListDetail() {
  const [ListDetail, setListDetail] = useState();
  const useId = location.pathname.slice(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const growthCollectionRef = collection(db, 'growth');
        const queryData = query(growthCollectionRef, where('uid', '==', useId));
        const growthSnap = await getDocs(queryData);
        const data = growthSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return setListDetail(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  if (ListDetail) {
    const {title, date, content} = ListDetail[0];
    return (
      <>
        <Helmet>
          <title>GROWING | 행복 저장소 상세</title>
        </Helmet>
        <div className={styles.listDetail}>
          <SectionTitle text="행복 들여다보기" />
          <fieldset>
            <DateList
              title={title}
              date={date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
            />
            <p className={styles.content}>{content}</p>
          </fieldset>
          <ButtonSection />
        </div>
      </>
    );
  }
}

export default ListDetail;
