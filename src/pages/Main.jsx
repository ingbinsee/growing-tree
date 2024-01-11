import SectionTitle from '@/components/SectionTitle';
import {db} from '@/firebase';
import styles from '@/parts/main/Main.module.css';
import TreeInfo from '@/parts/main/TreeInfo';
import WaterInfo from '@/parts/main/WaterInfo';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import toast from 'react-hot-toast';

function Main() {
  const [name, setName] = useState();
  const [length, setLength] = useState();
  const userId = localStorage.getItem('id');

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
  }, []);

  const waterNum = length?.length;

  return (
    <>
      <Helmet>
        <title>GROWING | 나의 나무</title>
      </Helmet>
      <div className={styles.main}>
        <SectionTitle text="나의 나무" />
        <section className={styles.treeSection}>
          {name && <TreeInfo waterNum={waterNum} name={name[0].name} />}
          <WaterInfo waterNum={waterNum} />
        </section>
      </div>
    </>
  );
}

export default Main;