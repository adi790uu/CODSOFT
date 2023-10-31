import ProductDisplay from './ProductDisplay';
import Img5 from '../assets/books/book5.jpg';
import Img6 from '../assets/books/book6.jpg';
import Img1 from '../assets/books/book1.jpg';
import Img2 from '../assets/books/book2.jpg';
import Img3 from '../assets/books/book3.jpg';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '40',
    img: Img5,
  },
  {
    id: 2,
    name: 'Product 1',
    price: '40',
    img: Img6,
  },
  {
    id: 3,
    name: 'Product 1',
    price: '40',
    img: Img1,
  },
  {
    id: 4,
    name: 'Product 1',
    price: '40',
    img: Img2,
  },
  {
    id: 5,
    name: 'Product 1',
    price: '40',
    img: Img3,
  },
];

function HighestRatedCarousel() {
  return (
    <div className='carousel carousel-end w-full md:mr-4 md:ml-4'>
      {products.map((product) => (
        <div className='carousel-item mr-8' key={product.id}>
          <ProductDisplay product={product} />
        </div>
      ))}
    </div>
  );
}

export default HighestRatedCarousel;
