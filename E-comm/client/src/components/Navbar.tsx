import { Link } from 'react-router-dom';

const Navbar = () => {
  const sideDrawer = [
    { item: 'Profile', key: 1, link: '/profile' },
    { item: 'Cart', key: 2, link: '/cart' },
    { item: 'Orders', key: 3, link: '/orders' },
  ];

  return (
    <div className='min-w-screen navbar bg-indigo-700 text-primary-content font-body p-3 '>
      <div className='flex-none'>
        <div className='drawer'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex items-center justify-center ml-4'>
            <label htmlFor='my-drawer' className='swap swap-rotate'>
              {/* this hidden checkbox controls the state */}
              <input type='checkbox' />

              {/* hamburger icon */}
              <svg
                className='swap-off fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 512 512'
              >
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>

              {/* close icon */}
              <svg
                className='swap-on fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 512 512'
              >
                <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
              </svg>
            </label>
          </div>
          <div className='drawer-side z-10'>
            <label
              htmlFor='my-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>

            <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
              <div className='flex flex-col w-full'>
                <div className='grid h-20 card bg-base-300 rounded-box place-items-center'>
                  <span className='py-2 px-3 text-2xl font-bold text-stone-300'>
                    Welcome!
                  </span>
                </div>
                <div className='divider'></div>
              </div>

              {sideDrawer.map((item) => (
                <Link to={item.link} key={item.key}>
                  <button className='py-2 px-3 hover:bg-slate-700 rounded-md w-full text-left'>
                    <span className='text-lg tracking-wide'>{item.item}</span>
                  </button>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <span className='btn btn-ghost normal-case text-xl'>
          <Link to='/home'>
            <span className='font-title text-2xl text-rose-50 tracking-wider'>
              ShopNest
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
