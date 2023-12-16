import { useRecoilState } from 'recoil';
import { orderState } from '../store/atoms/orders';
import { CheckSquare } from 'react-feather';
import { gql, useMutation } from '@apollo/client';

const OrdersForm = () => {
  const [orders, setOrders] = useRecoilState(orderState);

  const UPDATE_STATUS = gql`
    mutation Mutation($updateStatusId: ID!) {
      updateStatus(orderId: $updateStatusId)
    }
  `;

  const [updateStatus] = useMutation(UPDATE_STATUS);

  console.log(orders);

  const handleCompleteOrder = async (orderId) => {
    try {
      const { data, errors } = await updateStatus({
        variables: { updateStatusId: orderId },
      });

      if (errors) {
        console.error(errors); // Log any GraphQL errors
        return;
      }

      console.log(data); // Log the response data

      const updatedOrders = orders.map((order) =>
        order.id === orderId ? { ...order, status: true } : order,
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error('Error in handleCompleteOrder:', error);
    }
  };

  const pendingOrders = orders.filter((order) => !order.status);

  return (
    <div className='max-w-screen-lg mx-auto mt-8'>
      <h2 className='text-3xl font-semibold mb-4'>Orders Form</h2>
      <ul className='grid grid-cols-1 gap-4'>
        {pendingOrders.map((order) => (
          <li
            key={order.id}
            className='bg-white rounded-lg overflow-hidden shadow-md'
          >
            <div className='p-4'>
              <div className='mb-4'>
                <p className='text-lg font-semibold text-neutral-800'>
                  {order.book.title}
                </p>
                <p className='text-gray-600 mb-2 font-medium'>
                  Order ID: {order.id}
                </p>
                <p className='text-gray-600 mb-2 font-medium'>
                  Price: Rs{order.book.price}
                </p>
                <p className='text-gray-600 mb-2 font-medium '>
                  Status:{' '}
                  <span className='text-red-800'>
                    {order.status ? 'Complete' : 'Pending'}
                  </span>
                </p>
              </div>
              {!order.status && (
                <button
                  onClick={() => handleCompleteOrder(order.id)}
                  className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full'
                >
                  <CheckSquare size={16} className='mr-2' />
                  Mark as Complete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersForm;
