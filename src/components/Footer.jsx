import React from 'react'
import styles from '../style';
import { logo } from '../assets';
import { socialMedia } from '../constants';

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img 
          src={logo}
          alt="hexagram"
          className="w-[160px] h-[32px] object-contain"/>
      </div>
      
      <div className="flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="w-full font-poppins font-normal text-center text-[16px] leading-[27px] text-dimBlack">
        Copyright Ⓒ 2022 Hexagram. All Rights Reserved.
      </p>

    </div>
  </section>
);

export default Footer