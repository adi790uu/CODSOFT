import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const UPDATE_BOOK = gql`
  mutation updateBook($input: updateBook) {
    updateBook(input: $input) {
      id
    }
  }
`;

const UpdateForm = () => {
  const [updateBook] = useMutation(UPDATE_BOOK);
  const [bookData, setBookData] = useState({
    id: '',
    price: 0,
    stock: 0,
  });

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;

    if (name === 'price' || name === 'stock') {
      value = parseInt(value);
    }

    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleFormSubmit = async () => {
    const input = bookData;
    await updateBook({ variables: { input } });
    setBookData({
      id: '',
      stock: 0,
      price: 0,
    });
  };

  return (
    <div className='w-full p-4'>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='title'
        >
          BookID:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
          type='text'
          name='id'
          value={bookData.id}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='price'
        >
          Price:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
          type='text'
          name='price'
          value={bookData.price}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='stock'
        >
          Stock
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
          type='number'
          name='stock'
          value={bookData.stock}
          onChange={handleInputChange}
        />
      </div>
      <div className='text-center'>
        <button
          onClick={handleFormSubmit}
          type='submit'
          className='bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline mt-5 mb-2'
        >
          Update Book
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
