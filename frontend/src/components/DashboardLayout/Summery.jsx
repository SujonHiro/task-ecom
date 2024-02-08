import React from 'react';

const Summery = () => {
    return (
        <>
            <div className="my-20 mx-5 ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="w-full bg-amber-300 py-4 px-6 rounded shadow-xl">
                        <div className="flex justify-between my-4">
                            <img className="block w-8 h-8" src="https://static.thenounproject.com/png/3407390-200.png" alt=""/>
                            <p className="text-xl">789</p>
                        </div>
                        <h2 className="text-2xl">Total Products</h2>
                    </div>
                    <div className="w-full bg-amber-300 py-4 px-6 rounded shadow-xl">
                        <div className="flex justify-between my-4">
                            <img className="block w-8 h-8" src="https://static.thenounproject.com/png/3407390-200.png" alt=""/>
                            <p className="text-xl">789</p>
                        </div>
                        <h2 className="text-2xl">Total Orders</h2>
                    </div>
                    <div className="w-full bg-amber-300 py-4 px-6 rounded shadow-xl">
                        <div className="flex justify-between my-4">
                            <img className="block w-8 h-8" src="https://static.thenounproject.com/png/3407390-200.png" alt=""/>
                            <p className="text-xl">789</p>
                        </div>
                        <h2 className="text-2xl">Total Payment</h2>
                    </div>
                    <div className="w-full bg-amber-300 py-4 px-6 rounded shadow-xl">
                        <div className="flex justify-between my-4">
                            <img className="block w-8 h-8" src="https://static.thenounproject.com/png/3407390-200.png" alt=""/>
                            <p className="text-xl">789</p>
                        </div>
                        <h2 className="text-2xl">Total Sell</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summery;