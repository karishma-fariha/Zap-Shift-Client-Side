import React from 'react';
import Banner from '../Components/Banner';
import HowItWorks from '../Components/HowItWorks';
import OurServices from '../Components/OurServices';
import Brands from '../Components/Brands';
import LiveParcel from '../Components/LiveParcel';
import Reviews from '../Components/Reviews';

const reviewsPromise = fetch('/reviews.json')
.then(res => res.json())

const Home = () => {
    return (
        <div className="">
            <div className='my-10'>
                <Banner></Banner>
            </div>
            <section>
                <HowItWorks></HowItWorks>
            </section>
            <section>
                <OurServices></OurServices>
            </section>
            <section className='my-20'>
                <h1 className='text-3xl font-extrabold text-secondary mb-10 text-center'>We've helped thousands of sales teams</h1>
                <Brands></Brands> 
            </section>
            <section>
                <div className="w-full border-t-2 border-dashed border-secondary my-20"></div>
                <LiveParcel></LiveParcel>
                <div className="w-full border-t-2 border-dashed border-secondary my-20"></div>
            </section>
            <section>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
            </section>
        </div>
    );
};

export default Home;