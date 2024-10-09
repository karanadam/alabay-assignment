import React from 'react'

const RoadmapCards = () => {

    const data = [
        {
            text: 'Community Building and Initial Launch',
            img: '/3.png',
            color: ['#DBC70C', 'rgba(255, 242, 128, 0)'],
        },
        {
            text: 'Merchandise Store Launch',
            img: '/4.png',
            color: ['#00D4D4', 'rgba(65, 255, 255, 0)'],
        },
        {
            text: 'Community Events and Contests',
            img: '/5.png',
            color: ['#D427FF', 'rgba(212, 39, 255, 0)'],
        },
        {
            text: 'Expansion and New Features',
            img: '/6.png',
            color: ['#8F3A3C', 'rgba(143, 58, 60,0)'],
        },
    ]

    return (
        <section className='flex w-full justify-center items-center mt-24 my-36'>
            <div className='w-3/4 flex justify-center items-center'>
                <div className='flex items-center justify-center text-center overflow-hidden gap-4 rounded-t-3xl'>
                    {data.map((data, index) => (
                        <div key={index} className='flex justify-evenly p-2 w-1/4 h-[500px] items-center flex-col ' style={{ background: `linear-gradient(to bottom, ${data.color[0]}, ${data.color[1]})` }}>
                            <p className='font-monst font-black text-white text-2xl'>{data.text}</p>
                            <img src={data.img} alt="img" className='w-full h-auto object-cover rounded-md' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RoadmapCards