import BookForm from '../components/CreateForm';
import UpdateForm from '../components/UpdateForm';
import DeleteForm from '../components/DeleteForm';

function AdminPage() {
  // Sample sales data (replace with your actual data)
  const data = {
    rating: 'Book1',
    view: 'Book2',
    sales: '250000',
    books: '2000',
  };
  return (
    <div className='min-h-screen font-body'>
      <div className='bg-white w-3/4 shadow-md p-4 rounded-lg m-auto mt-5'>
        <h2 className='text-2xl font-semibold mb-4 text-neutral-600'>
          Admin Dashboard
        </h2>
        <div className='grid grid-cols-1 place-items-center gap-4'>
          <div className='w-full p-4 text-white rounded-lg bg-gradient-to-r from-slate-900 to-slate-700'>
            <h3 className='text-xl font-semibold mb-2 tracking-wider'>
              <span className='text-3xl font-medium text-red-700'>S</span>
              tatistics
              <div className='text-md mt-4'>
                <p className='w-full mt-2 mb-2'>
                  Total Sales:{' '}
                  <span className='rounded-md text-violet-700 text-lg font-body'>
                    {data.sales}
                  </span>
                </p>
                <p className='w-full mt-2 mb-2'>
                  Highest Rated:{' '}
                  <span className='rounded-md text-violet-700 text-lg font-body '>
                    {data.rating}
                  </span>
                </p>
                <p className='w-full mt-2 mb-2'>
                  Most Viewed:{' '}
                  <span className='rounded-md text-violet-700 text-lg font-body '>
                    {data.view}
                  </span>
                </p>
                <p className='w-full mt-2 mb-2'>
                  Total Books Sold:{' '}
                  <span className='rounded-md text-violet-600 text-lg font-body '>
                    {data.books}
                  </span>
                </p>
              </div>
            </h3>
            {/* Display total sales information here */}
          </div>
          <div className='bg-white w-full p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Sales Graph</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            molestiae minus natus, eligendi, possimus doloremque beatae ratione
            modi delectus ut, nostrum ad qui. Aliquid earum est, aspernatur odit
            maiores ut.
          </div>
        </div>
        <div className='flex flex-col w-full mt-10'>
          <h2 className='text-2xl font-semibold mb-4 text-neutral-600'>
            Product Management
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 md:w-3/4 md:m-auto mt-4'>
            <div className='bg-white p-4 rounded-lg shadow-md flex gap-4 items-center justify-between bg-gradient-to-r from-slate-900 to-slate-700'>
              <h3 className='text-xl font-semibold text-white'>
                Create Product
              </h3>

              <button
                className='btn btn-sm btn-secondary'
                onClick={() =>
                  //@ts-ignore
                  document.getElementById('my_modal_1').showModal()
                }
              >
                Proceed
              </button>
              <dialog id='my_modal_1' className='modal'>
                <div className='modal-box'>
                  <div className='modal-action'>
                    <form method='dialog' className='w-full'>
                      <BookForm />
                      <div className='flex justify-end'>
                        <button className='btn mt-5'>Close</button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md flex gap-4 items-center justify-between bg-gradient-to-r from-slate-900 to-slate-700'>
              <h3 className='text-xl font-semibold text-white'>
                Update Product
              </h3>
              <button
                className='btn btn-sm btn-secondary'
                onClick={() =>
                  //@ts-ignore
                  document.getElementById('my_modal_2').showModal()
                }
              >
                Proceed
              </button>
              <dialog id='my_modal_2' className='modal'>
                <div className='modal-box'>
                  <div className='modal-action'>
                    <form method='dialog' className='w-full'>
                      <UpdateForm />
                      <div className='flex justify-end'>
                        <button className='btn mt-5'>Close</button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md flex gap-4 items-center justify-between bg-gradient-to-r from-slate-900 to-slate-700'>
              <h3 className='text-xl font-semibold text-white'>
                Delete Product
              </h3>
              <button
                className='btn btn-sm btn-secondary'
                onClick={() =>
                  //@ts-ignore
                  document.getElementById('my_modal_3').showModal()
                }
              >
                Proceed
              </button>
              <dialog id='my_modal_3' className='modal'>
                <div className='modal-box'>
                  <div className='modal-action'>
                    <form method='dialog' className='w-full'>
                      <DeleteForm />
                      <div className='flex justify-end'>
                        <button className='btn mt-5'>Close</button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
