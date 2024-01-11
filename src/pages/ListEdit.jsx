import DateList from '@/components/DateList';
import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import SectionTitle from '@/components/SectionTitle';
import styles from '@/parts/list/ListEdit.module.css';
import EditButtonSection from '@/parts/list/EditButtonSection';

function ListEdit() {
  const useId = location.pathname.slice(6, -5);
  const listTitle = localStorage.getItem('listTitle');
  const listDate = localStorage.getItem('listDate');
  const listContent = localStorage.getItem('listContent');
  const [editContent, setEditContent] = useState(listContent);

  return (
    <>
      <Helmet>
        <title>GROWING | 행복 저장소 수정</title>
      </Helmet>
      <div className={styles.listEdit}>
        <SectionTitle text="수정하기" />
        <div className={styles.contentSection}>
          <DateList
            title={listTitle}
            date={listDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
          />
          <textarea
            name="content"
            id={useId}
            cols="30"
            rows="5"
            defaultValue={listContent}
            onChange={(e) => {
              setEditContent(e.target.value);
            }}
          />
        </div>
        <EditButtonSection editContent={editContent} useId={useId} />
      </div>
    </>
  );
}

export default ListEdit;
