import Img1 from '../assets/categories/electronics.jpg';
import Img2 from '../assets/categories/clothing.jpeg';
import Img3 from '../assets/categories/footwear.jpeg';
import Img4 from '../assets/categories/furniture.jpeg';

const categories = [
  {
    img: Img1,
    key: 1,
    heading: 'Electronics',
  },
  {
    img: Img2,
    key: 2,
    heading: 'Clothing',
  },
  {
    img: Img3,
    key: 3,
    heading: 'Footwear',
  },
  {
    img: Img4,
    key: 4,
    heading: 'Furniture',
  },
];

const Events = () => {
  return (
    <div className='max-w-screen'>
      <div className='mt-10 min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
        {categories.map((category) => (
          <div
            key={category.key}
            className='w-72 bg-white border border-gray-200 rounded-lg shadow-xl shadow-slate-700 hover:shadow-none dark:bg-gray-800 dark:border-gray-700 p-1'
          >
            <a href='#'>
              <img
                className='rounded-lg w-full m-auto h-56'
                src={category.img}
                alt={category.heading}
              />
            </a>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {category.heading}
                </h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
