import React from 'react'
import { arrowdown, seekout01, seekout02 } from '../assets';
import styles from '../style';

const PreviousWork = () => (
<section id="work" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

<div className="absolute z-[0] w-[30%] h-[30%] -left-[50%] rounded-full blue__gradient bottom-40" />

<div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
  <h2 className={`${styles.heading2} text-center`}>
    Our Previous Work
  </h2>
    <p className={`${styles.paragraph} ${styles.flexCenter} mt-5 text-center`}>
        As a full stack agency, We help early stage startups with everything from branding, product design, video and investor decks. we’ve had the pleasure to collaborate with top teams working across a variety of B2C & B2B industries across the globe.
    </p>
</div>

    <section className={`${styles.flexCenter} flex-wrap sm:mb-20`}>
        <div className='justify-center items-center flex flex-row m-3 w-[400px] h-[240px] plan-bg-white rounded-[20px] box-shadow'>
            <img src={seekout01} alt="project image" className={`${styles.flexCenter} w-[400px] h-[240px] cursor-pointer rounded-[20px]`}/>
        </div>

        <div className='justify-center items-center flex flex-row m-3 w-[400px] h-[240px] plan-bg-white rounded-[20px] box-shadow'>
            <img src={seekout02} alt="project image" className={`${styles.flexCenter} w-[400px] h-[240px] cursor-pointer rounded-[20px]`}/>
        </div>

        <div className='justify-center items-center flex flex-row m-3 w-[400px] h-[240px] plan-bg-white rounded-[20px] box-shadow'>
            <img src={seekout01} alt="project image" className={`${styles.flexCenter} w-[400px] h-[240px] cursor-pointer rounded-[20px]`}/>
        </div>
    </section>

    <div className={`${styles.flexCenter} justify-center items-center flex flex-col flex-wrap sm:mb-20 cursor-pointer`}>
        <h2 className={`${styles.paragraph3} mb-4 uppercase`}>Load More</h2>
        <img src={arrowdown}/>
    </div>

</section>
);

export default PreviousWork