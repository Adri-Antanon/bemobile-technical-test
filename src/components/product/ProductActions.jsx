import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';

import config from '../../config/constants';
import CartContext from '../../store/cart-context';

import styles from './ProductActions.module.css';

const ProductActions = ({ options, productId }) => {
  const { register, handleSubmit } = useForm();
  const [productInfo, setProductInfo] = useState('');
  const cartCtx = useContext(CartContext);

  const { colors, storages } = options;

  useEffect(() => {
    const addToCart = async (product) => {
      const response = await fetch(`${config.API_URL}/cart`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const cartData = await response.json();

      cartCtx.addToCart(cartData.count);

      // localStorage.setItem(
      //   'totalQuantity',
      //   JSON.stringify(cartCtx.totalQuantity),
      // );
    };

    if (productInfo) {
      addToCart(productInfo);
    }
  }, [productInfo]);

  return (
    <article className={styles.actions}>
      <h3>Actions</h3>
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
        <div className={styles.selectContainer}>
          <p>Color</p>
          <p>Storage</p>
        </div>
        <div className={styles.selectContainer}>
          <select id="color" {...register('color')}>
            {colors.map((color) => (
              <option key={color.code} value={color.code}>
                {color.name}
              </option>
            ))}
          </select>
          <select {...register('storage')}>
            {storages.map((storage) => (
              <option key={storage.code} value={storage.code}>
                {storage.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputContainer}>
          <input value="Add to Cart" type="submit" />
        </div>
      </form>
    </article>
  );
};

export default ProductActions;
