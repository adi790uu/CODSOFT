import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  let navigate = useNavigate();

  const handleRegister = () => {
    if (email === '' || password === '' || confirmPass === '') {
      toast.error('Enter the required details!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (password !== confirmPass) {
      toast.error('Password does not match!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (validator.isEmail(email)) {
      setEmail('');
      setPassword('');
      setConfirmPass('');
      navigate('/auth');
    } else {
      toast.error('Invalid Email!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className='max-w-xl rounded-2xl bg-slate-900 m-auto mt-44 border shadow-md font-body'>
        <div className='flex flex-col gap-2 p-8'>
          <p className='text-center text-3xl text-gray-300 mb-4 font-semibold tracking-wide'>
            Register
          </p>
          <input
            className='bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mt-2'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className='bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 mt-2'
            placeholder='Confirm password'
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <span className='mt-4 mb-4'>
            Already a member?{' '}
            <Link to='/'>
              <span className='font-bold hover:underline ml-1 '>Login</span>
            </Link>
          </span>
          <button
            onClick={handleRegister}
            className='inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95'
          >
            Register
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
