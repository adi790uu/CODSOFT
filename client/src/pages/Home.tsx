import MostBought from '../components/MostBoughtCarousel';
import HighestRated from '../components/HighestRatedCarousel';
import Heading from '../components/Heading';
import Categories from '../components/Categories';
import ProductSearchBar from '../components/ProductSearchBar';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { booksState } from '../store/atoms/books';


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

  const [books, setBooks] = useRecoilState(booksState)

  const getBooks = gql`
    query Query {
      getBooks {
        author
        description
        id
        price
        rating
        stock
        title
        imageUrl
        category
      }
    }
  `;
  const { loading, error, data } = useQuery(getBooks);

  // Use a useEffect to update Recoil state when data is available
  useEffect(() => {
    if (data) {
      setBooks(data.getBooks);
    }
  }, [data, setBooks]);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='w-full'>
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
