import styles from './ProductImage.module.css';

const ProductImage = ({ imgUrl, name }) => (
  <article className={styles.imageContainer}>
    <img src={imgUrl} alt={name} />
  </article>
);

export default ProductImage;
