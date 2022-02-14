import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CartIcon from './CartIcon';
import CartContext from '../../store/cart-context';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.totalQuantity;

  return (
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
          <p>{numberOfCartItems}</p>
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
};

export default MainNavigation;
