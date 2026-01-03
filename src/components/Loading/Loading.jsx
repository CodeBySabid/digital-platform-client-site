import React from 'react';
import '../LoadingCss/loading.css'

const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="loader">
                <div className="load-inner load-one"></div>
                <div className="load-inner load-two"></div>
                <div className="load-inner load-three"></div>
                <span className="text">Loading...</span>
            </div>

        </div>
    );
};

export default Loading;