import {Link} from 'react-router-dom';
import styles from './RootLayout.module.css';
import logo from '@/assets/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/main">
        <h1>
          <img src={logo} alt="그로잉" />
        </h1>
      </Link>
    </header>
  );
}

export default Header;
