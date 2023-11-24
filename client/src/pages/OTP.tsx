import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OTP() {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (otp === '') {
      toast.error('Enter the OTP!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      console.log(otp);
      toast.success('Verified!', {
        position: toast.POSITION.TOP_CENTER,
      });
      setOtp('');
    }
  };

  return (
    <>
      <div className='min-h-screen  flex flex-col justify-center items-center font-body'>
        <div className='bg-slate-900 p-8 rounded-2xl shadow-md border max-w-xl'>
          <h2 className='text-3xl tracking-wide mb-6 text-center prose font-semibold'>
            Enter your OTP
          </h2>
          <form className='flex flex-col space-y-4'>
            <input
              type='text'
              className='bg-slate-200 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none placeholder-gray-500 text-black'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder='One Time Password'
            />
            <button
              onClick={handleSubmit}
              className='bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none'
            >
              Verify
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default OTP;
