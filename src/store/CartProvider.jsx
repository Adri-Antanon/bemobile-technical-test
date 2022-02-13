import { useState, useEffect, useRef } from 'react';

import CartContext from './cart-context';
import getExpirationDate from '../helpers/expirationTime';

const localStorageData = JSON.parse(localStorage.getItem('totalQuantity'));

let stampedValue;
if (localStorageData !== null) {
  stampedValue = localStorageData.value;
}

const CartProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(stampedValue || 0);
  const { expirationDate, today } = getExpirationDate();
  const expirationDateRef = useRef(expirationDate).current;

  const addItemToCartHandler = (count) => {
    setTotalQuantity((prevValue) => prevValue + count);
  };

  useEffect(() => {
    if (today > localStorageData.date) {
      localStorage.removeItem('totalQuantity');
    }

    localStorage.setItem(
      'totalQuantity',
      JSON.stringify({
        date: expirationDateRef,
        value: totalQuantity,
      }),
    );
  }, [totalQuantity]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const cartContext = {
    totalQuantity,
    addToCart: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
