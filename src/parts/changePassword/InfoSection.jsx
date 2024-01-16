import LabelInput from '@/components/LabelInput';
import styles from './ChangePassword.module.css';
import {func, string} from 'prop-types';

function InfoSection({
  setUserId,
  setChangePassword,
  setChangePasswordRe,
  changePassword,
  changePasswordRe,
}) {
  return (
    <section className={styles.infoSection}>
      <LabelInput
        labelText="아이디"
        type="text"
        placeholder="아이디를 입력해 주세요."
        direction="col"
        onChange={(e) => {
          setUserId(e.target.value + '@growing.eb');
        }}
      />
      <LabelInput
        labelText="변경 비밀번호"
        type="password"
        placeholder="변경할 비밀번호를 입력해 주세요."
        direction="col"
        onChange={(e) => {
          setChangePassword(e.target.value);
        }}
      />
      <div>
        <LabelInput
          labelText="변경 비밀번호 확인"
          type="password"
          placeholder="변경할 비밀번호를 다시 입력해 주세요."
          direction="col"
          onChange={(e) => {
            setChangePasswordRe(e.target.value);
          }}
        />
        {changePassword === changePasswordRe ||
          changePasswordRe.length === 0 || (
            <span>비밀번호가 일치하지 않습니다.</span>
          )}
      </div>
    </section>
  );
}

InfoSection.propTypes = {
  setUserId: func,
  setChangePassword: func,
  setChangePasswordRe: func,
  changePassword: string,
  changePasswordRe: string,
};

export default InfoSection;
