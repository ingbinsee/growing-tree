import {RouterProvider} from 'react-router-dom';
import router from './routes';
import {Toaster} from 'react-hot-toast';
import {HelmetProvider} from 'react-helmet-async';
import {Suspense} from 'react';
import Spinner from './components/Spinner';

function App() {
  return (
    <>
      <HelmetProvider>
        <Suspense fallback={<Spinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
