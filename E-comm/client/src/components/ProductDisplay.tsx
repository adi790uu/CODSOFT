const ProductDisplay = ({ product }: any) => {
  return (
    <div className='m-auto font-body mt-2 md:mt-0'>
      <div className='card card-side shadow-xl rounded-md flex flex-col max-w-xs md:max-w-sm ml-2 bg-slate-800 h-[40rem] md:h-[48rem]'>
        <figure className=''>
          <img className='rounded-md' src={product.img} alt='Book' />
        </figure>
        <div className='card-body mr-4 md:mr-0'>
          <h2 className='card-title text-sm md:text-lg'>{product.name}</h2>
          <div className='card-actions justify-between items-center tracking-wider mt-4 md:mt-0'>
            <span className='text-2xl font-bold text-violet-600'>
              ${product.price}
            </span>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
