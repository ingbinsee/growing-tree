import DateList from '@/components/DateList';
import SectionTitle from '@/components/SectionTitle';
import {db} from '@/firebase';
import ButtonSection from '@/parts/list/ButtonSection';
import styles from '@/parts/list/ListDetail.module.css';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import toast from 'react-hot-toast';

function ListDetail() {
  const [listDetail, setListDetail] = useState();
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
  }, [useId]);

  if (listDetail) {
    const {title, date, content, img} = listDetail[0];
    localStorage.setItem('listTitle', title);
    localStorage.setItem('listDate', date);
    localStorage.setItem('listContent', content);
    localStorage.setItem('listImg', img);
    return (
      <>
        <Helmet>
          <title>GROWING | 행복 저장소 상세</title>
        </Helmet>
        <div className={styles.listDetail}>
          <SectionTitle text="행복 들여다보기" />
          <div className={styles.contentSection}>
            <DateList
              title={title}
              date={date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
            />
            <figure>
              {img === '' || <img src={img} alt={title} />}
              <p className={styles.content}>{content}</p>
            </figure>
          </div>
          <ButtonSection useId={useId} />
        </div>
      </>
    );
  }
}

export default ListDetail;
