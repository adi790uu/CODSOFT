import ProductDisplay from './ProductDisplay';
import { useQuery, gql } from '@apollo/client';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { booksState } from '../store/atoms/books';
import { useEffect } from 'react';
import { useBooks } from '../store/selectors/books';

function MostBoughtCarousel() {
  const setBooks = useSetRecoilState(booksState);
  const books = useRecoilValue(useBooks);
  const getBooks = gql`
    query Query {
      getBooks {
        author
        description
        id
        price
        rating
        stock
        title
        imageUrl
        category
      }
    }
  `;
  const { loading, error, data } = useQuery(getBooks);

  // Use a useEffect to update Recoil state when data is available
  useEffect(() => {
    if (data) {
      setBooks(data.getBooks);
    }
  }, [data, setBooks]);

  console.log(books);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='carousel carousel-end w-[95%] md:mr-4 md:ml-4'>
      {books.map((product: any) => (
        <div className='carousel-item flex justify-center' key={product.id}>
          <ProductDisplay product={product} />
        </div>
      ))}
    </div>
  );
}

export default MostBoughtCarousel;
