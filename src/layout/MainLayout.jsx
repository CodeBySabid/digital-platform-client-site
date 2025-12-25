import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Fotter from '../page/Shared/Fotter';
import Navbar from '../page/Shared/Navbar';

const MainLayout = () => {
    const [theme, setTheme] = useState('light');

    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} />
            <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-[#E0E0E0 ]'} pt-12 min-h-screen`}>
                <Outlet />
            </div>
            <Fotter />
        </div>
    );
};

export default MainLayout;
