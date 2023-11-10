import { useNavigate } from 'react-router-dom';

const ProductDisplay = ({ product }: any) => {
  const navigate = useNavigate();
  console.log(product);

  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(`/product/${product.id}`);
  };
  return (
    <div className='w-4/5 font-body mt-2 md:mt-0 p-4'>
      <div className='card card-side rounded-md flex flex-col max-w-xs md:max-w-sm bg-slate-800 ml-2 md:ml-0 shadow-md shadow-slate-700'>
        <figure className='ml-1 mr-1 mt-1'>
          <img className='rounded-md' src={product.imageUrl} alt='Book' />
        </figure>
        <div className='card-body mr-4 md:mr-0'>
          <h2 className='card-title text-sm md:text-lg'>{product.title}</h2>
          <div className='card-actions justify-between items-center tracking-wider mt-4 md:mt-0'>
            <span className='text-2xl font-bold text-violet-600'>
              ${product.price}
            </span>
            <button onClick={handleClick} className='btn btn-primary'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
