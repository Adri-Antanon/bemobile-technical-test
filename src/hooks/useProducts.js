import { useMemo, useCallback, useState, useEffect } from 'react';

import config from '../config/constants';

const useProducts = (search) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${config.API_URL}/product`);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const devicesData = await response.json();

      setProductList(devicesData);
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
