import styles from './DetailContainer.module.css';

const DetailContainer = ({ children }) => (
  <div className={styles.productDetailContainer}>{children}</div>
);

export default DetailContainer;
