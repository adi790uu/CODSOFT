import { useState } from 'react';
import Filter from '../assets/funnel_3513349.png';
import BrowseCard from '../components/BrowseCard';
import Img5 from '../assets/books/book5.jpg';
import Img6 from '../assets/books/book6.jpg';
import Img1 from '../assets/books/book1.jpg';
import Img2 from '../assets/books/book2.jpg';
import Img3 from '../assets/books/book3.jpg';
import { useBooks } from '../store/selectors/books';
import { useRecoilValue } from 'recoil';

const books = [
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

const Browse = () => {
  const books = useRecoilValue(useBooks);
  const [stat, setStat] = useState('stat1');
  const [cat, setCat] = useState('cat1');
  const [price, setPrice] = useState('price1');

  const handleStatChange = (event: any) => {
    setStat(event.target.value);
  };

  const handleCatChange = (event: any) => {
    setCat(event.target.value);
  };

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };

  const filters = [
    {
      heading: 'Based On Statistics',
      value: stat,
      change: handleStatChange,
      options: [
        { val: 'stat1', title: 'Most Viewed' },
        { val: 'stat2', title: 'Highly Rated' },
        { val: 'stat3', title: 'Most Bought' },
      ],
    },
    {
      heading: 'Based On Category',
      value: cat,
      change: handleCatChange,
      options: [
        { val: 'cat1', title: 'Fiction' },
        { val: 'cat2', title: 'Non-Fiction' },
        { val: 'cat3', title: 'Science' },
        { val: 'cat4', title: 'Mystery and Thriller' },
        { val: 'cat5', title: 'Technology' },
      ],
    },
    {
      heading: 'Based On Pricing',
      value: price,
      change: handlePriceChange,
      options: [
        { val: 'price1', title: 'High to Low' },
        { val: 'price2', title: 'Low to High' },
      ],
    },
  ];

  const filteredBooks =
    stat === 'stat1' ? books : books.filter((book: any) => book.price === stat);

  return (
    <div className=' text-white min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800'>
      <header className='py-4 bg-slate-900'>
        <div className='container flex justify-between items-start'>
          <h1 className='text-2xl font-bold ml-4 font-title tracking-wider'>
            Bookstore
          </h1>
        </div>
      </header>

      <div className='container p-4 m-auto'>
        <div className='flex space-x-4 mb-4'>
          <div className='w-full mt-4'>
            <div className='flex flex-row w-full'>
              <div className='dropdown ml-4'>
                <label
                  tabIndex={0}
                  className='btn mt-4 rounded-md bg-slate-300 flex items-center hover:bg-slate-400'
                >
                  <img src={Filter} alt='' className='w-6 h-6' />
                </label>
                <div
                  tabIndex={0}
                  className='dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-slate-800 text-primary-content mt-4'
                >
                  <div className='card-body'>
                    <p className='text-lg md:text-xl font-title text-center font-medium tracking-wider'>
                      Filters
                    </p>
                    <div className='w-full'>
                      {filters.map((filter) => (
                        <>
                          <h2 className='mt-4 text-lg font-body font-semibold mb-2'>
                            {filter.heading}
                          </h2>
                          <select
                            value={filter.value}
                            onChange={filter.change}
                            className='bg-neutral-300 text-black w-full p-2 rounded border font-body outline-none'
                          >
                            {filter.options.map((option) => (
                              <option
                                value={option.val}
                                className='font-body text-black p-2'
                              >
                                <span>{option.title}</span>
                              </option>
                            ))}
                          </select>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h2 className='text-xl font-semibold ml-4 font-title tracking-wider flex items-end'>
                Browse Books
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3'>
              {filteredBooks.map((book: any) => (
                <BrowseCard product={book} key={book.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
