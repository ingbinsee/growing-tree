import styles from './ChangeTreeName.module.css';
import LabelInput from '@/components/LabelInput';
import {func} from 'prop-types';

function InfoSection({setTreeName, setNewTreeName}) {
  return (
    <section className={styles.infoSection}>
      <LabelInput
        labelText="기존 나무 이름"
        type="text"
        placeholder="나무 이름을 입력해 주세요."
        direction="col"
        onChange={(e) => {
          setTreeName(e.target.value);
        }}
      />
      <LabelInput
        labelText="변경 나무 이름"
        type="text"
        placeholder="변경할 나무 이름을 입력해 주세요."
        direction="col"
        onChange={(e) => {
          setNewTreeName(e.target.value);
        }}
      />
    </section>
  );
}

InfoSection.propTypes = {
  setTreeName: func,
  setNewTreeName: func,
};

export default InfoSection;
