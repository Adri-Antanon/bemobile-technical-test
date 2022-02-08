import { useRef, useState, useCallback } from 'react';

import LoadingSpinner from '../UI/LoadingSpinner';

import styles from './ProductList.module.css';
import ProductListItem from './ProductListItem';
import useProducts from '../../hooks/useProducts';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const { filteredProducts, isLoading } = useProducts(search);

  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <div className={styles.search}>
        <input
          ref={searchInput}
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
        />
      </div>
      <section className={styles.productList}>
        {filteredProducts.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default ProductList;
