import React from "react";



function loginForm(){
    return(
       
       <>
      <div className=" w-full h-96 flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <div className=" w-60 mt-24 sm:w-80 md:w-96 h-auto bg-white border p-6 shadow-lg block items-start rounded-lg">
            <h2 className=" text-xs sm:text-sm font-bold md:text-2xl text-gray-600 mb-2" >Sign in to your account</h2>

            <form>
               <div className=" mb-2">
                  <label className=" block mb-2 text-xs sm:text-sm font-medium text-gray-600 ">Email</label>
                  <input type="email" name="email" id="email"
                        className=" border bg-gray-50 border-gray-300  text-gray-900 p-2 rounded-md w-full text-xs sm:text-sm focus:ring-amber-400 focus:border-amber-400 " placeholder="name@company.com" required=""  ></input>
               </div>
               <div className=" mb-3">
                  <label className=" block mb-2 text=xs text-xs font-medium text-gray-600 ">Password</label>
                  <input type="password" name="password" id="password" 
                          className=" border bg-gray-50 border-gray-300 text-gray-900 p-2 rounded-md w-full text-xs sm:text-sm focus:ring-amber-400 focus:border-amber-400 " placeholder="••••••••" required=""  ></input>
               </div>
              
                  <button type="submit" 
                        className="w-full mb-2 text-white bg-amber-300 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-400 font-medium rounded-md text-xs px-5 py-2 text-center ">Sign in</button>

                  <div className="flex items-center justify-center mb-3">
                    <a href="#" className="text-xs font-medium text-amber-400 underline">Forgot password?</a>
                  </div>

                  <p className="text-xs font-light text-gray-500 ">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 underline ">Sign up</a>
                  </p>
            </form>
        </div>
      </div>
       
       </>
       
    );
}
export default loginForm;