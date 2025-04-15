import styles from './Layout.module.css';
import Navbar from '../widgets/Navbar/ui/Navbar';
import { Outlet } from 'react-router-dom';
import BlockSearch from '../../pages/BlockSearch/BlockSearch';


export default function Layout(): JSX.Element {

  return (
    <>
      <Navbar />
      <BlockSearch/>
      <main className={styles.root}>
        <Outlet />
      </main>
    </>
  );
}
