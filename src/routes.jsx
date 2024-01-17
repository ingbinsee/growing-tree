import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const RootLayout = lazy(() => import('./layout/RootLayout'));
const ChangeTreeName = lazy(() => import('./pages/ChangeTreeName'));
const Collection = lazy(() => import('./pages/Collection'));
const Home = lazy(() => import('./pages/Home'));
const List = lazy(() => import('./pages/List'));
const ListDetail = lazy(() => import('./pages/ListDetail'));
const ListEdit = lazy(() => import('./pages/ListEdit'));
const Main = lazy(() => import('./pages/Main'));
const Setting = lazy(() => import('./pages/Setting'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const TreeName = lazy(() => import('./pages/TreeName'));
const Withdrawal = lazy(() => import('./pages/Withdrawal'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));

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
