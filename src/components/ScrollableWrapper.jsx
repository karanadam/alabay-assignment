import React from 'react';
import historyBg from '../assets/bg-vectors/history-bg.png'


const ScrollableWrapper = ({ children }) => {
    return (
        <div className='mx-24'>
            <div className='rounded-t-3xl bg-white mt-[-60px] top-0 pb-12 sticky h-screen flex flex-col items-center justify-start overflow-y-scroll z-10 overflow-x-hidden' >
                <div className='flex justify-center'>
                    <div className='bg-white opacity-50 rounded-xl w-48 h-6 mt-5 flex justify-center z-50 absolute'></div>
                </div>
                <div className=' flex flex-col justify-center items-center'>
                    {children}

                </div>
            </div>
        </div>
    );
};

export default ScrollableWrapper;
