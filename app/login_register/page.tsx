'use client';
import React, { useState } from 'react';
import LoginComp from '../../components/mainUI/login';
import Register from '../../components/mainUI/register';
import BurgerNavbar from '@/components/mainUI/navbar';

const LoginRegister: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex justify-center flex-col md:flex-row items-center h-screen bg-black">
            <BurgerNavbar />
            <div className='z-10 md:ml-10'>
                {isLogin ? <LoginComp /> : <Register />}
            </div>
            <div className="w-fit h-fit text-2xl font-bold flex flex-col justify-center items-center">
                <img className="z-10 absolute top-0 left-0 md:bottom-0 md:left-0 w-[150px] md:w-[100px] md:relative" src="/images/logo-1.png" alt="Logo" />
                <img className="z-5 absolute top-0 left-32 md:left-0 w-[150px] md:w-[500px] md:relative" src="/images/logo-transparent.png" alt="Logo" />
                <img className='absolute top-5 rounded-xl opacity-25 w-[600px] md:w-[600px] h-[600px]' src="/images/IMG_2378.png" alt="osvaldy sitting" />
            </div>
            
            <div className="z-10 md:absolute bottom-8">
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
