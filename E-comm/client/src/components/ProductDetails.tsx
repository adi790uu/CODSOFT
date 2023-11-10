import Img2 from '../assets/books/book6.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Pricing from './Pricing';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useUser } from '../store/selectors/user';
import { useRecoilValue } from 'recoil';

const ProductCarousel = ({ id }: any) => {
  const user = useRecoilValue(useUser);
  console.log(user);

  const getBook = gql`
    query Query($id: String) {
      getBookById(id: $id) {
        author
        comments {
          description
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

  const { data } = useQuery(getBook, { variables: { id } });
  const [book, setBook] = useState({});

  useEffect(() => {
    if (data) {
      setBook(data.getBookById);
    }
  }, [data, setBook]);

  console.log(book);

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
    <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 m-auto mt-10'>
      <div className=''>
        <div className='min-w-lg p-4 rounded-lg overflow-hidden'>
          <Carousel showArrows={true} showThumbs={true}>
            <div className='rounded-md'>
              <img className='rounded-md' src={book.imageUrl} alt='Product 1' />
            </div>
            <div>
              <img className='rounded-md' src={Img2} alt='Product 2' />
            </div>
          </Carousel>
        </div>
        <div className='divider'></div>
        <div className='mt-10 min-w-full flex flex-col md:flex-row md:justify-evenly'>
          <button
            onClick={handleClick}
            className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-emerald-900 hover:bg-emerald-700 text-neutral-300'
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className='p-4 md:ml-10'>
        <p className='font-body font-semibold text-3xl text-neutral-300 pl-4 mt-4 md:mt-0'>
          {book.title}
        </p>
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
            <div className='stat-title'>Page Views</div>
            <div className='stat-value text-secondary'>{book.views}</div>
          </div>

          <div className='stat'>
            <div className='stat-value'>{book.stock}</div>
            <div className='stat-title'>Stock Remaining</div>
          </div>
        </div>
        <Pricing price={book.price} />
        <div className='mt-14 rounded-lg shadow-md shadow-neutral-700 overflow-x-auto overflow-y-auto w-full'>
          <p className='pl-4 pt-4 font-body'>Product Description :</p>
          <div className='divider'></div>
          <article className='prose pl-4 pr-4 pb-4 font-body tracking-wide h-[32rem] font-normal text-justify text-lg'>
            {book && book.description}
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
