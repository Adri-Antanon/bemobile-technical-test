import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import products from '../../products.json';
import LoadingSpinner from '../UI/LoadingSpinner';

import styles from './ProductList.module.css';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, []);

  if (productList.length === 0) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className={styles.productList}>
      {productList.map((product) => (
        <Link to={`/products/${product.id}`}>
          <div key={product.id} className={styles.product}>
            <div className={styles.image}>
              <img
                src={product.imgUrl}
                alt={`${product.brand} - ${product.model}`}
              />
            </div>
            <div className={styles.text}>
              <p>{`${product.brand} - ${product.model}`}</p>
              <p>{`${product.price} €`}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductList;
