import { gql, useQuery } from '@apollo/client';
import CartProduct from '../components/CartProductCard';
import { useUser } from '../store/selectors/user';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useCart } from '../store/selectors/cart';
import { cartState } from '../store/atoms/cart';
import axios from 'axios';

const Cart = () => {
  const [price, setPrice] = useState(0);
  const cart = useRecoilValue(useCart);
  const setCart = useSetRecoilState(cartState);
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

  const handlePayment = async () => {
    try {
      const {
        data: { key },
      } = await axios.get('http://www.localhost:4000/api/getkey');
      console.log(key);

      const {
        data: { order },
      } = await axios.post('http://localhost:4000/api/checkout', {
        price,
        userId: user.id,
      });
      console.log(order);

      const options = {
        key,
        amount: order.amount,
        currency: 'INR',
        name: 'ShopNest',
        description: 'Tutorial of RazorPay',
        order_id: order.id,
        callback_url: 'http://localhost:4000/api/redirect',
        prefill: {
          name: user.name,
          email: user.email,
          // contact: '9999999999',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#121212',
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  const { data, loading } = useQuery(GET_CART, { variables: { input } });

  useEffect(() => {
    if (data && data.getCart) {
      setCart(data.getCart);
      console.log(cart);
      const total = data?.getCart?.reduce(
        (acc, order) => acc + order.book.price * order.quantity,
        0,
      );
      setPrice(total);
    } else {
      // If data is empty or getCart is undefined, setCart and setPrice to their initial values
      setCart([]);
      setPrice(0);
    }
  }, [data, setCart]);

  return (
    <div className='h-screen font-body tracking-wider'>
      <p className='text-center font-title text-4xl pt-10 font-semibold'>
        My Cart
      </p>
      <div className='divider'></div>
      <section className='mb-8'>
        {loading ? (
          <div className='text-center'>Loading....</div>
        ) : (
          <>
            {cart.length > 0 ? (
              cart.map((order) => (
                <div key={order.id} className='w-fit md:w-3/4 m-auto'>
                  <CartProduct order={{ order }} />
                  <div className='divider'></div>
                </div>
              ))
            ) : (
              <p className='text-center text-3xl tracking-wider'>
                Your cart is empty.
              </p>
            )}
            <div className='w-full md:w-3/4 shadow-lg rounded-lg p-4 m-auto'>
              <p className='text-2xl text-neutral-300 md:w-2/4 m-auto flex justify-end bg-slate-700 rounded-lg p-4 shadow-xl'>
                Total :{' '}
                <span className='font-bold tracking-wider ml-2'>
                  &#x20B9;{price}
                </span>
              </p>
            </div>
            <div className='md:w-1/5 m-auto flex flex-col md:flex-row justify-evenly mt-5'>
              <button className='btn w-2/4 bg-red-800 hover:bg-red-600 text-neutral-300 m-auto md:m-0'>
                Clear Cart
              </button>
              <button
                className='btn w-2/4 bg-green-800 hover:bg-green-600 text-neutral-300 m-auto md:m-0'
                onClick={handlePayment}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
