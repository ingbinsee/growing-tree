import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import ChangeTreeName from './pages/ChangeTreeName';
import Collection from './pages/Collection';
import Home from './pages/Home';
import List from './pages/List';
import ListDetail from './pages/ListDetail';
import ListEdit from './pages/ListEdit';
import Main from './pages/Main';
import Setting from './pages/Setting';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TreeName from './pages/TreeName';
import Withdrawal from './pages/Withdrawal';
import ChangePassword from './pages/ChangePassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/list" element={<List />} />
      <Route path="/list/:id" element={<ListDetail />} />
      <Route path="/list/:id/edit" element={<ListEdit />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/withdrawal" element={<Withdrawal />} />
      <Route path="/treename" element={<TreeName />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/changetreename" element={<ChangeTreeName />} />
    </Route>
  )
);

export default router;
