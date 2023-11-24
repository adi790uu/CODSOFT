import { useState } from 'react';
import Filter from '../assets/funnel_3513349.png';
import BrowseCard from '../components/BrowseCard';
import { useBooks } from '../store/selectors/books';
import { useRecoilValue } from 'recoil';

const Browse = () => {
  const books = useRecoilValue(useBooks);
  const [stat, setStat] = useState('stat1');
  const [cat, setCat] = useState('Fiction');
  const [price, setPrice] = useState('price1');
  const [filteredBooks, setFilteredBooks] = useState([...books]);
  const [page, setPage] = useState(1);

  const numOfPages = Math.ceil(filteredBooks.length / 9);

  const startIndex = (page - 1) * 9;
  const endIndex = startIndex + 9;

  console.log(books);
  console.log(filteredBooks);

  const handleStatChange = (event: any) => {
    let select = event.target.value;
    setStat(select);
    setFilteredBooks((prevBooks) =>
      select === 'stat1'
        ? [...prevBooks].sort((a: any, b: any) => b.rating - a.rating)
        : [...prevBooks].sort((a: any, b: any) => b.bought - a.bought),
    );
  };

  const handleCatChange = (event: any) => {
    let select = event.target.value;
    setCat(select);
    setFilteredBooks(
      [...books].filter((book: any) => book.category === select),
    );
  };

  const handlePriceChange = (event: any) => {
    let select = event.target.value;
    setPrice(select);
    setFilteredBooks((prevBooks) =>
      select === 'price1'
        ? [...prevBooks].sort((a: any, b: any) => b.price - a.price)
        : [...prevBooks].sort((a: any, b: any) => a.price - b.price),
    );
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setFilteredBooks([...books]);
  };

  const decrement = (e: any) => {
    e.preventDefault();

    if (page === 1) {
      return;
    }
    setPage(parseInt(page) - 1);
  };

  const increment = (e: any) => {
    e.preventDefault();

    if (page === numOfPages) {
      return;
    }
    setPage(parseInt(page) + 1);
  };

  const filters = [
    {
      heading: 'Based On Statistics',
      value: stat,
      change: handleStatChange,
      options: [
        { val: 'stat1', title: 'Highly Rated' },
        { val: 'stat2', title: 'Most Bought' },
      ],
    },
    {
      heading: 'Based On Category',
      value: cat,
      change: handleCatChange,
      options: [
        { val: 'Fiction', title: 'Fiction' },
        { val: 'Non-Fiction', title: 'Non-Fiction' },
        { val: 'Science', title: 'Science' },
        { val: 'Mystery and Thriller', title: 'Mystery and Thriller' },
        { val: 'Technology', title: 'Technology' },
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

  return (
    <div className=' text-white min-h-screen'>
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
                      {filters.map((filter, index) => (
                        <div key={index}>
                          <h2 className='mt-4 text-lg font-body font-semibold mb-2'>
                            {filter.heading}
                          </h2>
                          <select
                            value={filter.value}
                            onChange={filter.change}
                            className='bg-neutral-300 text-black w-full p-2 rounded border font-body outline-none'
                          >
                            <option value='nil'>Select</option>
                            {filter.options.map((option, index) => (
                              <option
                                key={index}
                                value={option.val}
                                className='font-body text-black p-2'
                              >
                                {option.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                      <div className='flex justify-center mt-4 text-sm'>
                        <button
                          onClick={handleClick}
                          className='btn btn-sm bg-slate-500 text-white w-1/2'
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className='text-xl font-semibold ml-4 font-title tracking-wider flex items-end'>
                Browse Books
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3'>
              {filteredBooks.slice(startIndex, endIndex).map((book: any) => (
                <BrowseCard product={book} key={book.id} />
              ))}
            </div>
            <div className='join flex justify-center mt-14 mb-10 text-white'>
              <button
                onClick={decrement}
                className={`btn bg-slate-700 hover:bg-slate-600 shadow-xl border-neutral-400 text-2xl ${
                  page === 1 ? 'hidden' : ''
                }`}
              >
                «
              </button>
              <button className='join-item btn border-none outline-none bg-transparent hover:bg-transparent'>
                Page {page}
              </button>
              <button
                onClick={increment}
                className={`btn bg-slate-700 hover:bg-slate-600 shadow-xl border-neutral-400 text-2xl  ${
                  page === numOfPages ? 'hidden' : ''
                }`}
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
