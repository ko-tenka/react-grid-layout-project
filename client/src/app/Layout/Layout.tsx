import styles from './Layout.module.css';
import Navbar from '../widgets/Navbar/ui/Navbar';
import { Sidebar } from '../widgets/SideBar';
import { Outlet } from 'react-router-dom';


export default function Layout(): JSX.Element {

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className={styles.root}>
        <Outlet />
      </main>
    </>
  );
}
