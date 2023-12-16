import { useRecoilState } from 'recoil';
import { booksState } from '../store/atoms/books';
const SearchResults = ({ query }: any) => {
  const [books] = useRecoilState(booksState);
  console.log(books);

  const filteredProducts = books
    .filter((product: any) =>
      product.title.toLowerCase().includes(query.toLowerCase()),
    )
    .slice(0, 5);

  console.log(filteredProducts);

  return (
    <div className='absolute top-full left-0 bg-neutral-100 border border-gray-300 w-full mt-2 rounded-md overflow-hidden z-10'>
      {filteredProducts.map((product: any) => (
        <div
          key={product.id}
          className='p-2 flex w-full hover:bg-slate-300 shadow-md'
        >
          <div className='w-1/6 md:w-1/12'>
            <img src={product.imageUrl} className='object-fill' />
          </div>
          <div className='flex flex-col ml-5 justify-around text-neutral-800 w-5/6'>
            <span className='font-body'>{product.title}</span>
            <span className='font-body'>Author: {product.author}</span>
          </div>
          <span
            className='text-2xl
            text-yellow-500 flex justify-end items-center mr-2'
          >
            ★
            <span className='text-neutral-700 text-xl font-body flex flex-row items-center'>
              {product.rating}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
