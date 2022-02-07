import styles from './ProductList.module.css';

const ProductList = () => {
  const array = [
    { title: 'Test', id: '1' },
    { title: 'Test2', id: '2' },
    { title: 'Test3', id: '3' },
    { title: 'Test4', id: '4' },
    { title: 'Test5', id: '5' },
    { title: 'Test6', id: '6' },
    { title: 'Test7', id: '7' },
    { title: 'Test8', id: '8' },
    { title: 'Test9', id: '9' },
    { title: 'Test10', id: '10' },
    { title: 'Test11', id: '11' },
    { title: 'Test12', id: '12' },
    { title: 'Test13', id: '13' },
    { title: 'Test14', id: '14' },
  ];
  return (
    <section className={styles.productList}>
      {array.map((data) => (
        <p key={data.id} className={styles.product}>
          {data.title}
        </p>
      ))}
    </section>
  );
};

export default ProductList;
