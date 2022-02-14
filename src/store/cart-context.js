import { createContext } from 'react';

const CartContext = createContext({
  totalQuantity: 0,
  addToCart: () => {},
});

export default CartContext;
