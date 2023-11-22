import Review from './Review';

const OrderCard = (props: any) => {
  console.log(props);

  return (
    <div className='m-auto w-full md:w-2/4 flex flex-col md:flex-row rounded-lg p-4 font-body mt-10 shadow-xl shadow-slate-800 border-t-2 border-stone-400 bg-slate-300 text-neutral-800'>
      <div className='flex md:w-3/4'>
        <div className='w-24 rounded'>
          <img className='object-fit' src={props.order.book.imageUrl} />
        </div>

        <div className='w-full flex flex-col justify-between'>
          <p className='ml-4 font-medium text-lg md:text-2xl '>
            {props.order.book.title}
          </p>
          <span className='ml-4'>
            quantity :{' '}
            <span className='font-medium'>{props.order.quantity}</span>
          </span>
          <span className='text-base md:text-xl ml-4'>
            Pricing: <span>{props.order.book.price}</span>
          </span>
        </div>
      </div>
      <div className='flex flex-col mt-5 md:mt-0 md:ml-2 w-3/4 md:w-full md:items-end md:justify-around m-auto md:m-0'>
        <span
          className={`text-sm md:text-md text-center p-2 rounded-md md:w-1/4 ${
            props.order.status ? 'bg-red-700' : 'bg-green-600'
          } text-white tracking-wider`}
        >
          {props.order.status ? 'Completed' : 'In Progress'}
        </span>
        {props.order.status ? (
          <>
            <button
              className='btn text-white text-sm mt-2'
              onClick={() => document.getElementById('my_modal_10').showModal()}
            >
              Review
            </button>
            <dialog
              id='my_modal_10'
              className='modal modal-bottom sm:modal-middle'
            >
              <div className='modal-box  text-white'>
                <div className='py-4'>
                  <Review bookId={props.order.book.id} />
                </div>
                <div className='modal-action'>
                  <form method='dialog'>
                    <button className='btn'>Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
