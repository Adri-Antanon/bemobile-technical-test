import { useReducer, useEffect } from 'react';

import CartContext from './cart-context';

const ADD = 'ADD';

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
    { totalQuantity: 0 },
  );

  const addItemToCartHandler = (count) => {
    dispatchCartAction({ type: ADD, count });
  };

  let totalQuantity;

  useEffect(() => {
    const totalQuantityData = localStorage.getItem('totalQuantity');

    const totalQuantitySaved = totalQuantityData && JSON.parse(totalQuantityData);

    if (totalQuantitySaved) {
      totalQuantity = totalQuantitySaved;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'totalQuantity',
      JSON.stringify(cartState.totalQuantity),
    );
  }, [cartState.totalQuantity]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const cartContext = {
    totalQuantity: totalQuantity ?? cartState.totalQuantity,
    addToCart: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
