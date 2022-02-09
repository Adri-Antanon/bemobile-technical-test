import ProductImage from '../components/product/ProductImage';
import DetailContainer from '../components/UI/DetailContainer';

import product from '../product.json';

const ProductDetailsPage = () => (
  <DetailContainer>
    <ProductImage
      imgUrl={product.imgUrl}
      name={`${product.brand}-${product.model}`}
    />
    <section>
      <article>2</article>
      <article>3</article>
    </section>
  </DetailContainer>
);

export default ProductDetailsPage;
