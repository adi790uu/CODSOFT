import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img1 from '../assets/ecommerce images/1.jpg';
import Img2 from '../assets/ecommerce images/camera 1.jpg';
function HighestRated() {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
      <div className='max-w-lg mx-auto p-4 rounded-lg shadow-xl shadow-slate-700 overflow-hidden'>
        {/* Carousel */}
        <Carousel showArrows={true} showThumbs={true}>
          <div className='rounded-md'>
            <img className='rounded-md' src={Img1} alt='Product 1' />
          </div>
          <div>
            <img className='rounded-md' src={Img2} alt='Product 2' />
          </div>
        </Carousel>

        <div className='p-4'>
          <h2 className='text-xl font-semibold'>Product Name</h2>
          <p className='text-gray-700 my-2'>Product description goes here.</p>
          <div className='flex justify-between items-center mt-4'>
            <span className='text-2xl font-semibold text-indigo-600'>
              $99.99
            </span>
            <button className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md'>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-lg mx-auto p-4 rounded-lg shadow-xl shadow-slate-700   overflow-hidden'>
        {/* Carousel */}
        <Carousel showArrows={true} showThumbs={true}>
          <div className='rounded-md'>
            <img className='rounded-md' src={Img1} alt='Product 1' />
          </div>
          <div>
            <img className='rounded-md' src={Img2} alt='Product 2' />
          </div>
        </Carousel>

        <div className='p-4'>
          <h2 className='text-xl font-semibold'>Product Name</h2>
          <p className='text-gray-700 my-2'>Product description goes here.</p>
          <div className='flex justify-between items-center mt-4'>
            <span className='text-2xl font-semibold text-indigo-600'>
              $99.99
            </span>
            <button className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md'>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-lg mx-auto p-4 rounded-lg shadow-xl shadow-slate-700   overflow-hidden'>
        {/* Carousel */}
        <Carousel showArrows={true} showThumbs={true}>
          <div className='rounded-md'>
            <img className='rounded-md' src={Img1} alt='Product 1' />
          </div>
          <div>
            <img className='rounded-md' src={Img2} alt='Product 2' />
          </div>
        </Carousel>

        <div className='p-4'>
          <h2 className='text-xl font-semibold'>Product Name</h2>
          <p className='text-gray-700 my-2'>Product description goes here.</p>
          <div className='flex justify-between items-center mt-4'>
            <span className='text-2xl font-semibold text-indigo-600'>
              $99.99
            </span>
            <button className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighestRated;
