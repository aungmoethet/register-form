import React, {useState} from 'react';
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import { useForm } from "react-hook-form";


// error check
const Register = () => {
    const {register, handleSubmit,watch,formState: { errors }} = useForm({
        mode:'onChange'
    }
    )
    
    const onSubmit = (data) => console.log(data)
    // password check
    const password = watch('password')

    //   eye
    const [open ,setOpen] = useState(true);
    const eye = () => {
        setOpen(!open)
    } 
    const [openConfirm ,setOpenConfirm] = useState(true);
    const eyeConfirm = () => {
        setOpenConfirm(!openConfirm)
    }
  return (
    <>
       <div className=' bg-yellow-400 h-screen' >
       <div className=' w-full h-full flex  justify-center items-start md:items-center bg-yellow-400 container pt-0'>
           <div className=' grid grid-cols-1 md:grid-cols-2 px-3 '>
                <div className=' flex justify-center items-center p-7'>
                    <div className=' block'>
                        <img className=' w-56 drop-shadow-md md:w-80 ' src='./image/atlogoforlogin.png' alt=''/>
                        <h5 className=' ml-14 md:ml-20 md:text-lg text-xs text-gray-500'>Create New Account</h5>
                        
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=' relative border rounded-md w-full bg-white p-4 pt-6 shadow-md md:text-sm md:w-72 lg:w-96  ' >
                    <div>
                    <div class="relative z-0 w-full mb-5">
                                <input type="text" name="floating_email" id="floating_email" 
                                    className=" block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" " 
                                    {...register("text", { required: 'Please enter your name' })}
                                    />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-xs lg:text-md  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
                                {errors.text && <span className=' text-red-600 text-xs'>{errors.text.message}</span>}
                        </div>      
                        <div class="relative z-0 w-full mb-5">
                                <input type="email" name="floating_email" id="floating_email" 
                                    className="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" " 
                                    {...register("email", { required: 'Please enter your email',
                                  
                                    })}

                                    />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-xs lg:text-md  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                {errors.email && <span className=' text-red-600 text-xs'>{errors.email.message}</span>}
                        </div>
                                {/* password */}

                        <div class=" relative z-0 w-full mb-6">
                                <input type={( open === true)? 'password' : 'Text'} name="floating_password" id="floating_password" 
                                    className="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" "  
                                    {...register("password", { required: 'Please enter your password' ,
                                        minLength:{
                                            value:8,
                                            message:' Minimum Required Length 8'
                                        },
                                        maxLength:{
                                            value:15,
                                            message:' Minimum Required Length 15'
                                        }
                                })}
                                    />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-xs lg:text-md  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                
                                {errors.password && <span className=' text-red-600 text-xs'>{errors.password.message}</span>}

                                <div className='text-md absolute top-3 md:text-xl md:top-2 right-1.5'>
                                    {/* eye react */}
                                    {
                                        (open === true)?  <AiFillEye onClick={eye}/> :<AiFillEyeInvisible onClick={eye}/>
                                    }
                                   
                                   
                               </div>
                        </div>
                        
                        <div class="relative z-0 w-full mb-6">
                                <input type={( openConfirm === true)? 'password' : 'Text'}  name="floating_password" id="floating_password"
                                    className="block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer" placeholder=" " 
                                    {...register("ConfirmPassword", { required: 'Please enter your password',
                                        validate:(value) =>
                                        value === password  || "The password do not match",
                                })} 
                                    />  
                                <label for="floating_password" class="peer-focus:font-medium absolute text-xs lg:text-md  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                                       {errors.ConfirmPassword && <span className=' text-red-600 text-xs'>{errors.ConfirmPassword.message}</span>}
                                <div className='text-md absolute top-3 md:text-xl md:top-2 right-1.5'>
                                    {/* eye react */}
                                    {
                                        (openConfirm === true)?  <AiFillEye onClick={eyeConfirm}/> :<AiFillEyeInvisible onClick={eyeConfirm}/>
                                    }
                                   
                                   
                               </div>
                        </div>
                       < button type="submit" className="text-white bg-yellow-500 hover:bg-yellow-600 w-full focus:ring-4 focus:ring-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 focus:outline-none dark:focus:ring-yellow-600">Signup</button>
                       <p className=' text-xs'>Already have an account? Login</p>
                    
                    </div>
                </form>

                
            </div> 
        </div>
    
       </div>
    </>
  )
}

export default Register
