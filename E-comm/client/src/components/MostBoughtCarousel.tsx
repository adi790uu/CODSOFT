import { useRecoilValue } from 'recoil';
import { useBooks } from '../store/selectors/books';
import ProductDisplay from './ProductDisplay';

function MostBoughtCarousel() {
  const books = useRecoilValue(useBooks);
  return (
    <div className='carousel carousel-end w-[95%] md:mr-4 md:ml-4'>
      {books.map((product: any) => (
        <div
          className='carousel-item flex justify-center transition-transform transform hover:scale-105'
          key={product.id}
        >
          <ProductDisplay product={product} />
        </div>
      ))}
    </div>
  );
}

export default MostBoughtCarousel;
