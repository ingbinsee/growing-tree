import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '@/layout/RootLayout.module.css'
import CollectionIcon from './icons/CollectionIcon';
import SettingIcon from './icons/SettingIcon';
import ListIcon from './icons/ListIcon';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <NavLink to="/collection">
          <li>
            <CollectionIcon />
            <span>모으기</span>
          </li>
        </NavLink>
        <NavLink to="/list">
          <li>
            <ListIcon />
            <span>꺼내보기</span>
          </li>
        </NavLink>
        <NavLink to="/setting">
          <li>
            <SettingIcon />
            <span>설정</span>
          </li>
        </NavLink>
      </ul>
    </footer>
  );
}

export default Footer;
