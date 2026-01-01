import React from 'react';
import liveTracking from '../assets/live-tracking.png';
import safeDelivery from '../assets/safe-delivery.png'
const LiveParcel = () => {
    return (
        <div className='gap-6 flex flex-col mb-10'>
            <div className="flex items-center p-8 bg-white rounded-3xl">
                <div className="">
                    <img src={liveTracking} alt="" />
                </div>
                <div class="flex justify-center items-center h-64 mx-12">
                    <div className="h-24 border-l-2 border-dashed border-secondary"></div>                
                    </div>
                <div className="">
                    <h1 className='font-extrabold text-2xl text-secondary'>Live Parcel Tracking</h1>
                    <p className='text-xl font-medium text-accent'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className="flex items-center p-8 bg-white rounded-3xl">
                <div className="">
                    <img src={safeDelivery} alt="" />
                </div>
                <div class="flex justify-center items-center h-64 mx-12">
                    <div className="h-24 border-l-2 border-dashed border-secondary"></div>                
                    </div>
                <div className="">
                    <h1 className='font-extrabold text-2xl text-secondary'>100% Safe Delivery</h1>
                    <p className='text-xl font-medium text-accent'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            <div className="flex items-center p-8 bg-white rounded-3xl">
                <div className="">
                    <img src={liveTracking} alt="" />
                </div>
                <div class="flex justify-center items-center h-64 mx-12">
                    <div className="h-24 border-l-2 border-dashed border-secondary"></div>                
                    </div>
                <div className="">
                    <h1 className='font-extrabold text-2xl text-secondary'>24/7 Call Center Support</h1>
                    <p className='text-xl font-medium text-accent'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
        </div>
    );
};

export default LiveParcel;