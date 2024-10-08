import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [{
    type: 'image',
    img: '/1.png',
},
{
    type: 'image',
    img: '/2.png',
}, {
    type: 'image',
    img: '/3.png',
}, {
    type: 'image',
    img: '/4.png',
},]


const GallaryCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className='w-3/4 mx-auto'>
            <div className='mt-20 slider-container'>
                <Slider {...settings} className='max-w-6xl p-0 m-0'>
                    {data.map((data, index) => (
                        <div key={index} >
                            <div className='w-96 h-64 border-2 border-black overflow-hidden flex justify-center items-center rounded-2xl'>
                                <img src={data.img} alt="empty" className='cover' />
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </div >

    )
}

export default GallaryCarousel