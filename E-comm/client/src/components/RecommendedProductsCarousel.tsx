import Img1 from '../assets/categories/clothing.jpeg';
import Img2 from '../assets/categories/electronics.jpg';
import Img3 from '../assets/categories/footwear.jpeg';
import Img4 from '../assets/categories/furniture.jpeg';
import Img5 from '../assets/categories/clothing.jpeg';

const RecommendedProducts = () => {
  const products = [
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
    {
      img: Img5,
      key: 5,
      heading: 'random',
    },
  ];
  return (
    <div className='flex items-center justify-center'>
      <div className='carousel carousel-end w-3/4 h-96'>
        {products.map((product) => (
          <div className='carousel-item mr-5' key={product.key}>
            <div
              key={product.key}
              className='bg-white border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700 p-1'
            >
              <a href='#'>
                <img
                  className='rounded-lg w-full m-auto h-56'
                  src={product.img}
                  alt={product.heading}
                />
              </a>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {product.heading}
                  </h5>
                </a>
              </div>
              <div className='min-w-full flex justify-end'>
                <button className='btn btn-md text-neutral-300 mr-4 mt-2'>
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
