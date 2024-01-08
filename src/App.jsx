import {RouterProvider} from 'react-router-dom';
import router from './routes';
import {Toaster} from 'react-hot-toast';
import {HelmetProvider} from 'react-helmet-async';

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
