const Heading = ({ heading }: any) => {
  return (
    <div className='mt-5 w-fit h-16 card dark:bg-gray-800 ml-8 rounded-md place-items-center flex items-center justify-center text-white tracking-wide '>
      <div className='w-fit flex items-center justify-start'>
        <span className='text-lg md:text-2xl font-title font-semibold p-3'>
          {heading}
        </span>
      </div>
    </div>
  );
};

export default Heading;
