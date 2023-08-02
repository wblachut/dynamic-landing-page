import { Outlet } from 'react-router-dom';
import { NavLinks, PagesDataProp } from '../header/NavLinks/NavLinks';

const Layout = ({ pagesData }: PagesDataProp) => {
  return (
    <>
      <NavLinks pagesData={pagesData ?? []} />
      <Outlet />
    </>
  );
};

export default Layout;
