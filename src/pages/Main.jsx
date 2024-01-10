import SectionTitle from '@/components/SectionTitle';
import { db } from '@/firebase';
import styles from '@/parts/main/Main.module.css';
import TreeInfo from '@/parts/main/TreeInfo';
import WaterInfo from '@/parts/main/WaterInfo';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

function Main() {
  const [name, setName] = useState();
  const userId = localStorage.getItem('id');
  const waterNum = localStorage.getItem('listLength');

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



    
  }, []);

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
