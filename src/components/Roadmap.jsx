import React from 'react'
import roadMapImg from '/2.png'

const Roadmap = () => {
    return (
        <section className='mx-24 mt-24 mb-12'>
            <div className='flex flex-col'>

                <div className='flex justify-start'>
                    <h1 className='text-white text-9xl font-cheese'>ROAD MAP</h1>
                </div>

                <div className='flex justify-center items-center p-4 lg:p-10 w-full'>
                    <div className='basis-1/2 w-3/4 flex flex-col justify-start items-center gap-14 mt-10 lg:mt-3'>
                        <p className='font-kumbh font-bold text-3xl'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. </p>
                        <p className='font-kumbh font-bold text-3xl text-white p-0 w-full'>
                            Join us as we grow and achieve new heights.
                        </p>
                    </div>
                    <div className='basis-1/2'>
                        <img src={roadMapImg} alt="roadMap" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roadmap