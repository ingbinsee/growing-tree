import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import {auth, db} from '@/firebase';
import InfoSection from '@/parts/withdrawal/InfoSection';
import styles from '@/parts/withdrawal/withdrawal.module.css';
import {deleteUser} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

function Withdrawal() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');
  const [info, setInfo] = useState();
  const [idInfo, setIdInfo] = useState();
  const [treeNameInfo, setTreeNameInfo] = useState();
  const [isChecked, setIsChecked] = useState(false);

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
        return setInfo(data);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();
  }, [userId]);

  const handleWithdrawal = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      toast.error('데이터 삭제에 동의해 주세요.');
    } else {
      if (info[0].email === idInfo && info[0].name === treeNameInfo) {
        const user = auth.currentUser;
        await deleteUser(user);
        await deleteDoc(doc(db, 'tree', info[0].id));
        localStorage.removeItem('id');
        toast.success('회원탈퇴되었습니다. 이용해 주셔서 감사합니다.');
        navigate('/');
      } else {
        toast.error('회원탈퇴에 실패했습니다. 다시 시도해 주세요.');
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>GROWING | 회원탈퇴</title>
      </Helmet>
      <form className={styles.withdrawal}>
        <SectionTitle text="회원탈퇴" />
        <InfoSection
          setIdInfo={setIdInfo}
          setTreeNameInfo={setTreeNameInfo}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <Button
          type="submit"
          text="탈퇴"
          className={styles.negativeButton}
          onClick={handleWithdrawal}
        />
      </form>
    </>
  );
}

export default Withdrawal;
