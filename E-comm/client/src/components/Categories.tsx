import Img1 from '../assets/books/science.jpg';
import Img2 from '../assets/categories/clothing.jpeg';
import Img4 from '../assets/books/technology.jpg';
import Img3 from '../assets/books/fiction.jpg';
import Img5 from '../assets/books/mystery.jpg';

const categories = [
  {
    img: Img3,
    key: 1,
    heading: 'Fiction',
  },
  {
    img: Img2,
    key: 2,
    heading: 'Non-Fiction',
  },
  {
    img: Img1,
    key: 3,
    heading: 'Science',
  },
  {
    img: Img5,
    key: 4,
    heading: 'Mystery and Thriller',
  },
  {
    img: Img4,
    key: 5,
    heading: 'Technology',
  },
];

const getCategoryDescription = (category) => {
  switch (category.heading) {
    case 'Fiction':
      return 'Dive into imaginary worlds and captivating stories.';
    case 'Non-Fiction':
      return 'Explore real-life events, biographies, and informative content.';
    case 'Science':
      return 'Discover the wonders of the scientific world.';
    case 'Mystery and Thriller':
      return 'Experience suspenseful and gripping narratives.';
    case 'Technology':
      return 'Stay updated with the latest advancements in technology.';
    default:
      return 'Description not available';
  }
};

const CategoriesSection = () => {
  return (
    <div className='max-w-screen'>
      <div className='mt-10 min-w-full flex flex-col md:flex-row justify-center items-center'>
        {categories.map((category) => (
          <div
            key={category.key}
            className=' w-3/4 md:max-w-xs h-72 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4 md:mr-4 transition-transform transform hover:scale-105'
          >
            <div className='p-5'>
              <img
                src={category.img}
                alt={category.heading}
                className='w-full h-32 object-cover object-center mb-4 rounded-md'
              />
              <div className='mb-4 flex items-center'>
                <h5 className='tracking-wider text-md md:text-2xl font-bold text-gray-900 dark:text-white font-title'>
                  {category.heading}
                </h5>
              </div>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                {getCategoryDescription(category)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
