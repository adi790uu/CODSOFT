import { useNavigate } from 'react-router-dom';
import { Star } from 'react-feather';

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
        <div className='p-4'>
          <h2 className='text-lg font-semibold text-white mb-2'>
            {product.title}
          </h2>
          <div className='flex items-center mb-2'>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`text-2xl ${
                  value <= product.rating ? 'text-yellow-500' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-2xl font-bold text-violet-600'>
              &#x20B9;{product.price}
            </span>
            <button
              onClick={handleClick}
              className='bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md'
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
