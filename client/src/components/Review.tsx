import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { Star } from 'react-feather'; // Assuming you have a Star component from react-feather
import { useRecoilState } from 'recoil';
import { userState } from '../store/atoms/user';

const Review = ({ bookId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const [user] = useRecoilState(userState);
  console.log(user);

  const CREATE_REVIEW = gql`
    mutation Mutation($input: createReview) {
      createReview(input: $input)
    }
  `;

  const [createReview] = useMutation(CREATE_REVIEW);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async () => {
    console.log('Rating:', rating);
    console.log('Review:', review);

    const input = {
      bookId: bookId,
      description: review,
      rating: parseInt(rating),
      userId: user.id,
    };

    const { data } = await createReview({ variables: { input } });
    console.log(data);
    setRating(0);
    setReview('');
  };

  return (
    <div className='max-w-screen-lg mx-auto mt-8 p-4 rounded-lg shadow-md'>
      <h2 className='text-3xl font-semibold mb-4'>Feedback Section</h2>

      <div className='flex items-center mb-4'>
        <p className='mr-2 text-gray-300'>Rate the product:</p>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            size={24}
            className={`cursor-pointer ${
              value <= rating ? 'text-yellow-500' : 'text-gray-300'
            }`}
            onClick={() => handleRatingChange(value)}
          />
        ))}
      </div>

      <div className='mb-4'>
        <label
          htmlFor='review'
          className='block text-sm font-medium text-gray-300'
        >
          Write a review:
        </label>
        <textarea
          id='review'
          rows='4'
          className='mt-2 p-2 w-full bg-white text-neutral-800 border-none outline-none rounded-md'
          value={review}
          onChange={handleReviewChange}
        />
      </div>

      <button
        className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full'
        onClick={handleSubmit}
        disabled={rating === 0 || review.trim() === ''}
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default Review;
