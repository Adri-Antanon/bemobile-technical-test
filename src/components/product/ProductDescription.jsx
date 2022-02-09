import styles from './ProductDescription.module.css';

const ProductDescription = ({ product }) => (
  <article className={styles.description}>
    <h3>Description</h3>
    <ul />
    {Object.entries(product).map(([key, value]) => (
      <li key={key}>
        {`${key}: ${value}`}
      </li>
    ))}
  </article>
);

export default ProductDescription;
