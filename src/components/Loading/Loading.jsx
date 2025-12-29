import React from 'react';
import '../LoadingCss/loading.css'

const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div class="loader">
                <div class="load-inner load-one"></div>
                <div class="load-inner load-two"></div>
                <div class="load-inner load-three"></div>
                <span class="text">Loading...</span>
            </div>

        </div>
    );
};

export default Loading;