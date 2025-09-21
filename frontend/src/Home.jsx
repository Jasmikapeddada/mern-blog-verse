import React from "react";
import NavBar from "./NavBar";

// numbers.map((num)=>(html))

function Home() {

    const posts = [
        {
            id : 1,
            author : 'Jasmika',
            title : 'Silent',
            description : 'This book opens up a new perspective for introverts',
            date : '10 Nov 2024',
            time : '10:00 AM',
            image : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            portfolioImage: '/public/vite.svg',
        },
        {
            id : 2,
            author : 'Jasmika',
            title : 'Silent',
            description : 'This book opens up a new perspective for introverts',
            date : '10 Nov 2024',
            time : '10:00 AM',
            image : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            portfolioImage: '/public/vite.svg',
        },
        {
            id : 3,
            author : 'Jasmika',
            title : 'Silent',
            description : 'This book opens up a new perspective for introverts',
            date : '10 Nov 2024',
            time : '10:00 AM',
            image : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            portfolioImage: '/public/vite.svg',
        },
        {
            id : 4,
            author : 'Jasmika',
            title : 'Silent',
            description : 'This book opens up a new perspective for introverts',
            date : '10 Nov 2024',
            time : '10:00 AM',
            image : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            portfolioImage: '/public/vite.svg',
        },
        {
            id : 5,
            author : 'Jasmika',
            title : 'Silent',
            description : 'This book opens up a new perspective for introverts',
            date : '10 Nov 2024',
            time : '10:00 AM',
            image : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            portfolioImage: '/public/vite.svg',
        },
        {
            id : 6,
            author : 'Jasmika',
            title : 'Silent',
            description : 'This book opens up a new perspective for introverts',
            date : '10 Nov 2024',
            time : '10:00 AM',
            image : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            portfolioImage: '/public/vite.svg',
        }]

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50">
            <NavBar/>
            <p className="text-4xl pt-5 font-bold">Welcome back, Dev Astra</p>
            <p className="text-lg text-gray-500 mt-4"> Discover amazing stories, insights, and ideas from our community of writers.</p>
            <div className=" flex gap-10 justify-around mt-5 ">
                <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">Write a New Post</button>
                <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md" >View My Posts</button>
            </div>
            <div className="mt-5 flex gap-10 flex-wrap justify-center w-full rounded-lg shadow-lg pb-5">
                {
                    posts.map((post) => (
                        <div className="w-96 bg-white shadow-lg rounded-lg" key={post.id}>
                            <div className="flex relative">
                                <img className=" rounded-t-lg  shadow-lg h-52 w-96 " src={post.image} alt="Writing" />
                                <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">Save</button>
                            </div>
                            <div className="flex gap-5 mt-3 px-2">
                                <img className="rounded-full shadow-lg h-12 w-12 " src={post.image} alt="Writing" />
                                <div>
                                    <p className="font-semibold">{post.author}</p>
                                    <p className="text-gray-500">{post.date} - {post.time}</p>
                                </div>
                            </div>
                            <div className="mt-3 px-3 flex flex-col gap-3">
                                <p className="text-2xl font-bold ">{post.title}</p>
                                <p className="text-gray-600">
                                    {post.description}
                                </p>
                            </div>
                            <div className="mt-3 mb-3  px-3 flex justify-end">
                                <button className="text-blue-500 hover:underline cursor-pointer">Read more</button>
                            </div>
                        </div>))
                }

            </div>
        </div>
    )
}

export default Home;