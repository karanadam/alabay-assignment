import React from 'react'
import linksImage from '../assets/links-img.png'

const LinksSection = () => {
    return (
        <section className='w-full my-24'>
            <div className='mx-28 flex flex-col '>
                <div className='flex justify-start text-left'>
                    <p className=' basis-1/2 font-cheese text-9xl text-[#FFA800] text-wrap'>SOCIAL MEDIA LINKS</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={linksImage} alt="links" />
                </div>
            </div>
        </section>
    )
}

export default LinksSection