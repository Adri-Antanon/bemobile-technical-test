import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import config from '../../config/constants';

const ProductActions = ({ options, productId }) => {
  const { register, handleSubmit } = useForm();
  const [productInfo, setProductInfo] = useState('');

  const { colors, storages } = options;

  const addToCart = async (product) => {
    const response = await fetch(`${config.API_URL}/cart`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const cartAmount = await response.json();
    console.log(cartAmount);
  };

  useEffect(() => {
    if (productInfo) {
      addToCart(productInfo);
    }
  }, [productInfo, addToCart]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const { color, storage } = data;
        setProductInfo({
          id: productId,
          colorCode: color,
          storageCode: storage,
        });
      })}
    >
      <select {...register('color')}>
        {colors.length > 0 ? (
          colors.map((color) => (
            <option key={color.code} value={color.code}>
              {color.name}
            </option>
          ))
        ) : (
          <option disabled> No Colors</option>
        )}
      </select>
      <select {...register('storage')}>
        {storages.length > 0 ? (
          storages.map((storage) => (
            <option key={storage.code} value={storage.code}>
              {storage.name}
            </option>
          ))
        ) : (
          <option disabled>No Storages</option>
        )}
      </select>
      <input value="Add to Cart" type="submit" />
    </form>
  );
};

export default ProductActions;
