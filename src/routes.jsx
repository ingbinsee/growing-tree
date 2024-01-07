import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import List from './pages/List';
import Setting from './pages/Setting';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/list" element={<List />} />
      <Route path="/setting" element={<Setting />} />
    </Route>
  )
);

export default router;
