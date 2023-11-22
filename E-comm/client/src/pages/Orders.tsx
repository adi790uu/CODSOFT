import { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard';
import { gql, useQuery } from '@apollo/client';
import { useUser } from '../store/selectors/user';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useOrder } from '../store/selectors/orders';
import { orderState } from '../store/atoms/orders';

const Orders = () => {
  const [openTab, setOpenTab] = useState(1);
  const user = useRecoilValue(useUser);
  const setOrder = useSetRecoilState(orderState);
  const orders = useRecoilValue(useOrder);

  const GET_ORDERS = gql`
    query Query($id: ID!) {
      getOrders(id: $id) {
        book {
          author
          id
          imageUrl
          price
          title
        }
        id
        quantity
        status
      }
    }
  `;

  const id = user.id;

  const { data, refetch, loading } = useQuery(GET_ORDERS, {
    variables: { id },
  });

  useEffect(() => {
    refetch();
    console.log('working');

    if (!loading) setOrder(data.getOrders);
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className='min-h-screen font-body bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800'>
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
            {orders.map(
              (order: any) =>
                // Check if order.status is truthy before rendering the OrderCard
                !order.status && (
                  <div key={order.id} className='mb-2 w-fit md:w-full'>
                    <OrderCard order={order} />
                  </div>
                ),
            )}
          </section>
        ) : (
          <section className='mb-8'>
            {orders.map(
              (order: any) =>
                order.status && (
                  <div key={order.id} className='mb-2 w-fit md:w-full'>
                    <OrderCard order={order} />
                  </div>
                ),
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Orders;
