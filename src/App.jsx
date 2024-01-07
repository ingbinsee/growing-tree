import {RouterProvider} from 'react-router-dom';
import router from './routes';
import Header from './layout/Header';

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
