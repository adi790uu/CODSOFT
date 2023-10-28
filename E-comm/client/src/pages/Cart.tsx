import CartProduct from '../components/CartProduct';

const Cart = () => {
  const currentOrders = [
    {
      id: 1,
      product: 'Product A',
      quantity: 3,
      price: 25.99,
    },
    {
      id: 2,
      product: 'Product B',
      quantity: 2,
      price: 14.99,
    },
  ];

  let price = 0;

  currentOrders.map((order) => {
    price += order.price;
  });
  return (
    <div className='min-h-screen font-body tracking-wider'>
      <p className='text-center font-title text-4xl mt-10 font-semibold'>
        My Cart
      </p>
      <div className='divider'></div>
      <section className='mb-8'>
        {currentOrders.map((order) => (
          <div key={order.id} className='w-fit md:w-3/4 m-auto'>
            <CartProduct order={order} />
            <div className='divider'></div>
          </div>
        ))}
        <div className='w-fit md:w-3/4 shadow-lg rounded-lg p-4 m-auto'>
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
