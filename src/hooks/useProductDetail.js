import { useState, useCallback, useEffect, useRef } from 'react';

import config from '../config/constants';
import getExpirationDate from '../helpers/expirationTime';

const useProductDetail = (productId) => {
  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { expirationDate } = getExpirationDate();
  const expirationDateRef = useRef(expirationDate).current;

  const fetchProductDetailHandler = useCallback(async () => {
    setIsLoading(true);

    const { today } = getExpirationDate();

    try {
      const product = await JSON.parse(localStorage.getItem(productId));

      if (!product || today > product.date) {
        const response = await fetch(`${config.API_URL}/product/${productId}`);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const deviceData = await response.json();
        localStorage.setItem(
          productId,
          JSON.stringify({
            date: expirationDateRef,
            value: deviceData,
          }),
        );

        setProductDetail(deviceData);
        setIsLoading(false);

        return;
      }
      setProductDetail(product.value);
    } catch (error) {
      throw new Error(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductDetailHandler();
  }, [fetchProductDetailHandler]);

  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  } = productDetail;

  const productDescription = {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  };

  return { productDetail, productDescription, isLoading };
};

export default useProductDetail;
