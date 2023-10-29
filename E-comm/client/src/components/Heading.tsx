const Heading = ({ heading }: any) => {
  return (
    <div className='mt-5 w-1/4 h-16 card place-items-center flex items-center justify-center text-neutral-300 border-b-4 border-slate-500 rounded-sm tracking-wider m-auto '>
      <div className='w-fit flex items-center justify-start'>
        <span className='text-lg md:text-4xl font-title font-semibold mb-2'>
          {heading}
        </span>
      </div>
    </div>
  );
};

export default Heading;
