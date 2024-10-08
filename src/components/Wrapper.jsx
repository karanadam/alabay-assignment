import React from 'react'
import '../App.css'

const Wrapper = ({ children }) => {
    return (
        <div className='vision-wrapper flex flex-col gap-10 bg-cover sticky'>
            {children}
        </div>
    )
}

export default Wrapper