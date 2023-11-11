import { gql, useMutation, useQuery } from '@apollo/client';
import CartProduct from '../components/CartProductCard';
import { useUser } from '../store/selectors/user';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useCart } from '../store/selectors/cart';
import { cartState } from '../store/atoms/cart';

const Cart = () => {
  let price = 0;
  const cart = useRecoilValue(useCart);
  const setCart = useSetRecoilState(cartState);
  console.log(cart);

  const user = useRecoilValue(useUser);

  const GET_CART = gql`
    query Query($input: getCartInput) {
      getCart(input: $input) {
        quantity
        book {
          id
          imageUrl
          price
          title
        }
      }
    }
  `;

  const input = {
    userId: user.id,
  };

  const { data } = useQuery(GET_CART, { variables: { input } });

  useEffect(() => {
    if (data) {
      setCart(data.getCart);
    }
  }, [data]);

  console.log(cart);

  cart.map((order: any): any => {
    price += order.book.price;
  });
  return (
    <div className='min-h-screen font-body tracking-wider'>
      <p className='text-center font-title text-4xl mt-10 font-semibold'>
        My Cart
      </p>
      <div className='divider'></div>
      <section className='mb-8'>
        {cart ? (
          cart.map((order) => (
            <div key={order.id} className='w-fit md:w-3/4 m-auto'>
              <CartProduct order={{ order, user }} />
              <div className='divider'></div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <div className='w-full md:w-3/4 shadow-lg rounded-lg p-4 m-auto'>
          <p className='text-2xl text-neutral-300 md:w-2/4 m-auto flex justify-end bg-slate-700 rounded-lg p-4 shadow-xl'>
            Total :{' '}
            <span className='font-bold tracking-wider ml-2'>{price}</span>
          </p>
        </div>
        <div className='md:w-1/5 m-auto flex flex-col md:flex-row justify-evenly mt-5'>
          <button className='btn w-2/4 bg-red-800 hover:bg-red-600 text-neutral-300 m-auto md:m-0'>
            Clear Cart
          </button>
          <button className='btn w-2/4 mt-2 md:mt-0 bg-green-800 hover:bg-green-600 text-neutral-300 m-auto md:m-0 md:ml-4'>
            Continue
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
