import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col mt-10 items-center gap-3">
            <h1 className="text-blue-600 text-3xl font-bold">Join BlogVerse</h1>
            <p className="text-gray-600 text-xl font-semibold">Log In to Blog Verse.</p>
            <form className="flex flex-col border-1 border-black w-1/2 p-8 py-7 items-center gap-3 rounded-md mb-4">
                <div className="w-[95%]">
                    <p className="text-md text-gray-700 font-semibold pb-3">UserName/Email</p>
                    <input className="border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black" type="text" placeholder="Enter Username/Email"/>
                </div>
                <div className="w-[95%]">
                    <p className="text-md text-gray-700 font-semibold pb-3">Password</p>
                    <input className="border-1 border-gray-400 bg-gray-50 w-full  rounded-md py-2 px-3 focus:outline-none focus:border-black" type="password" placeholder="Enter Password"/>
                </div>
                <div className="flex flex-row items-center justify-center w-[90%] rounded-xl mt-4 border-1 py-3 text-black font-semibold gap-2">
                    <input type="checkbox" name=""/>
                    <p>Remember Me</p>
                </div>
                <button className="w-[90%] rounded-xl mt-4 border-1 py-4 bg-purple-500 text-white font-semibold">Sign In</button>
                <div className='border-[0.5px] border-gray-400 w-[90%] mt-4'></div>
                <p className="text-gray-700 font-semibold">Don't have an account? <span className="text-purple-500">Sign Up Here</span></p>
                <p className="text-gray-700 font-semibold">Forgot Password? <span className="text-purple-500">Reset Password</span></p>
                <button className="font-semibold text-gray-800 hover:bg-gray-300 py-4 w-[90%] rounded-xl cursor-pointer duration:200">Back to Home</button>
            </form>
        </div>
    )
}

export default Login;