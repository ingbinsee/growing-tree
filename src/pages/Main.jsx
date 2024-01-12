import SectionTitle from '@/components/SectionTitle';
import { db } from '@/firebase';
import styles from '@/parts/main/Main.module.css';
import TreeInfo from '@/parts/main/TreeInfo';
import WaterInfo from '@/parts/main/WaterInfo';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [name, setName] = useState('');
  const [length, setLength] = useState();
  const userId = localStorage.getItem('id');
  const nevigate = useNavigate();

  useEffect(() => {
    const fetchTreeName = async () => {
      try {
        const treeCollectionRef = collection(db, 'tree');
        const queryData = query(
          treeCollectionRef,
          where('email', '==', userId)
        );
        const treeSnap = await getDocs(queryData);
        const data = treeSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return setName(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchTreeName();

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
        return setLength(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [userId]);

  const waterNum = length?.length;

  if (name.length > 0) {
    return (
      <>
        <Helmet>
          <title>GROWING | 나의 나무</title>
        </Helmet>
        <div className={styles.main}>
          <SectionTitle text="나의 나무" />
          <section className={styles.treeSection}>
            {name.map(({name}) => (
              <TreeInfo waterNum={waterNum} name={name} key={name} />
            ))}
            <WaterInfo waterNum={waterNum} />
          </section>
        </div>
      </>
    );
  } else {
    nevigate('/');
  }
}

export default Main;
