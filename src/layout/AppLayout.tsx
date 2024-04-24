import {FC} from 'react';
import {Outlet} from "react-router-dom";

const AppLayout: FC = () => {
  return (
    <div className="main">
      <Outlet/>
    </div>
  );
};

export default AppLayout;
