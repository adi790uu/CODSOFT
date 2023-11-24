import { useState } from 'react';
import SearchResults from './SearchResults';

const ProductSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='relative w-full md:w-1/2 text-lg'>
      <input
        type='text'
        placeholder='Search products...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='w-full py-3 bg-white px-4 border rounded-md focus:outline-none focus:border-blue-500'
      />
      {searchQuery && <SearchResults query={searchQuery} />}
    </div>
  );
};

export default ProductSearchBar;
