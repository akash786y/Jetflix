import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState({})

    function handleChange(event) {

        setFormData({ ...formData, [event.target.name]: event.target.value })
        setError({ ...error, [event.target.name]: '' })
    }

    function handleSubmit(e) {
        e.preventDefault()
    }


    const navigate = useNavigate();

    async function handleClick() {
        let errorData = {}
        if (formData.name == '') {
            errorData.name = 'Enter Name !!'
        }
        if (formData.email == '') {
            errorData.email = 'Enter Email !!'
        }
        if (formData.password === '') {
            errorData.password = 'Enter Password !!'
        }

        if (formData.name || formData.email) {
            try {
                const response = await axios.post('http://127.0.0.1:3000/api/login', formData);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        setError(errorData);

        console.log(error)
        console.log(formData)
        console.log(errorData)

        if (errorData.name || errorData.email || errorData.password)
            return;
        navigate('/home')
    }

    async function handleSubmitWithoutLogin(){
        
        let errorData = {}
        if (formData.name == '') {
            errorData.name = 'Please enter name !!'
        }
        setError(errorData);
        if(formData.name === ''){
            return;
        }
        else{
            try {
                console.log(formData)
                const response = await axios.post('http://127.0.0.1:3000/api/login', formData);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        navigate('/home');
    }

    return (
        <>

            <div className="bg-black text-white min-h-screen flex flex-col">
                {/* <Navbar /> */}

                <form onSubmit={handleSubmit} className="mt-32 w-full max-w-md mx-auto flex flex-col space-y-6 p-6 bg-gray-900 rounded-lg shadow-lg">
                    <label className="flex flex-col font-semibold text-lg">
                        Enter your name
                        <input
                            name="name"
                            onChange={handleChange}
                            type="text"
                            className="border border-gray-600 bg-gray-800 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
                        {error.name && <span className="text-red-600">{error.name}</span>}
                    </label>

                    <label className="flex flex-col font-semibold text-lg">
                        Enter your email
                        <input
                            name="email"
                            onChange={handleChange}
                            type="email"
                            className="border border-gray-600 bg-gray-800 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
                        {error.email && <span className="text-red-600">{error.email}</span>}
                    </label>

                    <label className="flex flex-col font-semibold text-lg">
                        Enter your password
                        <input
                            name="password"
                            onChange={handleChange}
                            type="password"
                            className="border border-gray-600 bg-gray-800 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
                        {error.password && <span className="text-red-600">{error.password}</span>}
                    </label>

                    <button onClick={handleClick} className="bg-red-600 rounded-md px-4 py-2 text-lg font-medium hover:bg-red-700 transition-all duration-300">
                        Submit
                    </button>

                    <button onClick={handleSubmitWithoutLogin} className="text-red-400 hover:text-red-300 text-center underline">
                        Continue without login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login