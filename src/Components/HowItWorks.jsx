import React from 'react';
import bookLogo from '../assets/bookingIcon.png';
const HowItWorks = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold text-secondary my-5'>How it Works</h1>
            <div className="md:grid md:grid-cols-4 flex flex-col gap-6 my-6">
                <div className="p-8 rounded-3xl bg-white">
                    <img className='mb-6' src={bookLogo} alt="" />
                    <h3 className='font-bold text-secondary text-xl'>Booking Pick & Drop</h3>
                    <p className='text-[#606060] text-xs font-semibold'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white">
                    <img className='mb-6' src={bookLogo} alt="" />
                    <h3 className='font-bold text-secondary text-xl'>Cash On Delivery</h3>
                    <p className='text-[#606060] text-xs font-semibold'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white">
                    <img className='mb-6' src={bookLogo} alt="" />
                    <h3 className='font-bold text-secondary text-xl'>Delivery Hub</h3>
                    <p className='text-[#606060] text-xs font-semibold'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white">
                    <img className='mb-6' src={bookLogo} alt="" />
                    <h3 className='font-bold text-secondary text-xl'>Booking SME & Corporate</h3>
                    <p className='text-[#606060] text-xs font-semibold'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;