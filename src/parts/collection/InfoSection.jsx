import LabelInput from '@/components/LabelInput';
import styles from './Collection.module.css';
import {uid} from 'uid';

function InfoSection({setTitleData, setDateData, setContentData}) {
  const contentId = uid();

  return (
    <section className={styles.infoSection}>
      <LabelInput
        labelText="제목"
        type="text"
        placeholder="제목을 작성해 주세요."
        direction="col"
        onChange={(e) => {
          setTitleData(e.target.value);
        }}
      />
      <LabelInput
        labelText="날짜"
        type="date"
        placeholder="제목을 작성해 주세요."
        direction="col"
        onChange={(e) => {
          setDateData(e.target.value.replace(/-/g, ''));
        }}
      />
      <div className={styles.content}>
        <label htmlFor={contentId}>내용</label>
        <textarea
          name="content"
          id={contentId}
          cols="30"
          rows="5"
          onChange={(e) => {
            setContentData(e.target.value);
          }}
        />
      </div>
    </section>
  );
}

export default InfoSection;
