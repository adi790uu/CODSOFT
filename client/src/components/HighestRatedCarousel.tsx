import ProductDisplay from './ProductDisplay';
import { useRecoilState } from 'recoil';
import { booksState } from '../store/atoms/books';

function HighestRatedCarousel() {
  const [books] = useRecoilState(booksState);

  const filteredBooks = books.slice().sort((a, b) => b.rating - a.rating);
 
  return (
    <div className='carousel carousel-end w-[95%] md:mr-4 md:ml-4'>
      {filteredBooks.map((product) => (
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

export default HighestRatedCarousel;
