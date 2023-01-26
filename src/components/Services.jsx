import React from 'react'
import styles from '../style';
import { design, webdev, customsoftware, desktop, ai, support } from '../assets';

const Services = () => (
<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-20`}>
    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
        What we offer
      </h2>
      <p className={`${styles.paragraph} ${styles.flexCenter} w-full mt-5 text-center`}>
        As a full stack agency, We help early stage startups with everything from branding, product design, video and investor decks. we’ve had the pleasure to collaborate with top teams working across a variety of B2C & B2B industries across the globe.   
      </p>
    </div>

    <section className={`${styles.flexCenter} flex-wrap`}>
        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[370px] plan-bg-white rounded-[20px] box-shadow`}>
          <img src={design} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>UI/UX Design</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium finibus metus nec vestibulum. Donec consequat sagittis pellentesque.</p>
        </div>

        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[370px] plan-bg-white rounded-[20px] box-shadow`}>
          <img src={webdev} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Web Development (MERN & Django)</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium finibus metus nec vestibulum.</p>
        </div>

       <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[370px] plan-bg-white rounded-[20px] box-shadow`}>
          <img src={customsoftware} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Custom Software Development</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium finibus metus nec vestibulum.</p>
        </div>

        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[370px] plan-bg-white rounded-[20px] box-shadow`}>
          <img src={desktop} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Desktop App Development</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium finibus metus nec vestibulum.</p>
        </div>

        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[370px] plan-bg-white rounded-[20px] box-shadow`}>
          <img src={ai} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Generative AI Development</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium finibus metus nec vestibulum.</p>
        </div>

        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[370px] plan-bg-white rounded-[20px] box-shadow`}>
          <img src={support} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Maintenance & Support</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium finibus metus nec vestibulum. Donec consequat sagittis pellentesque.</p>
        </div>

    </section>

</section>
  );

export default Services