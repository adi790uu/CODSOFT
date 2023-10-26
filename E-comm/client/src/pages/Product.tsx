import ProductCarousel from '../components/ProductCarousel';
import RecommendedProducts from '../components/RecommendedProducts';
import Heading from '../components/Heading';

const Product = () => {
  return (
    <>
      <ProductCarousel />
      <div className='divider'></div>
      <Heading heading='Similar Products' />
      <div className='mt-10 mb-16'>
        <RecommendedProducts />
      </div>
    </>
  );
};

export default Product;
