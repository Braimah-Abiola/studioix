import React from 'react'
import { planstar, checkwhite, checkblue } from '../assets';
import styles from '../style';

const Plans = () =>  (
<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
      Our plans scale with your <br />product
      </h2>
      <p className={`${styles.paragraph} ${styles.flexCenter} w-full mt-2 text-center`}>
      find your perfect plan based on your needs or let us create you a custom plan</p>
      <img src={planstar} className="w-[100%] h-[100%] absolute -left-[-55%]"/>
    </div>

    <section className={`${styles.flexCenter} flex-wrap sm:mb-20`}>
    <div className={` ${styles.padding} items-center flex flex-col m-3 w-[400px] h-[600px] plan-bg-white rounded-[20px] box-shadow`}>
            <h4 className={`text center font-poppins font-regular xs:text-[24px] text-[20px] text-nav `}>Complex</h4>
            <h2 className={`text center font-poppins font-semibold xs:text-[48px] text-[40px] text-nav mt-5`}>$1500</h2>
            <div className='flex items-center justify-center mt-20'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <button type="button" className={`learn-more-btn mt-16 py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] w-[350px] outline-no ${styles}`}>
                Purchase Package
            </button>
        </div>

        <div className={` ${styles.padding} items-center flex flex-col m-3 w-[400px] h-[640px] plan-bg rounded-[20px] box-shadow`}>
            <h4 className={`text center font-poppins font-regular xs:text-[24px] text-[20px] text-white`}>Complex</h4>
            <h2 className={`text center font-poppins font-semibold xs:text-[48px] text-[40px] text-white mt-5`}>$1500</h2>
            <div className='flex items-center justify-center mt-20'>
                <img src={checkwhite} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph2} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkwhite} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph2} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkwhite} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph2} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkwhite} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph2} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkwhite} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph2} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkwhite} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph2} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <button type="button" className={`mt-16 py-4 px-6 font-poppins font-medium text-[18px] text-primary bt-blue-gradient rounded-[10px] w-[350px] outline-none ${styles}`}>
                Purchase Package
            </button>
        </div>

        <div className={` ${styles.padding} items-center flex flex-col m-3 w-[400px] h-[600px] plan-bg-white rounded-[20px] box-shadow`}>
            <h4 className={`text center font-poppins font-regular xs:text-[24px] text-[20px] text-nav `}>Complex</h4>
            <h2 className={`text center font-poppins font-semibold xs:text-[48px] text-[40px] text-nav mt-5`}>$1500</h2>
            <div className='flex items-center justify-center mt-20'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <img src={checkblue} className="w-[15px] h-[20px]"/>
                <p className={`${styles.paragraph} min-w-[300px] ml-2`}>Lorem ipsum dolor sit amet.</p>
            </div>
            <button type="button" className={`learn-more-btn mt-16 py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] w-[350px] outline-no ${styles}`}>
                Purchase Package
            </button>
        </div>


    </section>

</section>
);

export default Plans