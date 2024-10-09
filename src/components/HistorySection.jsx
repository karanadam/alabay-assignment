import React from 'react'
import historyBg from '../assets/bg-vectors/history-bg.png'
import historyDog from '../assets/historyDog.png'

const HistorySection = () => {

    return (
        <section className='w-full h-fit -mt-12 -z-10 rounded-t-3xl flex justify-center items-center pb-16' style={{ backgroundImage: `url(${historyBg})`, height: 'auto', width: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: '10%, 10%', backgroundSize: 'cover' }}>
            <div className='basis-2/3 mt-28 history-dog' style={{ WebkitBoxReflect: 'below -180px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))' }}>
                <img src={historyDog} alt="history-dog" className='h-auto p-10 mb-0 pb-0' />
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