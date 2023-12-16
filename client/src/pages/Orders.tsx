import { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard';
import { gql, useQuery } from '@apollo/client';
import { useRecoilState, useRecoilValue } from 'recoil';
import { orderState } from '../store/atoms/orders';
import { userState } from '../store/atoms/user';

const Orders = () => {
  const [openTab, setOpenTab] = useState(1);
  const user = useRecoilValue(userState);
  const [orders, setOrder] = useRecoilState(orderState)

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

  const { data, loading, refetch } = useQuery(GET_ORDERS, {
    variables: { id },
  });


  useEffect(() => {

    refetch()
    console.log('working');

    if (!loading) setOrder(data.getOrders);
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
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
            {data.getOrders.length > 0 ? (
              data.getOrders.map(
                (order: any) =>
                  !order.status && (
                    <div key={order.id} className='mb-2 w-fit md:w-full'>
                      <OrderCard order={order} />
                    </div>
                  ),
              )
            ) : (
              <p>No current orders.</p>
            )}
          </section>
        ) : (
          <section className='mb-8'>
            {data.getOrders.length > 0 ? (
              data.getOrders.map(
                (order: any) =>
                  order.status && (
                    <div key={order.id} className='mb-2 w-fit md:w-full'>
                      <OrderCard order={order} />
                    </div>
                  ),
              )
            ) : (
              <p>No past orders.</p>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Orders;
