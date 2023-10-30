import Img1 from '../assets/books/book2.jpg';
import Img2 from '../assets/books/book6.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Pricing from './Pricing';

const ProductCarousel = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 m-auto mt-10'>
      <div className=''>
        <div className='min-w-lg p-4 rounded-lg overflow-hidden'>
          <Carousel showArrows={true} showThumbs={true}>
            <div className='rounded-md'>
              <img className='rounded-md' src={Img1} alt='Product 1' />
            </div>
            <div>
              <img className='rounded-md' src={Img2} alt='Product 2' />
            </div>
          </Carousel>
        </div>
        <div className='divider'></div>
        <div className='mt-10 min-w-full flex flex-col md:flex-row md:justify-evenly'>
          <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-emerald-900 hover:bg-emerald-700 text-neutral-300'>
            Add To Cart
          </button>
          <button className='mt-5 btn btn-xs sm:mt-0 sm:btn-sm md:btn-md lg:btn-lg bg-rose-900 hover:bg-rose-700 text-neutral-300'>
            Buy Later
          </button>
        </div>
      </div>
      <div className='p-4 md:ml-10'>
        <p className='font-body font-semibold text-3xl text-neutral-300 pl-4 mt-4 md:mt-0'>
          Product Name
        </p>
        <div className='stats shadow mt-10 flex flex-col md:flex-row'>
          <div className='stat'>
            <div className='stat-title'>Rating</div>
            <div className='rating'>
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                readOnly
              />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                readOnly
              />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                readOnly
              />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                readOnly
              />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-orange-400'
                readOnly
              />
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-8 h-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                ></path>
              </svg>
            </div>
            <div className='stat-title'>Page Views</div>
            <div className='stat-value text-secondary'>2.6M</div>
            <div className='stat-desc'>21% more than last month</div>
          </div>

          <div className='stat'>
            <div className='stat-value'>86%</div>
            <div className='stat-title'>Stock Remaining</div>
            <div className='stat-desc text-secondary'>31 tasks remaining</div>
          </div>
        </div>
        <Pricing />
        <div className='mt-14 rounded-lg shadow-md shadow-neutral-700 overflow-x-auto overflow-y-auto w-full'>
          <p className='pl-4 pt-4 font-body'>Product Description :</p>
          <div className='divider'></div>
          <article className='prose pl-4 pr-4 pb-4 font-body tracking-wide h-[32rem] font-normal text-justify text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam odio
            sed consequatur provident animi voluptas voluptates sequi
            laboriosam! Laborum quidem quisquam quia unde incidunt eaque nam
            animi accusamus odit odio? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore reprehenderit iste ratione maiores harum
            sit officia, expedita, non quia laboriosam impedit nostrum corporis
            accusantium eum optio hic aperiam aliquid illo. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam quae rem dolorum
            dicta, atque mollitia molestias omnis fugit reprehenderit inventore
            recusandae suscipit obcaecati minus libero sunt illum magnam
            possimus soluta. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consequuntur tenetur reiciendis libero, ullam, in quibusdam
            possimus aut, harum dolores eius magnam eaque iusto placeat sit
            vitae distinctio! Ad perspiciatis iusto repellat ab facere tempora,
            ratione aperiam nobis corporis provident deserunt. Placeat quod amet
            sequi reiciendis fugit nulla rerum nostrum provident exercitationem
            beatae suscipit, ea, at natus voluptatem deserunt quam quas, eos
            consequatur? Libero, odio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure maxime esse omnis veritatis doloribus
            repellat nam accusamus quo voluptas dolore. Nulla animi atque minus
            architecto soluta quibusdam possimus, consequatur ipsa.
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
