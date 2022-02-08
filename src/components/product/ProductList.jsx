import { useEffect, useRef, useState, useCallback, useMemo } from 'react';

import LoadingSpinner from '../UI/LoadingSpinner';

import styles from './ProductList.module.css';
import ProductListItem from './ProductListItem';
import config from '../../config/constants';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const searchInput = useRef(null);

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
      console.error(error.message);
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
