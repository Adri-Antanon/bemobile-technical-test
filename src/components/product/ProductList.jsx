import { useEffect, useState } from 'react';

import products from '../../products.json';
import LoadingSpinner from '../UI/LoadingSpinner';

import styles from './ProductList.module.css';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, []);

  if (productList.length === 0) {
    //   Esto es temporal, para probar el Loading Spinner
    //  la condición será otra ya que cuando busco puede ser 0
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className={styles.productList}>
      {productList.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
