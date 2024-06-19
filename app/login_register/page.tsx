'use client';
import React, { useState } from 'react';
import Login from '../../components/mainUI/login';
import Register from '../../components/mainUI/register';
import BurgerNavbar from '@/components/mainUI/navbar';

const LoginRegister: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex justify-center flex-col md:flex-row items-center h-screen bg-black">
            <BurgerNavbar />
            <div className="w-fit h-fit text-2xl font-bold flex flex-col justify-center items-center">
                <img className="absolute top-0 left-2 w-[150px] md:w-[500px] md:relative" src="/images/logo-4.png" alt="Logo" />
                <img className='absolute top-5 rounded-xl opacity-25 w-[600px] md:w-[500px] h-[500px]' src="/images/IMG_2378.png" alt="osvaldy sitting" />
            </div>
            {isLogin ? <Login /> : <Register />}
            <div className="absolute bottom-8">
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                    {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
                </button>
            </div>
        </div>
    );
};

export default LoginRegister;
