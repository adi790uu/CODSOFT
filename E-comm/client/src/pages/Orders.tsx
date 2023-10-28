import { useState } from 'react';
import OrderCard from '../components/OrderCard';

const Orders = () => {
  const [openTab, setOpenTab] = useState(1);

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

  const pastOrders = [
    {
      id: 3,
      product: 'Product C',
      quantity: 1,
      price: 39.99,
    },
    {
      id: 4,
      product: 'Product D',
      quantity: 4,
      price: 9.99,
    },
  ];

  return (
    <div className='min-h-screen font-body'>
      <p className='text-center font-title text-4xl mt-10 font-semibold'>
        Orders
      </p>
      <div className='divider'></div>
      <div className='tabs w-full flex justify-center'>
        <div className='flex justify-center w-3/4'>
          <button
            className={`tab tab-bordered ${
              openTab === 1 ? 'tab-active' : ''
            } w-full`}
            onClick={() => setOpenTab(1)}
          >
            Current
          </button>
          <button
            className={`tab tab-bordered ${
              openTab === 2 ? 'tab-active' : ''
            } w-full`}
            onClick={() => setOpenTab(2)}
          >
            Past
          </button>
        </div>
      </div>
      <div className='container mx-auto p-4 w-fit md:w-full'>
        {openTab === 1 ? (
          <section className='mb-8'>
            {currentOrders.map((order) => (
              <div key={order.id} className='mb-2 w-fit md:w-full'>
                <OrderCard order={order} />
              </div>
            ))}
          </section>
        ) : (
          <section className='mb-8'>
            {pastOrders.map((order) => (
              <div key={order.id} className='mb-2 w-fit md:w-full'>
                <OrderCard order={order} />
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default Orders;
