import Navbar from '../widgets/Navbar/ui/Navbar';
import { Outlet } from 'react-router-dom';
import BlockSearch from '../../pages/BlockSearch/BlockSearch';
import { JSX } from 'react';


export default function Layout(): JSX.Element {

  return (
    <>
      <Navbar />
      <BlockSearch/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
