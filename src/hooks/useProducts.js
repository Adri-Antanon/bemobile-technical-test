import { useMemo, useCallback, useState, useEffect } from 'react';
import getExpirationDate from '../components/helpers/expirationTime';

import config from '../config/constants';

const useProducts = (search) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);

    const { expirationDate, today } = getExpirationDate();

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
            date: expirationDate,
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

/*
Usar locaslStorage, seteamos la fecha que queremos como límite con el tomorrow
const tomorrow = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
      const today = new Date().getTime();
      // REFACTOR
      // Copiar en todos los widgets de la home que tenga que cambiar los facets a llamadas únicas

      try {
        // ALL BARS ON THE DDBB
        const localTotalBars = await JSON.parse(
          await localStorage.getItem("widgetBarsTotalBars")
        );
        if (!localTotalBars || today > localTotalBars.date) {
          const totalBars = await API.aggregation({
            endpoint: "/bars",
            multiple: true,
            query: {
              agg: JSON.stringify([{ $count: "count" }]),
            },
          });
          dataBars.sectors[3].value = totalBars[0].count;
          await localStorage.setItem(
            "widgetBarsTotalBars",
            await JSON.stringify({
              date: tomorrow,
              value: totalBars[0].count,
            })
          );
        } else {
          dataBars.sectors[3].value = localTotalBars.value;
        }

*/
