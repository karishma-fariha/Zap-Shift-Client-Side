import React from 'react';
import Banner from '../Components/Banner';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
    return (
       <div className="">
         <div className='my-10'>
           <Banner></Banner>
           
        </div>
        <section>
            <HowItWorks></HowItWorks>
        </section>
       </div>
    );
};

export default Home;