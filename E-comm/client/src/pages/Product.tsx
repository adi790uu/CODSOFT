import ProductCarousel from '../components/ProductDetails';
import RecommendedProducts from '../components/RecommendedProductsCarousel';
import Heading from '../components/Heading';
import { useMutation, gql } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const incView = gql`
    mutation Mutation($id: ID) {
      increaseView(id: $id)
    }
  `;
  const [increaseView] = useMutation(incView, { variables: { id } });

  function inc() {
    increaseView({ variables: { id } });
  }

  useEffect(() => {
    inc();
  }, []);
  return (
    <>
      <ProductCarousel id={id} />
      <div className='divider'></div>
      <Heading heading='Similar Products' />

      <div className='mt-16 mb-16'>
        <div>
          <p className='text-neutral-300 tracking-wider font-semibold font-body ml-4 mb-10 text-xl text-center'>
            Swipe &rarr; to view products.
          </p>
        </div>
        <RecommendedProducts />
      </div>
    </>
  );
};

export default Product;
