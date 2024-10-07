import React from 'react'
import landingPageBG from '../assets/landing-page-bg.png'

const LandingPage = () => {
    return (
        <section className=' sticky top-0 left-0 min-h-screen bg-white  w-full h-screen bg-cover bg-center flex flex-col gap-10 text-center'
            style={{ backgroundImage: `url(${landingPageBG})` }}>
            <div div className=' max-h-screen flex justify-center ' >
                <p className='font-cheese z-10 text-8xl my-8 bg-gradient-to-b from-[#DAF777] to-[#A1FC68] text-transparent inline-block bg-clip-text drop-shadow-2xl '>WELCOME TO ALABAY WORLD</p>
            </div>
            <div className='flex justify-center items-center absolute bottom-48 text-center w-full'>
                <p className="text-center font-cheese text-5xl text-white  bg-black bg-opacity-90 p-4 mx-auto w-full">
                    WHERE THE <span className="text-yellow-400">LEGENDARY CENTRAL ASIAN SHEPHERD DOG</span> MEETS A NEW-AGE ADVENTURE.
                    <br />
                    <span className="text-yellow-400">JOIN US</span> IN CELEBRATING THE <span className="text-yellow-400">STRENGTH</span>, <span className="text-yellow-400">LOYALTY</span>, AND <span className="text-yellow-400">HERITAGE</span> OF THE ALABAY BREED.
                </p>
            </div>



        </section >
    )
}

export default LandingPage