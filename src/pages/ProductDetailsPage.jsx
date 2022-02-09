import { useParams } from 'react-router-dom';
import ProductActions from '../components/product/ProductActions';

import ProductDescription from '../components/product/ProductDescription';
import ProductImage from '../components/product/ProductImage';
import DetailContainer from '../components/UI/DetailContainer';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import useProductDetail from '../hooks/useProductDetail';

const ProductDetailsPage = () => {
  const params = useParams();

  const { isLoading, productDescription, productDetail } = useProductDetail(
    params.productId,
  );

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <DetailContainer>
      <ProductImage
        imgUrl={productDetail.imgUrl}
        name={`${productDetail.brand}-${productDetail.model}`}
      />
      <section>
        <ProductDescription product={productDescription} />
        <article>
          {productDetail.options && (
            <ProductActions
              options={productDetail.options}
              productId={productDetail.id}
            />
          )}
        </article>
      </section>
    </DetailContainer>
  );
};

export default ProductDetailsPage;
