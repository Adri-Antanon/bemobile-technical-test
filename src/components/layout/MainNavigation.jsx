import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <NavLink
        to="/products"
        className={(navData) => (navData.isActive ? styles.active : '')}
      >
        Bemobile
      </NavLink>
    </div>
    <nav className={styles.nav}>
      <p>CARRITO: 0</p>
    </nav>
  </header>
);

export default MainNavigation;
