import SectionTitle from '@/components/SectionTitle';
import {db} from '@/firebase';
import styles from '@/parts/setting/Setting.module.css';
import CahngePasswordIcon from '@/parts/setting/icons/CahngePasswordIcon';
import ChangeTreeNameIcon from '@/parts/setting/icons/ChangeTreeNameIcon';
import SignOutIcon from '@/parts/setting/icons/SignOutIcon';
import SignOutModal from '@/parts/signOut/SignOutModal';
import WithdrawalModal from '@/parts/withdrawal/WithdrawalModal';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {useEffect} from 'react';
import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Setting() {
  const [signOutModal, setSignOutModal] = useState(false);
  const [withdrawalModal, setWithdrawalModal] = useState(false);
  const userId = localStorage.getItem('id');
  const [treeData, setTreeData] = useState('');
  const navigate = useNavigate();

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
        return setTreeData(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchTreeName();
  }, [userId]);

  const handleSignOutOpen = () => {
    setSignOutModal(true);
  };

  const handleWithdrawalOpen = () => {
    setWithdrawalModal(true);
  };

  if (treeData.length > 0) {
    return (
      <>
        <Helmet>
          <title>GROWING | 설정</title>
        </Helmet>
        <div className={styles.setting}>
          <SectionTitle text="설정" />
          <ul>
            <li>
              <Link to="/changepassword" className={styles.listLink}>
                <SignOutIcon />
                <span>비밀번호 변경</span>
              </Link>
            </li>
            <li>
              <Link to="/changetreename" className={styles.listLink}>
                <ChangeTreeNameIcon />
                <span>나무 이름 변경</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className={styles.listLink}
                onClick={handleSignOutOpen}
              >
                <CahngePasswordIcon />
                <span>로그아웃</span>
              </button>
              <SignOutModal
                signOutModal={signOutModal}
                setSignOutModal={setSignOutModal}
              />
            </li>
          </ul>
          <button
            type="button"
            className={styles.link}
            onClick={handleWithdrawalOpen}
          >
            회원탈퇴
          </button>
          <WithdrawalModal
            withdrawalModal={withdrawalModal}
            setWithdrawalModal={setWithdrawalModal}
          />
        </div>
      </>
    );
  } else {
    navigate('/signin');
  }
}

export default Setting;
