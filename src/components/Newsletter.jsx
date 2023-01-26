import React from 'react'
import styles from '../style';
import Input from 'rc-input';
import Subscribe from './Subscribe';
import { newsletterstar } from '../assets';

const Newsletter = () =>  (
<section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-10`}>
    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
      Tasty Things In <br/> Our Newsletter
      </h2>
      <img src={newsletterstar} className="w-[100%] h-[100%] absolute -left-[-60%]"/>
    </div>

<div className='flex flex-row items-center justify-center'>
    <Input placeholder="Enter your Email" className={`font-poppins font-normal text-white text-[18px]  ${styles.padding3} w-[650px] h-[100px] input-bg text-white rounded-[15px]`} />
    <Subscribe/>
</div>

</section>
);

export default Newsletter