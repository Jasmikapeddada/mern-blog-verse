import React from "react";

const numbers = [1, 2, 3, 4, 5];
numbers.map((num) => num * num);

const posts = () => [
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
    }
]

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-red-500 font-bold text-3xl">Welcome to Blog Verse</h1>
            <p>Blog Verse is a platform where you can discover multilinguist books, blogs, and papers.</p>
            <div className="grid grid-cols-3 gap-5 m-10">
                {
                    posts().map((post) => (
                        <div key={post.id} className="relative border-1 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl duration-200 cursor-pointer">
                            <img className="w-full h-48 object-cover rounded-t-lg" src={post.image} alt={post.title} />
                            <img className="absolute right-3 top-5 w-10 h-10 rounded-full border-2 border-white -mt-5 ml-4" src={post.portfolioImage} alt={post.author} />
                            <div className="p-4">
                                <div className="flex flex-row h-8 w-8 rounder-full border-1 border-white">
                                    <img className="rounded-full border-2 border-white -mt-5 ml-4" src={post.portfolioImage} alt={post.author} />
                                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>By {post.author}</span>
                                    <span>{post.date}.{post.time}</span>
                                </div>
                                <p className="text-gray-700 mb-4">{post.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;