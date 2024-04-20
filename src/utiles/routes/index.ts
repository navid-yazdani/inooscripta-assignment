import {lazy} from 'react';
import {createBrowserRouter} from "react-router-dom";

const AppLayout = lazy(() => import("../../layout/AppLayout.tsx"));
const Home = lazy(() => import('../../pages/Home'));

const Routes = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
    ]
  }
]);

export default Routes;
