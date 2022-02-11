import { useReducer } from 'react';

import CartContext from './cart-context';

// const totalQuantitySaved = await JSON.parse(
//   localStorage.getItem('totalQuantity'),
// );

const defaultCartState = {
  totalQuantity: 0,
};

const ADD = 'ADD';

// eslint-disable-next-line default-param-last
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD: {
      return {
        totalQuantity: state.totalQuantity + action.count,
      };
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );
  const addItemToCartHandler = (count) => {
    dispatchCartAction({ type: ADD, count });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const cartContext = {
    totalQuantity: cartState.totalQuantity,
    addToCart: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
