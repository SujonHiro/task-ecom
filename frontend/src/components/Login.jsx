import React from 'react';

const Login = () => {
    return (
        <>
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 my-32 text-center">
                <div className="shadow-lg bg-gray-100 rounded-lg max-w-xl mx-auto">
                    <h2 className="my-4 text-2xl">Admin Login</h2>
                    <div className="flex justify-center">
                        <input className="rounded-full w-80 py-2 px-4 border-2 focus:border-2 focus:border-amber-400 outline-0" type="text" placeholder="Enter Email Here"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-xl rounded-full w-80 py-2 px-4 bg-amber-400 flex my-6 hover:opacity-80">Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;