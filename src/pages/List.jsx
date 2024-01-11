import DateList from '@/components/DateList';
import SectionTitle from '@/components/SectionTitle';
import { db } from '@/firebase';
import styles from '@/parts/list/List.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function List() {
  const [list, setList] = useState();
  const userId = localStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const growthCollectionRef = collection(db, 'growth');
        const queryData = query(
          growthCollectionRef,
          where('email', '==', userId)
        );
        const growthSnap = await getDocs(queryData);
        const data = growthSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return setList(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  const sortedList = list?.slice().toSorted((a, b) => b.date - a.date);
  localStorage.setItem('listLength', sortedList?.length);

  return (
    <>
      <Helmet>
        <title>GROWING | 행복 저장소</title>
      </Helmet>
      <div className={styles.link}>
        <SectionTitle text="행복 저장소" />
        <ul>
          {sortedList?.map(({id, title, date}) => (
            <li key={id}>
              <Link to={`/list/${id}`}>
                <DateList
                  title={title}
                  date={date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
