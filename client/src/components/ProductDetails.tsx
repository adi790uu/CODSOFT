import Pricing from './Pricing';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useUser } from '../store/selectors/user';
import { useRecoilValue } from 'recoil';
import ReviewSection from './ReviewSection';
import Heading from './Heading';
import { Loader } from 'react-feather';

const ProductDetails = ({ id }: any) => {
  const user = useRecoilValue(useUser);
  console.log(user);

  const getBook = gql`
    query Query($id: String) {
      getBookById(id: $id) {
        author
        comments {
          description
          rating
          user {
            name
          }
        }
        description
        imageUrl
        price
        rating
        stock
        title
        views
        bought
      }
    }
  `;

  const addToCart = gql`
    mutation Mutation($input: createCartItem) {
      addToCart(input: $input) {
        userId
        bookId
      }
    }
  `;

  const [Cart] = useMutation(addToCart);

  const { data, error, loading } = useQuery(getBook, { variables: { id } });

  console.log(loading);

  loading ? <div className='h-screen'>Loading...</div> : '';

  console.log(error);

  console.log(data);

  const [book, setBook] = useState({});

  useEffect(() => {
    if (data) {
      setBook(data.getBookById);
    }
  }, [data, setBook]);

  const handleClick = async (e: any) => {
    e.preventDefault();
    const input = {
      bookId: id,
      userId: user.id,
    };
    const cart = await Cart({ variables: { input } });
    console.log(cart);
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 m-auto mt-10'>
        <div className='m-auto shadow-xl'>
          <p className='font-body font-semibold text-3xl text-neutral-300 pl-4 mt-4 text-center tracking-wider'>
            {book.title}
          </p>
          <div className='w-full p-10 rounded-lg overflow-hidden m-auto flex justify-center'>
            <img className='rounded-md' src={book.imageUrl} alt='Product 1' />
          </div>

          <div className='mt-4 min-w-full flex flex-col mb-4'>
            <button
              onClick={handleClick}
              className='btn-md btn bg-emerald-900 hover:bg-emerald-700 text-neutral-300'
            >
              Add To Cart
            </button>
            <button className='btn-md btn mt-2  bg-red-700 hover:bg-red-500 text-neutral-300'>
              Share
            </button>
          </div>
        </div>

        <div className='p-4 md:ml-10'>
          <div className='stats shadow mt-10 flex flex-col md:flex-row'>
            <div className='stat'>
              <div className='stat-title'>Rating</div>
              <div className='flex items-center'>
                <span
                  className={`text-3xl ${
                    book.rating >= 1 ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
                <span
                  className={`text-3xl ${
                    book.rating >= 2 ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
                <span
                  className={`text-3xl ${
                    book.rating >= 3 ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
                <span
                  className={`text-3xl ${
                    book.rating >= 4 ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
                <span
                  className={`text-3xl ${
                    book.rating === 5 ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              </div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-8 h-8 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  ></path>
                </svg>
              </div>
              <div className='stat-title'>Bought by</div>
              <div className='stat-value text-secondary'>{book.bought}</div>
            </div>

            <div className='stat'>
              <div className='stat-value'>{book.stock}</div>
              <div className='stat-title'>Stock Remaining</div>
            </div>
          </div>
          <Pricing price={book.price} />
          <div className='mt-14 rounded-lg shadow-md overflow-x-auto overflow-y-auto w-full'>
            <p className='pl-4 pt-4 font-body'>Product Description :</p>
            <div className='divider'></div>
            <article className='prose pl-4 pr-4 pb-4 font-body tracking-wide h-[32rem] font-normal text-justify text-lg'>
              {book && book.description}
            </article>
          </div>
        </div>
      </div>
      <Heading heading='Reviews' />
      <div className='mt-16 mb-16'>
        <ReviewSection comments={data?.getBookById?.comments} />
      </div>
    </div>
  );
};

export default ProductDetails;
