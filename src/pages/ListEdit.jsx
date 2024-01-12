import SectionTitle from '@/components/SectionTitle';
import ContentSection from '@/parts/list/ContentSection';
import EditButtonSection from '@/parts/list/EditButtonSection';
import styles from '@/parts/list/ListEdit.module.css';
import {useState} from 'react';
import {Helmet} from 'react-helmet-async';

function ListEdit() {
  const useId = location.pathname.slice(6, -5);
  const listTitle = localStorage.getItem('listTitle');
  const listDate = localStorage.getItem('listDate');
  const listContent = localStorage.getItem('listContent');
  const listImg = localStorage.getItem('listImg');
  const [editTitle, setEditTitle] = useState(listTitle);
  const [editDate, setEditDate] = useState(listDate);
  const [editContent, setEditContent] = useState(listContent);
  const [editImg, setEditImg] = useState(listImg);

  return (
    <>
      <Helmet>
        <title>GROWING | 행복 저장소 수정</title>
      </Helmet>
      <div className={styles.listEdit}>
        <SectionTitle text="수정하기" />
        <ContentSection
          listTitle={listTitle}
          listDate={listDate}
          editImg={editImg}
          listContent={listContent}
          setEditTitle={setEditTitle}
          setEditDate={setEditDate}
          setEditContent={setEditContent}
          setEditImg={setEditImg}
        />
        <EditButtonSection
          editTitle={editTitle}
          editDate={editDate}
          editContent={editContent}
          editImg={editImg}
          useId={useId}
        />
      </div>
    </>
  );
}

export default ListEdit;
