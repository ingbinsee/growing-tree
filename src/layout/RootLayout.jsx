import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';
import Header from './Header';
import Footer from './footer/Footer';

function RootLayout() {
  return (
    <div className={styles.rootLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
