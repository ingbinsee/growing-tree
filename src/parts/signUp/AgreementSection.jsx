import { uid } from 'uid';
import styles from './SignUp.module.css';

function AgreementSection({isChecked, setIsChecked}) {
  const checkId = uid();

  return (
    <section className={styles.agreementSection}>
      <h3>개인정보 수집 및 이용 필수 동의</h3>
      <ol>
        <li>
          <span className={styles.listTitle}>1. 수집하는 개인정보 항목</span>
          <span>필수정보: 아이디, 이름, 비밀번호, 이메일</span>
        </li>
        <li>
          <span className={styles.listTitle}>
            2. 대표 누리집에서 이용자 회원가입 시 직접 개인정보를 입력 및
            수정하여 개인정보를 수집합니다.
          </span>
        </li>
        <li>
          <span className={styles.listTitle}>3. 수집 개인정보의 이용목적</span>
          <span>회원가입, 회원탈퇴 의사 확인 등 회원관리</span>
        </li>
        <li>
          <span className={styles.listTitle}>
            4. 개인정보의 보유 및 이용기간
          </span>
          <span>
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이
            달성되면 지체 없이 파기합니다.
          </span>
        </li>
        <li>※ 동의를 거부할 경우에는 서비스 이용에 제한됨을 알려드립니다.</li>
      </ol>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={checkId}
          checked={isChecked}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        />
        <label htmlFor={checkId}>동의합니다.</label>
      </div>
    </section>
  );
}

export default AgreementSection;
