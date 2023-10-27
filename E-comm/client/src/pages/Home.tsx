import MostBought from '../components/MostBought';
import HighestRated from '../components/HighestRated';
import Heading from '../components/Heading';
import Categories from '../components/Categories';

const components = [
  {
    key: 1,
    component: <Categories />,
    header: <Heading heading='Categories' />,
  },
  {
    key: 2,
    component: <MostBought />,
    header: <Heading heading='Most Bought' />,
  },
  {
    key: 3,
    component: <HighestRated />,
    header: <Heading heading='Highest Rated' />,
  },
];

const Home = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col min-w-screen'>
        <div className='flex items-center justify-center mt-10 w-3/4 m-auto'>
          <input
            className='py-3 px-3 bg-slate-200 rounded-md w-72 outline-none text-slate-900'
            placeholder='Search...'
            type='text'
          />
          <button
            type='button'
            className='text-white bg-gradient-to-r ml-2 py-3 px-3 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center'
          >
            Search
          </button>
        </div>

        <div className='divider'></div>

        {components.map((component) => (
          <div key={component.key}>
            {component.header}
            <div className='mt-20 mb-10'>{component.component}</div>
            <div className='divider'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
