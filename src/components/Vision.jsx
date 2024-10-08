import React from 'react'
import groupOfDogs from '/1.png'

const Vision = () => {
    return (
        <section className='vision-wrapper'>
            <div className='flex flex-col justify-center items-center text-center mx-12 p-6'>
                <div>
                    <h1 className='font-cheese text-[#FFA800] text-9xl'>PROJECT VISION</h1>
                </div>
                <div className='w-full flex justify-center items-center my-6 '>
                    <img src={groupOfDogs} alt="dogs" className='h-auto w-3/4' />
                </div>
                <div>
                    <p className='font-kumbh font-bold text-4xl mt-4'>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
                </div>
            </div>
        </section>
    )
}

export default Vision