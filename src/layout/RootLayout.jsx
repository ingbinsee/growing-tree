import Header from './Header';
import {Outlet} from 'react-router-dom';
import Footer from './footer/Footer';

function RootLayout() {
  return (
    <div className="font-pretendard min-w-[320px] max-w-[1023px] m-auto min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
