import ProductDescription from '../components/product/ProductDescription';
import ProductImage from '../components/product/ProductImage';
import DetailContainer from '../components/UI/DetailContainer';

import product from '../product.json';

const ProductDetailsPage = () => {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  } = product;

  const productDescription = {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    weight,
  };

  return (
    <DetailContainer>
      <ProductImage
        imgUrl={product.imgUrl}
        name={`${product.brand}-${product.model}`}
      />
      <section>
        <ProductDescription product={productDescription} />
        <article>ACTIONS</article>
      </section>
    </DetailContainer>
  );
};

export default ProductDetailsPage;
