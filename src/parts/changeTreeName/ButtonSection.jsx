import Button from '@/components/Button';
import {db} from '@/firebase';
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import styles from './ChangeTreeName.module.css';
import {string} from 'prop-types';

function ButtonSection({treeName, newTreeName}) {
  const [list, setList] = useState();
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');
  const treeData = localStorage.getItem('treeName');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const growthCollectionRef = collection(db, 'tree');
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
  }, [userId]);

  const habdleChangeTreeName = async () => {
    if (treeName === treeData) {
      try {
        await updateDoc(doc(db, 'tree', list[0].id), {
          name: newTreeName,
        });
        toast.success('수정하였습니다.');
        localStorage.removeItem('treeName');
        setTimeout(() => {
          navigate(`/main`);
        }, 500);
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error('기존 나무 이름이 일치하지 않습니다.');
    }
  };

  const handleSetting = () => {
    navigate('/setting');
  };

  return (
    <section className={styles.buttonSection}>
      <Button
        type="button"
        text="확인"
        className={styles.positiveButton}
        onClick={habdleChangeTreeName}
      />
      <Button
        type="button"
        text="취소"
        className={styles.negativeButton}
        onClick={handleSetting}
      />
    </section>
  );
}

ButtonSection.propTypes = {
  treeName: string,
  newTreeName: string,
};

export default ButtonSection;
