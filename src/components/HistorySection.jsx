import React from 'react'
import historyBg from '../assets/bg-vectors/history-bg.png'
import historyDog from '../assets/historyDog.png'

const HistorySection = () => {
    return (
        <section className='w-full h-fit absolute top-0 -z-10 rounded-t-3xl flex justify-center items-center' style={{ backgroundImage: `url(${historyBg})` }}>
            <div className='basis-2/3 mt-28 history-dog' style={{ WebkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))' }}>
                <img src={historyDog} alt="history-dog" />
            </div>
            <div className='basis-1/3'>
                <div className='text-right mr-10 p-16 flex flex-col'>
                    <h1 className='font-monst font-black text-5xl text-[#F76902]'>History Of</h1>
                    <h1 className='font-cheese text-white text-9xl'>ALABAY</h1>
                    <p className='font-kumbh font-bold text-2xl'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
                </div>

            </div>

        </section >
    )
}

export default HistorySection