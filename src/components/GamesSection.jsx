import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../assets/arrows/left.png'
import rightArrow from '../assets/arrows/right.png'
import game1 from '../assets/Alabay-Games/game1.png'
import game2 from '../assets/Alabay-Games/game2.png'



const GamesSection = () => {

    console.log(game1, game2); // Log the paths to verify they are correctly resolved

    const data = [{
        type: 'image',
        img: game1,
    },
    {
        type: 'image',
        img: game2,
    },]

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
                style={{ ...style, display: "block", }}
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
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        // arrows: false,
    };

    return (
        <section className='w-full flex justify-center items-center bg-diagonalYellow bg-cover h-auto my-12' >
            <div className='flex flex-col w-3/4 justify-center items-center py-72 gap-10'>
                <div className='flex flex-col justify-center items-center gap-20 '>
                    <h1 className='font-cheese text-9xl text-[#FFA800]'>GAMES</h1>
                    <h3 className='font-monst font-black text-5xl'>Stay tuned for upcoming games!</h3>
                </div>


                <div className='border-8 border-white rounded-3xl m-2 max-w-6xl w-full'>
                    <Slider {...settings} className=''>
                        {data.map((data, index) => (
                            <div key={index} >
                                <div className='overflow-hidden justify-center items-center rounded-2xl'>
                                    <img src={data.img} alt="empty" className=' object-cover' />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default GamesSection