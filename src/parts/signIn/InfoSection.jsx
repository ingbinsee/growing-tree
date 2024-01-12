import LabelInput from '@/components/LabelInput';
import {func} from 'prop-types';
import styles from './SignIn.module.css';

function InfoSection({setId, setPassword}) {
  return (
    <section className={styles.infoSection}>
      <LabelInput
        labelText="아이디"
        type="text"
        placeholder="아이디를 입력해 주세요."
        direction="col"
        onChange={(e) => {
          setId(e.target.value + '@growing.eb');
        }}
      />
      <LabelInput
        labelText="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        direction="col"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </section>
  );
}

InfoSection.propTypes = {
  setId: func,
  setPassword: func,
};

export default InfoSection;
