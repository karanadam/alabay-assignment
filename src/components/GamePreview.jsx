import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../assets/arrows/left.png'
import rightArrow from '../assets/arrows/right.png'
import ability1 from '../assets/Alabay-Games/Abilities-2.png'
import ability2 from '../assets/Alabay-Games/Abilities-3.png'
import ability3 from '../assets/Alabay-Games/Artifacts-2.png'

const GamePreview = () => {

    const data = [{
        type: 'image',
        img: ability1,
    },
    {
        type: 'image',
        img: ability2,
    },
    {
        type: 'image',
        img: ability3,
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,

    };

    return (
        <section className='w-full p-32 my-24'>
            <div className='flex flex-col'>
                <div div className='flex justify-start' >
                    <h1 className='font-monst font-black text-[#353535] text-6xl'><span className=' text-[#FFA800]'>GAME</span> PREVIEWS</h1>
                </div >
                <div className='w-full my-10'>
                    <Slider {...settings} className='max-w-6xl p-0 m-0 flex gap-10 w-fit'>
                        {data.map((data, index) => (
                            <div key={index} >
                                <div className=' overflow-hidden justify-center items-center rounded-2xl' style={{ marginRight: "10px" }}>
                                    <img src={data.img} alt="empty" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
        </section >
    )
}

export default GamePreview