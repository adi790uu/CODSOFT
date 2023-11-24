import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const DELETE_BOOK = gql`
  mutation Mutation($input: ID) {
    deleteBook(input: $input)
  }
`;

const UpdateForm = () => {
  const [updateBook] = useMutation(DELETE_BOOK);
  const [bookId, setBookId] = useState('');

  const handleInputChange = (e: any) => {
    setBookId(e.target.value);
  };

  const handleFormSubmit = async () => {
    const res = await updateBook({ variables: { input: bookId } });
    console.log(res);
    setBookId('');
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
          value={bookId}
          onChange={handleInputChange}
        />
      </div>

      <div className='text-center'>
        <button
          onClick={handleFormSubmit}
          type='submit'
          className='bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline mt-5 mb-2'
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
