import LabelInput from '@/components/LabelInput';
import { storage } from '@/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { func, string } from 'prop-types';
import { uid } from 'uid';
import styles from './ListEdit.module.css';

function ContentSection({
  listTitle,
  setEditTitle,
  listDate,
  setEditDate,
  editImg,
  listContent,
  setEditContent,
  setEditImg,
}) {
  const dt = new Date();
  const today =
    dt.getFullYear() +
    '-' +
    ('0' + (dt.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + dt.getDate()).slice(-2);

  const imgEditId = uid();
  const editFB = async (e) => {
    const editFile = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );

    const fileEditURL = await getDownloadURL(editFile.ref);
    setEditImg(fileEditURL);
  };

  return (
    <div className={styles.contentSection}>
      <LabelInput
        labelText="제목"
        type="text"
        placeholder=""
        direction="col"
        defaultValue={listTitle}
        onChange={(e) => {
          setEditTitle(e.target.value);
        }}
      />
      <LabelInput
        labelText="날짜"
        type="date"
        placeholder=""
        direction="col"
        max={today}
        defaultValue={listDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
        onChange={(e) => {
          setEditDate(e.target.value.replace(/-/g, ''));
        }}
      />
      <div className={styles.img}>
        <label htmlFor={imgEditId}>이미지</label>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={editFB}
            id={imgEditId}
          />
          <img src={editImg} alt="업로드 이미지" />
        </div>
      </div>
      <textarea
        name="content"
        cols="30"
        rows="5"
        defaultValue={listContent}
        onChange={(e) => {
          setEditContent(e.target.value);
        }}
      />
    </div>
  );
}

ContentSection.propTypes = {
  listTitle: string,
  setEditTitle: func,
  listDate: string,
  setEditDate: func,
  editImg: string,
  listContent: string,
  setEditContent: func,
  setEditImg: func,
};

export default ContentSection;
