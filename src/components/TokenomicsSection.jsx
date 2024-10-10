import React from 'react'
import bgVector from '../assets/bg-vectors/vision-bg.png'
import moneyDog from '/7.png'

const TokenomicsSection = () => {
    return (
        <section className='w-full flex justify-center items-center bg-diagonalYellow my-10 px-10 py-16 bg-auto bg-center'>
            <div className='flex flex-col w-3/4'>
                <div className='flex justify-start'>
                    <h1 className='font-cheese text-9xl text-[#FFA800'>TOKENOMICS</h1>
                </div>
                <div className='flex  justify-center items-center'>
                    <div className='flex flex-col gap-10 basis-1/2'>
                        <div className='flex flex-col bg-neutral-900 w-96 rounded-2xl py-2 px-6 shadow-black shadow-lg'>
                            <p className='font-monst font-black text-lg text-white'>LIQUIDITY</p>
                            <p className='font-monst font-black text-3xl text-[#FFF280]'>LOCKED</p>
                        </div>
                        <div className='flex flex-col bg-neutral-900 w-96 rounded-2xl py-2 px-6 shadow-black shadow-lg'>
                            <p className='font-monst font-black text-lg text-white'>CONTRACT</p>
                            <p className='font-monst font-black text-3xl text-[#FFF280]'>RENOUNCED</p>
                        </div>
                        <div className='flex flex-col bg-neutral-900 w-96 rounded-2xl py-2 px-6 shadow-black shadow-lg'>
                            <p className='font-monst font-black text-lg text-white'>TAXES</p>
                            <p className='font-monst font-black text-3xl text-[#FFF280]'>0%</p>
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <img src={moneyDog} alt="moneyDog" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TokenomicsSection