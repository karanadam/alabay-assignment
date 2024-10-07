import React from 'react'

const ScrollableWrapper = ({ children }) => {
    return (
        <div className='mx-24'>
            <div className='rounded-t-3xl bg-white mt-[-60px] pt-8 pb-12 sticky top-0 h-screen flex flex-col items-center justify-center'>

                <div className='bg-white opacity-50 rounded-xl w-48 h-6 top-3 absolute'></div>


                {children}
            </div>
        </div>
    )
}

export default ScrollableWrapper