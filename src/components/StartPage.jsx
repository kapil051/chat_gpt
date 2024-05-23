import React from 'react';
import NavBar from "./NavBar";
import '../App.css';
import { useNavigate } from 'react-router-dom'; // Ensure this path is correct based on your project structure

export function StartPage() {

       const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center moving-gradient transition-all duration-500 ease-in-out">
            <NavBar />
            <div className="flex flex-col items-center justify-center mt-8">
                <button onClick={()=>{
                       navigate("/signin");
                }} className="m-2 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    Sign In
                </button>
                <button onClick={()=>{
                       navigate("/signup");
                }} className="m-2 px-6 py-3 bg-purple-500 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    Sign Up
                </button>
            </div>
            <div className="text-white text-center mt-8 border-2 border-white p-4 rounded-md hover:border-blue-500 hover:bg-opacity-50 hover:-translate-y-1 transition duration-300 ease-in-out bg-gray-500">
                <p className="text-xl">Welcome to the New Era of AI!</p>
                <p className="text-lg mt-2">Experience the power of AI-driven technologies that are revolutionizing the world.</p>
            </div>


        </div>
    );
}
