const Pricing = ({ price }) => {
  return (
    <>
      <div className='mt-5 flex flex-col bg-slate-800 rounded-lg'>
        <div className='px-6 py-8 sm:p-10 sm:pb-6'>
          <div className='grid items-center justify-center w-full grid-cols-1 text-left'>
            <div>
              <h2 className='text-lg font-medium tracking-tighter text-white lg:text-3xl'>
                Pricing :
              </h2>
            </div>
            <div className='mt-6'>
              <p>
                <span className='text-5xl font-medium tracking-tight text-white'>
                  &#x20B9; {price}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
