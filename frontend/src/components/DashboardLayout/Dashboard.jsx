import React from "react";


const Dashboard = (props) => {
    const dashboard = [
        { name: 'Summery', href: '/summery' },
        { name: 'Order', href: '/order' },
        { name: 'Add Product', href: '/add-product' },
        { name: 'Products View', href: '/products' },
        { name: 'Add Customer', href: '/add-customer' },
        { name: 'View Customer', href: '/customers' },

    ]
    return (
        <>
         <div className="max-w-full flex">
             <div className="w-2/12 shadow-lg border-r min-h-[585px]">
                 <h3 className="text-center py-8 text-2xl">Dashboard</h3>
                 <ul className="mx-auto">
                     {dashboard.map((item)=>(
                         <li className="w-full cursor-pointer transition-all duration-[400ms] relative overflow-hidden
				                bg-none hover:bg-yellow-200 py-2 px-2" key={item.name}>
                             <a className="ps-6" href={item.href}>{item.name}</a>
                         </li>
                     ))}
                 </ul>
             </div>
             <div className="w-10/12 min-h-full">
                 <div className="bg-white shadow-lg w-full h-12 fixed">
                     <div className=""><p className="ml-80">Logout</p></div>
                 </div>
                 {props.children}
             </div>
         </div>
        </>
    );
};

export default Dashboard;