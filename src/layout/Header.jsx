import { Link } from 'react-router-dom';
import styles from './RootLayout.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/"><h1><img src="logo.png" alt="그로잉" /></h1></Link>
    </header>
  );
}

export default Header;
