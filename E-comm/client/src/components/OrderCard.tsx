import Img1 from '../assets/books/book5.jpg';

const OrderCard = (props: any) => {
  return (
    <div className='m-auto w-full md:w-2/4 flex flex-col md:flex-row rounded-lg p-4 font-body mt-10 shadow-xl shadow-slate-800 border-t-2 border-stone-400 bg-slate-300 text-neutral-800'>
      <div className='flex md:w-3/4'>
        <div className='avatar'>
          <div className='w-24 rounded'>
            <img className='object-scale-down' src={Img1} />
          </div>
        </div>
        <div className='w-full flex flex-col justify-between'>
          <p className='ml-4 font-medium text-lg md:text-2xl '>
            {props.order.product}
          </p>
          <span className='ml-4'>
            quantity :{' '}
            <span className='font-medium'>{props.order.quantity}</span>
          </span>
          <span className='text-base md:text-xl ml-4'>
            Pricing: <span>{props.order.price}</span>
          </span>
        </div>
      </div>
      <div className='flex flex-col mt-5 md:mt-0 md:ml-2 w-3/4 md:w-full md:items-end md:justify-around m-auto md:m-0'>
        <button className='text-xs md:text-md btn btn-sm md:btn-md md:w-1/4 bg-green-600 text-white tracking-wider'>
          Bill
        </button>
        <button className='mt-2  text-xs md:text-md btn btn-sm md:btn-md md:w-1/4 bg-slate-900 text-white tracking-wider'>
          View Product
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
