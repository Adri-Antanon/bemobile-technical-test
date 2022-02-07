import MainNavigation from './MainNavigation';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <>
    <MainNavigation />
    <main className={styles.main}>{children}</main>
  </>
);

export default Layout;
