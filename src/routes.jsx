import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Collection from './pages/Collection';
import Home from './pages/Home';
import List from './pages/List';
import Setting from './pages/Setting';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/list" element={<List />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

export default router;
