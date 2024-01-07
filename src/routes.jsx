import {Route} from 'react-router-dom';
import {createRoutesFromElements} from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layout/RootLayout';
import SignIn from './pages/SignIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default router;
