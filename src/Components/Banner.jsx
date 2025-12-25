import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../assets/banner/banner1.png"
import bannerImg2 from "../assets/banner/banner2.png"
import bannerImg3 from "../assets/banner/banner3.png"

const Banner = () => {
    return (
        <Carousel
            infiniteLoop
            autoPlay={true}>
            <div className='relative'>
                <img src={bannerImg1} />
                <div className=" ">
                    <button className='btn btn-primary absolute top-8/12 left-1/6 -translate-x-1/2 -translate-y-1/2'>Track Your Parcel</button>
                    <button className='btn relative'>Be A Rider</button>
                </div>
            </div>
            <div>
                <img src={bannerImg2} />
            </div>
            <div>
                <img src={bannerImg3} />
            </div>
        </Carousel>
    );
};

export default Banner;