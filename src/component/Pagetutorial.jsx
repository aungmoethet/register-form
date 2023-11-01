import React from 'react'

const Pagetutorial = () => {
  return (
    <>
       <section className='mt-16'>
            
           <div className=' flex justify-center mb-5 '>
           <label for="tutorial"></label>

                <select id="cars" className=' w-60 border-x-0 border-t-0'>
                <option selected value="All">All</option>
                <option value="Computer">Computer</option>
                <option value="Mobile">Mobile</option>
                <option value="Other">Other</option>
                </select>
           </div>

       </section>
       {/* card */}
       <div>
       <div className="max-w-sm bg-white border border-gray-200 rounded-xl drop-shadow-md hover:drop-shadow-xl  dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1601737487795-dab272f52420?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFyZGRpc2t8ZW58MHx8MHx8fDA%3D" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
            </div>
       </div>
    </>
  )
}

export default Pagetutorial
