import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { booksState } from '../store/atoms/books';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useBooks } from '../store/selectors/books';

const CREATE_BOOK = gql`
  mutation createBook($input: createBookInputs!) {
    createBook(input: $input) {
      title
      author
      price
      stock
      description
      imageUrl
    }
  }
`;

const CreateForm = () => {
  const setBooks = useSetRecoilState(booksState);
  const books = useRecoilValue(useBooks);

  console.log(books);

  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    price: 0,
    stock: 0,
    description: '',
  });
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const uploadImage = async () => {
    if (!imageFile) {
      alert('Please select an image to upload.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', 'e-comm');
      formData.append('cloud_name', 'dhwmnzrsx');
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dhwmnzrsx/image/upload',
        {
          method: 'post',
          body: formData,
        },
      );
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        return data.secure_url;
      } else {
        alert('Image upload to Cloudinary failed.');
      }
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      alert('An error occurred while uploading the image to Cloudinary.');
    }
  };

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

  const [createBook] = useMutation(CREATE_BOOK);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const uploadedImageUrl = await uploadImage();

    if (uploadedImageUrl) {
      const input = {
        ...bookData,
        imageUrl: uploadedImageUrl,
      };

      console.log(input);

      try {
        const { data } = await createBook({ variables: { input } });

        setBooks([...books, data.createBook]);
        setBookData({
          title: '',
          author: '',
          price: 0,
          stock: 0,
          description: '',
        });
      } catch (error) {
        console.error('Error creating book:', error);
      }
    }
  };

  return (
    <div className='w-full p-4'>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='title'
        >
          Title:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
          type='text'
          name='title'
          value={bookData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='author'
        >
          Author:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
          type='text'
          name='author'
          value={bookData.author}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='author'
        >
          Description:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
          type='text'
          name='description'
          value={bookData.description}
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

      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='image'
        >
          Image:
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white'
          type='file'
          id='image'
          accept='image/*'
          onChange={handleImageChange}
        />
      </div>
      <div className='text-center'>
        <button
          onClick={handleFormSubmit}
          type='submit'
          className='bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline mt-5 mb-2'
        >
          Create Book
        </button>
      </div>
    </div>
  );
};

export default CreateForm;
