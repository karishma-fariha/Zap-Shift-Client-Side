import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../assets/banner/banner1.png"
import bannerImg2 from "../assets/banner/banner2.png"
import bannerImg3 from "../assets/banner/banner3.png"
import arrow from '../assets/arrow-up-right 1.png';
const Banner = () => {
    return (
        <Carousel
            infiniteLoop
            autoPlay={true}>
            <div className='relative'>
                <img src={bannerImg1} />
               <div className=" absolute top-9/12 left-1/6 -translate-x-1/2 -translate-y-1/2">
                    <button className='btn text-black rounded-full btn-primary'>Track Your Parcel</button>
                    <button className="btn bg-black rounded-full w-12    h-12 mr-5">
                        <img className="w-6 " src={arrow} alt="arrow" />
                    </button>
                    <button className='btn'>Be A Rider</button>
                </div>
            </div>
            <div className='relative'>
                <img src={bannerImg2} />
                <div className=" absolute top-9/12 left-1/6 -translate-x-1/2 -translate-y-1/2">
                    <button className='btn text-black rounded-full btn-primary'>Track Your Parcel</button>
                    <button className="btn bg-black rounded-full w-12 h-12 mr-5">
                        <img className="w-6 " src={arrow} alt="arrow" />
                    </button>
                    <button className='btn'>Be A Rider</button>
                </div>
            </div>
            <div>
                <img src={bannerImg3} />
                <div className=" absolute top-9/12 left-1/6 -translate-x-1/2 -translate-y-1/2">
                    <button className='btn text-black rounded-full btn-primary'>Track Your Parcel</button>
                    <button className="btn bg-black rounded-full w-12 h-12 mr-5">
                        <img className="w-6 " src={arrow} alt="arrow" />
                    </button>
                    <button className='btn'>Be A Rider</button>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;