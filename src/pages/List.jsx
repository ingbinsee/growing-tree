import DateList from '@/components/DateList';
import SectionTitle from '@/components/SectionTitle';
import { db } from '@/firebase';
import styles from "@/parts/link/Link.module.css";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function List() {
  const [list, setList] = useState();
  const userId = localStorage.getItem('id');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollectionRef = collection(db, 'growth');
        const queryData = query(
          usersCollectionRef,
          where('email', '==', userId)
        );
        const userSnap = await getDocs(queryData);
        const data = userSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return setList(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchUsers();
  }, []);

  const sortedList = list?.slice().toSorted((a, b) => b.date - a.date);

  return (
    <>
      <Helmet>
        <title>GROWING | 행복 저장소</title>
      </Helmet>
      <div className={styles.link}>
        <SectionTitle text="행복 저장소" />
        <ul>
          {sortedList?.map(({id, content, date}) => (
            <li key={id}>
              <Link to={`/list/${id}`}>
                <DateList
                  title={content}
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
