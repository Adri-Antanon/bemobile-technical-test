import { Link } from 'react-router-dom';

import styles from './ProductListItem.module.css';

const ProductListItem = ({ product }) => {
  const { id, imgUrl, brand, model, price } = product;

  return (
    <Link to={`/products/${id}`}>
      <div key={id} className={styles.product}>
        <div className={styles.image}>
          <img src={imgUrl} alt={`${brand} - ${model}`} />
        </div>
        <div className={styles.text}>
          <p>{`${brand} - ${model}`}</p>
          <p>{ price ? `${price} €` : 'Free'}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;
