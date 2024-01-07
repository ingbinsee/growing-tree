import Header from './Header';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className='font-pretendard min-w-[320px] max-w-[1023px] m-auto'>
       <Header />
    </div>
  );
}

export default RootLayout;
