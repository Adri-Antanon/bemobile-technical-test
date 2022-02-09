import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDescription from '../components/product/ProductDescription';
import ProductImage from '../components/product/ProductImage';
import DetailContainer from '../components/UI/DetailContainer';

import getExpirationDate from '../components/helpers/expirationTime';
import config from '../config/constants';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const ProductDetailsPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  const fetchProductDetailHandler = useCallback(async () => {
    setIsLoading(true);

    const { expirationDate, today } = getExpirationDate();

    try {
      const product = await JSON.parse(localStorage.getItem(params.productId));

      if (!product || today > product.date) {
        const response = await fetch(
          `${config.API_URL}/product/${params.productId}`,
        );
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const deviceData = await response.json();
        localStorage.setItem(
          params.productId,
          JSON.stringify({
            date: expirationDate,
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

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <DetailContainer>
      <ProductImage
        imgUrl={productDetail.imgUrl}
        name={`${productDetail.brand}-${productDetail.model}`}
      />
      <section>
        <ProductDescription product={productDescription} />
        <article>ACTIONS</article>
      </section>
    </DetailContainer>
  );
};

export default ProductDetailsPage;
