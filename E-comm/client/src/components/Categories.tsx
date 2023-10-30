import Img1 from '../assets/categories/electronics.jpg';
import Img2 from '../assets/categories/clothing.jpeg';
import Img3 from '../assets/categories/footwear.jpeg';
import Img4 from '../assets/categories/furniture.jpeg';

const categories = [
  {
    img: Img1,
    key: 1,
    heading: 'Fiction',
  },
  {
    img: Img2,
    key: 2,
    heading: 'Non-Fiction',
  },
  {
    img: Img3,
    key: 3,
    heading: 'Science',
  },
  {
    img: Img4,
    key: 4,
    heading: 'Mystery and Thriller',
  },
  {
    img: Img4,
    key: 5,
    heading: 'Technology',
  },
];

const Events = () => {
  return (
    <div className='max-w-screen'>
      <div className='mt-10 min-w-full flex flex-col md:flex-row justify-center items-center'>
        {categories.map((category) => (
          <button
            key={category.key}
            className='transition duration-300 ease-in-out w-3/4 md:max-w-xs bg-white border border-gray-200 rounded-lg shadow-md shadow-slate-700 hover:shadow-none dark:bg-gray-800 dark:border-gray-700 mt-4 md:mr-4'
          >
            <div className='p-5'>
              <a href='#'>
                <h5 className='tracking-wider mb-2 text-md md:text-2xl font-bold text-gray-900 dark:text-white font-title'>
                  {category.heading}
                </h5>
              </a>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Events;
