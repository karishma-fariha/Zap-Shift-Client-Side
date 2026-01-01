import React from 'react';
import servicesImg from "../assets/service.png"
const OurServices = () => {
    return (
        <div className='bg-secondary p-26 rounded-3xl'>
            <h1 className='font-extrabold text-4xl text-white text-center my-4'>Our Services</h1>
            <p className='text-xl font-semibold text-white text-center mb-8'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className="md:grid md:grid-cols-3 flex flex-col gap-6">
                <div className="bg-white hover:bg-primary rounded-3xl p-8">
                    <div className="flex items-center justify-center">
                        <img src={servicesImg} alt="" />
                    </div>
                    <h1 className='text-center font-bold text-2xl text-secondary mb-2'>Express  & Standard Delivery</h1>
                    <p className=' text-center text-accent text-xs'>We deliver parcels within 24/72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4/6 hours from pick-up to drop-off.</p>
                </div>
                 <div className="bg-white hover:bg-primary rounded-3xl p-8">
                    <div className="flex items-center justify-center">
                        <img src={servicesImg} alt="" />
                    </div>
                    <h1 className='text-center font-bold text-2xl text-secondary mb-2'>Nationwide Delivery</h1>
                    <p className=' text-center text-accent text-xs'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                 <div className="bg-white hover:bg-primary rounded-3xl p-8">
                    <div className="flex items-center justify-center">
                        <img src={servicesImg} alt="" />
                    </div>
                    <h1 className='text-center font-bold text-2xl text-secondary mb-2'>Fulfillment Solution</h1>
                    <p className=' text-center text-accent text-xs'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                 <div className="bg-white hover:bg-primary rounded-3xl p-8">
                    <div className="flex items-center justify-center">
                        <img src={servicesImg} alt="" />
                    </div>
                    <h1 className='text-center font-bold text-2xl text-secondary mb-2'>Cash on Home Delivery</h1>
                    <p className=' text-center text-accent text-xs'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                 <div className="bg-white hover:bg-primary rounded-3xl p-8">
                    <div className="flex items-center justify-center">
                        <img src={servicesImg} alt="" />
                    </div>
                    <h1 className='text-center font-bold text-2xl text-secondary mb-2'>Corporate Service / Contract In Logistics</h1>
                    <p className=' text-center text-accent text-xs'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className="bg-white hover:bg-primary rounded-3xl p-8">
                    <div className="flex items-center justify-center">
                        <img src={servicesImg} alt="" />
                    </div>
                    <h1 className='text-center font-bold text-2xl text-secondary mb-2'>Parcel Return</h1>
                    <p className=' text-center text-accent text-xs'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;