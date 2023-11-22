import ProductDisplay from './ProductDisplay';
import { useRecoilValue } from 'recoil';
import { useBooks } from '../store/selectors/books';

function HighestRatedCarousel() {
  const books = useRecoilValue(useBooks);
  console.log(books);

  const filteredBooks = books.slice().sort((a, b) => b.rating - a.rating);
  console.log(filteredBooks);
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
