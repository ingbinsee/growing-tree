import placeholder from '@/assets/placeholder.jpeg';
import LabelInput from '@/components/LabelInput';
import {storage} from '@/firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {func, string} from 'prop-types';
import {uid} from 'uid';
import styles from './Collection.module.css';

function InfoSection({
  setTitleData,
  setDateData,
  setContentData,
  setImgData,
  imgData,
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
        placeholder=""
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
        <label htmlFor={contentId}><h3>내용</h3></label>
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
};

export default InfoSection;
