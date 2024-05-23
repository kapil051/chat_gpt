import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = () => {
        async function sign_up() {
            try {
                console.log('Form Data:', formData);
                const res = await axios.post("http://localhost:3000/user/signup", {
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                });

             //   console.log('Response Data:', res.data);

                const token = res.data.token;
                const userName = `${formData.firstName} ${formData.lastName}`;

                if (token) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('name', userName);
                    navigate('/home');
                } else {
                    navigate('/signup');
                }

            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        sign_up();
    };




    return (

        <div>

            <NavBar></NavBar>

            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">

                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='John'
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Doe'
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='xyz@gmail.com'
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='...min 6 chars'
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>


                <button
                    onClick={handleSubmit}
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>

        </div>

    );
}
