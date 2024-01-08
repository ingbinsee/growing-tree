import LabelInput from '@/components/LabelInput';
import styles from './SignUp.module.css';
import {useState} from 'react';

function InfoSection({
  setId,
  setPassword,
  password,
  setPasswordRe,
  passwordRe,
}) {
  return (
    <section className={styles.information}>
      <LabelInput
        labelText="아이디"
        type="text"
        placeholder="아이디를 입력해 주세요."
        direction="col"
        onChange={(e) => {
          setId(e.target.value + '@growing.eb');
        }}
      />
      <div>
        <LabelInput
          labelText="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          direction="col"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {password.length === 0 || password.length >= 6 || (
          <span>비밀번호를 6자 이상 입력해 주세요.</span>
        )}
      </div>
      <div>
        <LabelInput
          labelText="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해 주세요."
          minLangth="6"
          direction="col"
          onChange={(e) => {
            setPasswordRe(e.target.value);
          }}
        />
        {password === passwordRe || passwordRe.length === 0 || (
          <span>비밀번호가 일치하지 않습니다.</span>
        )}
      </div>
    </section>
  );
}

export default InfoSection;
