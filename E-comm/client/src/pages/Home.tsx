import MostBought from '../components/MostBoughtCarousel';
import HighestRated from '../components/HighestRatedCarousel';
import Heading from '../components/Heading';
import Categories from '../components/Categories';
import ProductSearchBar from '../components/ProductSearchBar';

const components = [
  {
    key: 1,
    component: <Categories />,
    header: <Heading heading='Categories' />,
    divider: true,
  },
  {
    key: 2,
    component: <MostBought />,
    header: <Heading heading='Most Bought' />,
    divider: true,
  },
  {
    key: 3,
    component: <HighestRated />,
    header: <Heading heading='Highest Rated' />,
    divider: false,
  },
];

const Home = () => {
  return (
    <div className='w-full  bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800'>
      <div className='flex flex-col min-w-screen'>
        <div className='flex items-center justify-center mt-10 w-3/4 m-auto'>
          <ProductSearchBar />
        </div>

        <div className='divider'></div>

        {components.map((component) => (
          <div key={component.key}>
            {component.header}

            <div className='mt-20 mb-10'>{component.component}</div>
            {component.divider ? <div className='divider'></div> : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
