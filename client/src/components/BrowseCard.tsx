const BrowseCard = (props: any) => {
  console.log(props.product.category);
  return (
    <div className='w-full md:w-3/4 flex flex-col rounded-lg p-4 font-body mt-10 shadow-xl shadow-slate-800 bg-slate-300'>
      <div className='flex md:w-3/4'>
        <div className='md:w-3/4 flex justify-center items-start'>
          <img
            className='rounded-md  md:w-full object-contain'
            src={props.product.imageUrl}
          />
        </div>
        <div className='w-full flex flex-col justify-evenly'>
          <p className='ml-4 font-bold text-neutral-800 text-lg md:text-2xl font-title w-full mb-2'>
            {props.product.title}
          </p>
          <span className='ml-4 text-lg text-neutral-800 font-medium font-body mb-2'>
            Author :{' '}
            <span className='text-neutral-800 font-normal font-body w-full'>
              {props.product.author}
            </span>
          </span>
          <span className='text-base md:text-xl ml-4 text-neutral-800 font-medium'>
            Pricing: <span>₹{props.product.price}</span>
          </span>
        </div>
      </div>
      <div className='flex flex-col mt-5 w-1/2 md:w-full m-auto'>
        <button className='mt-2 text-xs md:text-md btn btn-sm md:btn-md md:w-2/4 bg-slate-900 text-white tracking-wider'>
          View Product
        </button>
      </div>
    </div>
  );
};

export default BrowseCard;
