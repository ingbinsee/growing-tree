import LabelInput from '@/components/LabelInput';
import {uid} from 'uid';
import {func, bool} from 'prop-types';

function InfoSection({
  setIdInfo,
  setTreeNameInfo,
  isChecked,
  setIsChecked,
  setReasonInfo,
}) {
  const checkboxId = uid();

  return (
    <section>
      <LabelInput
        labelText="탈퇴 사유"
        type="text"
        placeholder="탈퇴 사유를 작성해 주세요."
        direction="row"
        onChange={(e) => {
          setReasonInfo(e.target.value);
        }}
      />
      <LabelInput
        labelText="아이디 입력"
        type="test"
        placeholder="아이디를 입력해 주세요."
        direction="row"
        onChange={(e) => {
          setIdInfo(e.target.value + '@growing.eb');
        }}
      />
      <LabelInput
        labelText="나무 이름 입력"
        type="text"
        placeholder="나무 이름을 입력해 주세요."
        direction="row"
        onChange={(e) => {
          setTreeNameInfo(e.target.value);
        }}
      />
      <div>
        <input
          type="checkbox"
          id={checkboxId}
          checked={isChecked}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        />
        <label htmlFor={checkboxId}>모든 데이터를 삭제합니다.</label>
      </div>
    </section>
  );
}

InfoSection.propTypes = {
  setIdInfo: func,
  setTreeNameInfo: func,
  isChecked: bool,
  setIsChecked: func,
  setReasonInfo: func,
};

export default InfoSection;
