import { useEffect } from 'react';

import config from '../config/constants';

const useCart = (productInfo) => {
  let cartAmount;
  const addToCart = async (product) => {
    const response = await fetch(`${config.API_URL}/cart`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    cartAmount = await response.json();
  };

  useEffect(() => {
    if (productInfo) {
      addToCart(productInfo);
    }
  }, [productInfo, addToCart]);

  return { cartAmount };
};

export default useCart;
