import placeholder from '@/assets/collection_placeholder.jpeg';
import LabelInput from '@/components/LabelInput';
import {storage} from '@/firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {func, string, array} from 'prop-types';
import {uid} from 'uid';
import styles from './Collection.module.css';
import treeIcon from '@/assets/collection_treeIcon.png';

function InfoSection({
  setTitleData,
  setDateData,
  setContentData,
  setImgData,
  imgData,
  nameData,
}) {
  const contentId = uid();
  const dt = new Date();
  const today =
    dt.getFullYear() +
    '-' +
    ('0' + (dt.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + dt.getDate()).slice(-2);

  const imgId = uid();
  const uploadFB = async (e) => {
    const uploadeFile = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );

    const fileURL = await getDownloadURL(uploadeFile.ref);
    setImgData(fileURL);
  };

  return (
    <section className={styles.infoSection}>
      <div className={styles.infoTree}>
        <img src={treeIcon} alt="나무 아이콘" />
        <span>{nameData[0].name}</span>
      </div>
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
        placeholder="연도.월.일."
        max={today}
        direction="col"
        onChange={(e) => {
          setDateData(e.target.value.replace(/-/g, ''));
        }}
      />
      <div className={styles.img}>
        <label htmlFor={imgId}>
          <h3>이미지</h3>
        </label>
        <div>
          <input type="file" accept="image/*" onChange={uploadFB} id={imgId} />
          <img src={imgData ? imgData : placeholder} alt="업로드 이미지" />
        </div>
      </div>
      <div className={styles.content}>
        <label htmlFor={contentId}>
          <h3>내용</h3>
        </label>
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

InfoSection.propTypes = {
  setTitleData: func,
  setDateData: func,
  setContentData: func,
  setImgData: func,
  imgData: string,
  nameData: array,
};

export default InfoSection;
