import { NavLink } from 'react-router-dom';

import CartIcon from './CartIcon';

import styles from './MainNavigation.module.css';

const MainNavigation = () => (
  <header className={styles.header}>
    <div>
      <div className={styles.logo}>
        <NavLink
          to="/products"
          className={(navData) => (navData.isActive ? styles.active : '')}
        >
          Bemobile
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <p>{3}</p>
      </nav>
    </div>
    <nav className={styles.breadcrumb}>
      <ul>
        <li>
          <NavLink
            to="/products"
            className={(navData) => (navData.isActive ? styles.active : '')}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
