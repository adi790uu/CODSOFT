import { useRecoilState } from 'recoil';
import ProductDisplay from './ProductDisplay';
import { booksState } from '../store/atoms/books';

function MostBoughtCarousel() {
  const [books] = useRecoilState(booksState);
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
