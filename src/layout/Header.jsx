import { Link } from 'react-router-dom';
import styles from './RootLayout.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/"><img src="logo.png" alt="로고" /></Link>
    </header>
  );
}

export default Header;
