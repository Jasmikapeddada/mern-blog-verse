import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';

// xs, sm, md, lg, xl, 2xl 3xl...
// main axis (x-axis) - justify
// cross axis (y-axis) - align

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
 
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  
  
  const handlePassword = () => {
    setShowPassword((password)=>!password)
  }

  const handleConfirmPassword = () => {
    setShowConfirmPassword((password)=>!password)
  }

  const handleChange = (event) => {
    setFormData((formData)=> ({
      ...formData,
      [event.target.name] : event.target.value
    }))
    setErrors((errors)=> ({
      ...errors,
      [event.target.name] : ""
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let newErrors = {}

    if(!formData.fullName) {
      newErrors.fullName = "Please enter your Full Name"
    }
    if(!formData.email) {
      newErrors.email = "Please enter your Email"
    }
    if(!formData.password) {
      newErrors.password = "Please enter your Password"
    }
    if(!formData.confirmPassword) {
      newErrors.confirmPassword = "Please enter your Confirm Password"
    }
    else if(formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Your Confirm Password is not matched with Password"
    }

    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSuccess("")
    }
    else {
      setSuccess("Your account has been created successfully")
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    }
    // if(!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
    //   setError("Please fill all the fields")
    // }
    // // else if(!formData.checkBox){
    // //   setError("Please tick the checkbox before creating an account")
    // // }
    // else if(formData.password !== formData.confirmPassword){
    //   setError("Confirm Password should be matched with Password")
    // }
    // else{
    //   setSuccess("You successfully Created an account")
    //   setError("")
    //   setFormData({
    //     fullName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   })
    }

  return (
    <div className='flex  flex-col items-center mt-10 gap-5'>
      <h1 className='text-3xl text-blue-600 font-bold'>Join BlogVerse</h1>
      <p className='text-gray-600 text-xl text-center font-semibold'>Create your account and <br /> start your Blogging journey today</p>
      <form className='flex flex-col border-1 border-black w-1/2 p-8 py-7 items-center gap-3 rounded-md mb-4' onSubmit={handleSubmit}>
        <div className='w-[95%] '>
            <p className='text-md text-gray-700 font-semibold pb-3'>Full Name</p>
            <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black focus:border-1.8 duration-200' 
              onChange={handleChange} value={formData.fullName}
              type="text" name='fullName' placeholder='Enter your full name' />
            {errors.fullName && <p className='text-red-500'>{errors.fullName}</p>}
        </div>
        <div className='w-[95%] '>
            <p className='text-md text-gray-700 font-semibold pb-3'>Email</p>
            <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black' 
              onChange={handleChange} value={formData.email}
              type="email" name='email' placeholder='Enter your email' />
              {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </div>
        <div className='w-[95%]'>
            <p className='text-md text-gray-700 font-semibold pb-3'>Password</p>
            <div className='relative'>
              <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black' 
                onChange={handleChange} value={formData.password}
                type={showPassword?"password":"text"} name='password' placeholder='Enter your password' />
              <p onClick={handlePassword}>{showPassword?<EyeOff className='absolute right-3 top-2 stroke-gray-500'/>:<Eye className="absolute right-3 top-2 stroke-gray-500"/>}</p>
            </div>
            {errors.password && <p className='text-red-500'>{errors.password}</p>}
        </div>
        <div className='w-[95%] '>
            <p className='text-md text-gray-700 font-semibold pb-3'>Confirm Password</p>
            <div className='relative'>
              {/* <Key className='absolute left-2 top-2'/> */}
              <input className='border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black' 
                onChange={handleChange} value={formData.confirmPassword}
                type={showConfirmPassword?"password":"text"} name='confirmPassword' placeholder='Confirm your password' />
              <p onClick={handleConfirmPassword}>{showConfirmPassword?<EyeOff className='absolute right-3 top-2 stroke-gray-500'/>:<Eye className="absolute right-3 top-2 stroke-gray-500"/>}</p>
            </div>
            {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
        </div>
        <div className='flex gap-2 border-1 border-gray-800 w-[90%] py-3 px-4 rounded-xl items-center justify-center mt-3'>
            <input type="checkbox" name='checkBox' className='w-5 h-5'/>
            <p>I agree to the Terms of Services and Privacy Policy</p>
        </div>
        {success && <p className='text-green-500'>{success}</p>}
        <button className='w-[90%] bg-purple-500 py-4 text-white rounded-xl font-semibold mt-4' type='submit'>Create Account</button>
        <div className='border-[0.5px] border-gray-400 w-[90%] mt-4'></div>
        <p className='text-gray-700 font-semibold'>Already have an account? <span className='text-purple-700'>Sign in here</span></p>
        <button className='font-semibold text-gray-700 hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer duration:200'>Back to Home</button>
      </form>
    </div>
    
  )
}

export default SignUp