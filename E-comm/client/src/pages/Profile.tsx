const Profile = () => {
  const user = {
    email: 'johndoe@example.com',
    address: '123 Main St, City, Country',
  };

  // Simulated password change and account deletion functions
  const changePassword = () => {
    // Implement password change logic
    alert('Password changed successfully');
  };

  const deleteAccount = () => {
    // Implement account deletion logic
    if (window.confirm('Are you sure you want to delete your account?')) {
      alert('Account deleted');
      // Redirect to the homepage or perform any other actions
    }
  };

  return (
    <div className='min-h-screen text-neutral-300 font-body mt-10'>
      <div className='mx-auto p-4 min-w-md'>
        <div className='bg-slate-800 shadow-lg rounded-lg overflow-hidden'>
          <div className='p-4'>
            <div className='text-center mt-4'>
              <p className='text-neutral-300 font-title text-4xl'>My Profile</p>
            </div>
          </div>
          <div className='p-4 border-t border-gray-200'>
            <h3 className='text-xl font-semibold'>User Details</h3>
            <div className='mt-4'>
              <div className='flex justify-between items-center py-2'>
                <span className='text-lg'>Email</span>
                <span>{user.email}</span>
              </div>
              <div className='flex justify-between items-center py-2'>
                <span className='text-lg'>Address</span>
                <span>{user.address}</span>
              </div>
              <div className='flex justify-end mt-10'>
                <button
                  onClick={() =>
                    //@ts-ignore
                    document.getElementById('my_modal_2').showModal()
                  }
                  className='bg-cyan-800 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none transition duration-300'
                >
                  Change Address
                </button>

                <dialog id='my_modal_2' className='modal'>
                  <div className='modal-box max-w-fit'>
                    <form method='dialog'>
                      <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                        ✕
                      </button>
                    </form>
                    <p>Change Address</p>
                    <input
                      value={user.address}
                      className='mt-4 rounded-md p-3 w-full outline-none'
                    />
                  </div>
                </dialog>
              </div>
            </div>
          </div>
          <div className='p-4 border-t border-gray-200'>
            <h3 className='text-xl font-semibold'>Change Password</h3>
            <div className='mt-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 py-2'>
                <span className='text-lg mb-2 md:mb-0'>Current Password</span>
                <input
                  type='password'
                  className='bg-neutral-300 text-black placeholder:text-gray-600 tracking-wider border border-gray-300 px-2 py-1 rounded w-fit outline-none md:justify-self-end'
                  placeholder='Current Password'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 py-2'>
                <span className='text-lg mb-2 md:mb-0'>New Password</span>
                <input
                  type='password'
                  className='bg-neutral-300 text-black placeholder:text-gray-600 tracking-wider border border-gray-300 px-2 py-1 rounded w-fit place-items-end outline-none md:justify-self-end'
                  placeholder='New Password'
                />
              </div>
              <div className='flex justify-end mt-10'>
                <button
                  onClick={changePassword}
                  className='bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none transition duration-300'
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className='p-4 border-t border-gray-200'>
            <h3 className='text-lg font-semibold'>Account Deletion</h3>
            <div className='mt-4'>
              <div className='py-2'>
                <span className='text-lg'>
                  Deleting your account is irreversible. Are you sure you want
                  to delete your account?
                </span>
              </div>
              <div className='flex justify-end mt-10'>
                <button
                  onClick={deleteAccount}
                  className='bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none transition duration-300'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
