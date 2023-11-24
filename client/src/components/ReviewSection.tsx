import { Star, MessageCircle, ThumbsUp } from 'react-feather';

const ReviewSection = ({ comments }) => {
  if (comments === undefined) {
    return <div>Laoding....s</div>;
  }
  // Sample reviews data

  return (
    <div className='w-full mx-auto mt-8 p-4 bg-gray-800 rounded-lg shadow-md text-white'>
      <h2 className='text-3xl font-semibold mb-4'>Customer Reviews</h2>

      <ul>
        {comments.map((review) => (
          <li
            key={review.id}
            className='mb-4 p-4 rounded-lg shadow-lg bg-slate-800 w-3/4'
          >
            <div className='flex items-center mb-2'>
              <p className='mr-2 text-lg font-semibold'>{review.user.name}</p>
              <div className='flex items-center'>
                {[1, 2, 3, 4, 5].map((value) => (
                  //   <Star
                  //     key={value}
                  //     size={18}
                  //     className={`${
                  //       value <= review.rating
                  //         ? 'text-yellow-500'
                  //         : 'text-gray-300'
                  //     }`}
                  //   />
                  <span
                    key={value}
                    className={`${
                      value <= review.rating
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className='text-gray-400 mb-2'>{review.description}</p>
            <div className='flex items-center space-x-2'>
              <MessageCircle size={16} className='text-gray-500' />
              <span className='text-gray-500'>{review.commentsCount}</span>
              <ThumbsUp size={16} className='text-gray-500' />
              <span className='text-gray-500'>{review.likesCount}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSection;
