import { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import getExpirationDate from '../helpers/expirationTime';

import config from '../config/constants';

const useProducts = (search) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { expirationDate } = getExpirationDate();
  const expirationDateRef = useRef(expirationDate).current;

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);

    const { today } = getExpirationDate();

    try {
      const products = await JSON.parse(localStorage.getItem('products'));

      if (!products || today > products.date) {
        const response = await fetch(`${config.API_URL}/product`);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const devicesData = await response.json();
        localStorage.setItem(
          'products',
          JSON.stringify({
            date: expirationDateRef,
            value: devicesData,
          }),
        );

        setProductList(devicesData);
        setIsLoading(false);

        return;
      }
      setProductList(products.value);
    } catch (error) {
      throw new Error(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const filteredProducts = useMemo(() =>
    productList.filter((product) => {
      const brandAndModel = `${product.brand}-${product.model}`;
      return brandAndModel.toLowerCase().includes(search.toLowerCase());
    }),
  );

  return { isLoading, filteredProducts };
};

export default useProducts;
