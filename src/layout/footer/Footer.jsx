import styles from '@/layout/RootLayout.module.css';
import { NavLink } from 'react-router-dom';
import CollectionIcon from './icons/CollectionIcon';
import ListIcon from './icons/ListIcon';
import SettingIcon from './icons/SettingIcon';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <NavLink to="/collection">
          <li>
            <CollectionIcon />
            <h2>모으기</h2>
          </li>
        </NavLink>
        <NavLink to="/list">
          <li>
            <ListIcon />
            <h2>꺼내보기</h2>
          </li>
        </NavLink>
        <NavLink to="/setting">
          <li>
            <SettingIcon />
            <h2>설정</h2>
          </li>
        </NavLink>
      </ul>
    </footer>
  );
}

export default Footer;
