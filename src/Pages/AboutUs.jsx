import React from 'react';
import { NavLink } from 'react-router';

const AboutUs = () => {
    return (
        <div className='bg-white mb-20 mt-6 md:p-20 p-5 rounded-3xl'>
            <h1 className='text-5xl font-extrabold text-secondary my-5'>About Us</h1>
            <p className='text-[16px] text-accent mb-6'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className=""></div>
            <div className=" ">
                <ul className='menu menu-horizontal hover:text-[#5B6A2E] text-accent text-3xl'>
                <li><NavLink to="/story">Story</NavLink></li>
                <li><NavLink to="/mission">Mission</NavLink></li>
                <li><NavLink to="/success">Success</NavLink></li>
                <li><NavLink to="/teamOthers">Team & Others</NavLink></li>
                </ul>
            </div>
            <div className="text-xl text-accent">
                <p className='p-5'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
                <p className='p-5'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
                <p className='p-5'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.

                </p>
            </div>
        </div>
    );
};

export default AboutUs;