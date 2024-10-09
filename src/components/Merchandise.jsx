import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../assets/arrows/left.png'
import rightArrow from '../assets/arrows/right.png'

const data = [{
    type: 'image',
    img: '/merch/Variant7.png',
},
{
    type: 'image',
    img: '/merch/Variant8.png',
}, {
    type: 'image',
    img: '/merch/Variant9.png',
}, {
    type: 'image',
    img: '/merch/Variant10.png',
},
{
    type: 'image',
    img: '/merch/Variant11.png',
},
{
    type: 'image',
    img: '/merch/Variant12.png',
},]


const Merchandise = () => {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", }}
                onClick={onClick}
            >
                <img className="h-auto w-24" src={rightArrow} alt="right arrow" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", backgroundImage: leftArrow, }}
                onClick={onClick}
            >
                <img className="h-auto w-24" src={leftArrow} alt="left arrow" />
            </div>
        );
    }

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className='my-24 text-center'>
            <div className='flex flex-col gap-10 '>
                <div>
                    <h1 className='font-cheese text-9xl text-[#FFA800]'>MERCHANDISE</h1>
                </div>
                <div>
                    <Slider {...settings} className='max-w-6xl p-0 m-0'>
                        {data.map((data, index) => (
                            <div key={index} >
                                <div className=' overflow-hidden flex justify-center items-center rounded-2xl'>
                                    <img src={data.img} alt="empty" className='cover' />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Merchandise