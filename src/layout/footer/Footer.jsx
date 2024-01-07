import React from 'react';
import {NavLink} from 'react-router-dom';
import CollectionIcon from './icons/CollectionIcon';
import SettingIcon from './icons/SettingIcon';
import ListIcon from './icons/ListIcon';

function Footer() {
  return (
    <footer className="bg-primary/80">
      <ul className="font-label text-contentSecondary flex justify-around">
        <NavLink to="/collection">
          <li className="flex gap-3 p-5">
            <CollectionIcon />
            <span>모으기</span>
          </li>
        </NavLink>
        <NavLink to="/list">
          <li className="flex gap-3 p-5">
            <ListIcon />
            <span>꺼내보기</span>
          </li>
        </NavLink>
        <NavLink to="/setting">
          <li className="flex gap-3 p-5">
            <SettingIcon />
            <span>설정</span>
          </li>
        </NavLink>
      </ul>
    </footer>
  );
}

export default Footer;
