import ProductDetails from '../components/ProductDetails';
import RecommendedProducts from '../components/RecommendedProductsCarousel';
import Heading from '../components/Heading';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return (
    <div className='container m-auto'>
      <ProductDetails id={id} />

      {/* <Heading heading='Similar Products' />

      <div className='mt-16 mb-16'>
        <div>
          <p className='text-neutral-300 tracking-wider font-semibold font-body ml-4 mb-10 text-xl text-center'>
            Swipe &rarr; to view products.
          </p>
        </div>
        <RecommendedProducts />
      </div> */}
    </div>
  );
};

export default Product;
