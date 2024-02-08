import React from 'react';
import Dashboard from "../components/DashboardLayout/Dashboard.jsx";
import Summery from "../components/DashboardLayout/Summery.jsx";

const DashboardPage = () => {
    return (
        <div>
            <Dashboard>
                <Summery/>
            </Dashboard>
        </div>
    );
};

export default DashboardPage;